const db = require("../database/models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    usuarios : async (req, res) => {
        try {
            usuarios = await db.usuarios.findAll({logging : false})
            return res
            .status(200)
            .json({ usuarios })
        }
        catch(err){
            return res
            .status(500)
            .json({
                message : 'Database Error',
                description : err
            })   
        }
    },
    detail : async (req, res) => {
        let id = req.params.id;
        try {
            let user = await db.usuarios.findByPk(id)
            return res
            .status(200)
            .json({
                user
            })
        }
        catch(err){
            return res
            .status(404)
            .json({
                message : 'Invalid ID',
                description : 'No user found with that id',
                error : err
            })
        }
    },
    create : async (req, res) => {

        let { usuario, clave, tipo } = req.body;

        try {
            let existUser = await db.usuarios.findOne({ 
                where: {usuario : usuario}, 
                logging : false
            })
            if(existUser){
                return res
                .status(400)
                .json({
                    message : 'Invalid user',
                    description : 'Username is already use'
                })
            }
            let hashPass = await bcrypt.hash(clave, 10);
            let user = await db.usuarios.create({
                usuario,
                clave : hashPass,
                tipo
            })
            if(user){
                return res
                .status(201)
                .header('Location', `/usuarios/${user.id}`)
                .json({
                    status_code : res.statusCode,
                    user
                })
            }
        }
        catch(err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Creation Failed',
                error : err
            })
        }
    },
    validate : async (req, res) => {
        let { usuario, clave } = req.body;

        try {
            let user = await db.usuarios.findOne({ 
                where : { usuario : usuario }, 
                attributes : ['usuario','clave'], 
                logging : false
            })
            let match = await bcrypt.compare(clave, user.clave);
            if(match){
                const payload = { usuario : user.usuario }
                jwt.sign(
                    payload, process.env.JWT_SECRET,{ expiresIn : "12h" },(err, token) => {
                        if(err) throw err;
                        res
                        .status(200)
                        .header('token', token)
                        .json({
                            message : 'Authentication Successful',
                            token
                        })
                    }
                )
            } else {
                return res
                .status(401)
                .json({
                    message : 'Authentication Failed',
                    description : 'Wrong Password passed'
                })
            }
        }
        catch(err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Error validating user',
                error : err
            })
        }
    },
    update : async (req, res) => {
        let { usuario, clave, nueva_clave } = req.body;
        let id = req.params.id;

        try {
            let user = await db.usuarios.findOne({
                where : { id }, 
                attributes : ['clave'],
                logging : false
            })
            let match = await bcrypt.compare(clave, user.clave);

            if(match){
                let hashPass = await bcrypt.hash(nueva_clave, 10)
                let user = await db.usuarios.update({
                    usuario,
                    clave : hashPass
                },{ 
                    where : { id }
                })
                if(user){
                    return res
                    .status(200)
                    .json({
                        message : 'Successful update'
                    })
                }
            } else {
                return res
                .status(401)
                .json({
                    message : 'Authentication Failed',
                    description : 'Wrong Password passed',
                })
            }
        }
        catch(err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Error updating user',
                error : err
            })
        }
    },
    delete : (req, res) => {
        let id = req.params.id;
        try {
            let result = db.usuarios.destroy({
                where : { id }
            })
            if(result){
                return res
                .status(204)
                .json({
                    message : 'Deleting resource successfull',
                    description : `User with id ${id} is deleted from database`,
                })
            }
        }
        catch(err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Error deleting user',
                error : err
            }) 
        }
    },
}