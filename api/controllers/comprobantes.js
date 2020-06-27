const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    comprobantes : async (req, res) => {

    },
    detail : async (req, res) => {
        
    },
    create : async (req, res) => { 
    
        transaction = await sequelize.transaction();
        
        try {
            let consultas = req.body.consultas;
            delete req.body.consultas;
 
            let comprobante = await db.comprobantes.create({
                ...req.body
            },{
                logging : false,
                transaction
            })

            for(consulta of consultas){
                await db.consultas.update({
                    estado : 'Pagado',
                    comprobante_id : comprobante.id
                },{
                    where : { id : consulta.id },
                    logging : false,
                    transaction
                })
            }

            // commit
            await transaction.commit();

            return res
            .status(201)
            .header('Location', `/comprobantes/${comprobante.id}`)
            .json({
                message : 'Resource created successful',
                comprobante
            })
        }
        catch (err){
            await transaction.rollback();

            return res
            .status(res.statusCode)
            .json({
                message : 'Failed creating resource',
                resource : 'Comprobante',
                error : err
            }) 
        }
    },
    update : async (req, res) => {

    },
    delete : async (req, res) => {

    }
}