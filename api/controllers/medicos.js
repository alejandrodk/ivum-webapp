const db = require("../database/models");

module.exports = {
    medicos : async (req, res) => {
        try {
            let medicos = await db.medicos.findAll({
                attributes : {
                    exclude : ['createdAt','updatedAt']
                },
                logging: false
            });
            return res
            .status(200)
            .json({ medicos })
        }
        catch (err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed load collection',
                collection : 'Medicos',
                error : err
            }) 
        }
    },
    detail : async (req, res) => {
        let id = req.params.id;

        try {
            let medico = await db.medicos.findOne({where : { id }});
            return res
            .status(200)
            .json({ medico })
        }
        catch (err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed load resource',
                resource : 'Medico',
                id : id,
                error : err
            }) 
        }
    },
    create : async (req, res) => {
        try {
            let existMedico = await db.medicos.findOne({
                where : { cedula : req.body.cedula },
                logging : false
            })
            if(existMedico){
                return res
                .status(400)
                .json({
                    message : 'Creation failed',
                    description : '"Cedula" is already exist'
                })
            }
            let medico = await db.medicos.create({
                usuario_id : null,
                ...req.body
            },{ 
                logging: false 
            })
            if(medico){
                return res
                .status(201)
                .header('Location', `/medicos/${medico.id}`)
                .json({
                    message : 'Resource created successful',
                    medico
                }) 
            }
        }
        catch(err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed creating resource',
                resource : 'Medico',
                error : err
            })  
        }
    },
    update : async (req, res) => {
        let id = req.params.id;

        try {
            let medico = await db.medicos.update({
                ...req.body
            },{
                where : { id },
                logging : false
            })
            if(medico){
                return res
                .status(200)
                .json({
                    message : 'Successful update'
                })
            }
        }
        catch (err){
            return res
            .status(401)
            .json({
                message : 'Error updating doctor',
                error : err
            })
        }
    },
    delete : async (req, res) => {
        let id = req.params.id;
        try {
            let result = await db.medicos.destroy({
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
                message : 'Error deleting Resource',
                error : err
            })  
        }
    }
}