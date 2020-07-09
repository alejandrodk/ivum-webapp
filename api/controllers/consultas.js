const db = require("../database/models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    consultas : async (req, res) => {
        let full_data = req.query.full_data;
        let pacient = req.query.pacient;
        let payment = req.query.payment;
        let state = req.query.state;
        let date_from = req.query.date_from;
        let date_to = req.query.date_to;

        let where = {};
        if(pacient) where.cedula_paciente = pacient;
        if(state) where.estado == state;
        if(payment == 'unpaid') where.comprobante_id = null;
        if(payment == 'paid') where.comprobante_id = {[Op.is]: true};
        if(date_from || date_to) where.fecha = {
            [Op.gt]: date_from || new Date() - 300 * 24 * 60 * 60 * 100,
            [Op.lt]: date_to || new Date() + 100 * 24 * 60 * 60 * 100
        }
        try {
            let consultas = await db.consultas.findAll({
                where,
                attributes : full_data ?
                    { exclude : ['cedula_paciente','medico_id','examen_id','createdAt','updatedAt']}
                    :
                    { exclude : ['createdAt','updatedAt'] },
                include : full_data ? 
                    [
                        { model : db.pacientes, as : 'paciente', attributes : {exclude : ['createdAt','updatedAt']}},
                        { model : db.medicos, as : 'medico', attributes : {exclude : ['createdAt','updatedAt']}},
                        { model : db.examenes, as : 'examen', attributes : {exclude : ['createdAt','updatedAt']}}
                    ] 
                    : 
                    [],
                order : [['fecha', 'DESC']],
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