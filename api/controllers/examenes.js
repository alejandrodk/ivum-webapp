const db = require("../database/models");

module.exports = {
    examenes : async (req, res) => {
        try {
            let examenes = await db.examenes.findAll({
                attributes : {
                    exclude : ['createdAt','updatedAt']
                },
                logging: false
            });
            return res
            .status(200)
            .json(examenes)
        }
        catch (err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed load collection',
                collection : 'Exámenes',
                error : err
            }) 
        }
    },
    detail : async (req, res) => {
        let id = req.params.id;

        try {
            let examen = await db.examenes.findByPk(id);
            return res
            .status(200)
            .json({ examen })
        }
        catch (err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed load resource',
                resource : 'Exámen',
                id : id,
                error : err
            }) 
        }
    },
    create : async (req, res) => {
        try {
            let existExamen = await db.examenes.findOne({
                where : { nombre : req.body.nombre },
                logging : false
            })
            if(existExamen){
                return res
                .status(400)
                .json({
                    message : 'Creation failed',
                    description : '"Exámen" is already exist'
                })
            }
            req.body.id = 0;
            let examen = await db.examenes.create({
                ...req.body
            },{ 
                logging: false 
            })
            if(examen){
                return res
                .status(201)
                .header('Location', `/examenes/${examen.id}`)
                .json({
                    message : 'Resource created successful',
                    examen
                }) 
            }
        }
        catch(err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed creating resource',
                resource : 'Exámen',
                error : err
            })  
        }
    },
    update : async (req, res) => {
        let id = req.params.id;

        try {
            let examen = await db.examenes.update({
                ...req.body
            },{
                where : { id : id },
                logging : false
            })
            if(examen){
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
                message : 'Error updating Exámen',
                error : err
            })
        }
    },
    delete : async (req, res) => {
        let id = req.params.id;
        try {
            let result = await db.examenes.destroy({
                where : { id },
                logging : false
            })
            if(result){
                return res.status(204)
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
    },
}