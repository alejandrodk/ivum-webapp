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
    detail : (req, res) => {

    },
    create : async (req, res) => {

        let { usuario, clave, tipo } = req.body;

        try {
            let existUser = await db.usuarios.findOne({ where: {usuario : usuario}, logging : false})
            if(existUser){
                return res
                .status(400)
                .json({
                    message : 'Invalid user',
                    description : 'Username is already use'
                })
            }
        } catch(err){
            throw err
        }

        bcrypt.hash(clave, 10, (err, str) => {
            if(err){
                return res
                .status(200)
                .json({
                    message : 'Error in Bcrypt',
                    description : 'Failed Hashing Password'
                })
            }
            clave = str;

            db.usuarios.create({
                usuario,
                clave,
                tipo
            })
            .then(result => {
                if(result){
                    return res
                    .status(201)
                    .header('Location', `/usuarios/${result.id}`)
                    .json({
                        status_code : res.statusCode,
                        user : result
                    })
                }
            })
            .catch(err => {
                return res
                .status(200)
                .json({
                    message : 'Creation Failed',
                    description : 'Error creating resource',
                    error : err
                })
            })
        })
    },
    update : (req, res) => {

    },
    delete : (req, res) => {
        
    },
    validate : (req, res) => {
        let { usuario, clave } = req.body;

        db.usuarios.findOne({ where : { usuario : usuario }, logging : false})
        .then(user => {
            bcrypt.compare(clave, user.clave, (err, match) => {
                if(err) console.error(err)

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
            })
            
            
        })
        .catch(err => {
            return res
            .status(401)
            .json({
                message : 'Authentication Failed',
                description : 'Wrong Password or Username passed',
                error : err
            })
        })
    }
}