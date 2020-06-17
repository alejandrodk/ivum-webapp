const db = require("../database/models");

module.exports = {
    consultas : async (req, res) => {
        try {
            let consultas = await db.consultas.findAll({
                attributes : {
                    exclude : ['createdAt','updatedAt']
                },
                logging : false
            });
            return res
            .status(200)
            .json(consultas)
        }
        catch(err){
            return res
            .status(200)
            .json({
                message : 'Failed load collection',
                collection : 'Consultas',
                error : err
            })
        }
    },
    detail : async (req, res) => {
        let id = req.params.id;

        try {
            let consulta = await db.consultas.findOne({where : { id }});
            return res
            .status(200)
            .json(consulta)
        }
        catch (err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed load resource',
                resource : 'Consulta',
                id : id,
                error : err
            }) 
        }
    },
    create : async (req, res) => {
        try {
            let consulta = await db.consultas.create({
                ...req.body
            },{
                logging : false
            })
            if(consulta){
                return res
                .status(201)
                .header('Location', `/consultas/${consulta.id}`)
                .json({
                    message : 'Resource created successful',
                    consulta
                })
            }
        }
        catch (err){
            return res
            .status(res.statusCode)
            .json({
                message : 'Failed creating resource',
                resource : 'Consulta',
                error : err
            }) 
        }
    },
    update : async (req, res) => {
        let id = req.params.id;

        try {
            let consulta = await db.consultas.update({
                ...req.body
            },{
                where : { id },
                logging : false
            })
            if(consulta){
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
                message : 'Error updating Consulta',
                error : err
            })
        }
    },
    delete : async (req, res) => {
        let id = req.params.id;
        try {
            let result = await db.consultas.destroy({
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