const db = require("../database/models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    usuarios : async (req, res) => {
        try {
            let usuarios = await db.usuarios.findAll({
                attributes : {
                    exclude : ['createdAt','updatedAt']
                },
                logging : false
            })
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
            let user = await db.usuarios.findOne({ 
                where : { id },
                attributes : ['id','']
            })
            return res
            .status(200)
            .json(user)
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
                attributes : { exclude : ['createdAt','updatedAt']},
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
                        .json({
                            message : 'Authentication Successful',
                            user : {
                                id : user.id,
                                tipo : user.tipo,
                                cedula : user.cedula
                            },
                            token
                        })
                    }
                )
            } else {
                return res
                .status(res.statusCode)
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
                    where : { id },
                    logging : false
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
    delete : async (req, res) => {
        let id = req.params.id;
        try {
            let result = await db.usuarios.destroy({
                where : { id },
                logging : false
            })
            if(result){
                return res.status(204).send('Successful deleting resource')
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