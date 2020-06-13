const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('token')

    if(!token){
        return res
        .status(res.statusCode)
        .json({
            message : 'Authentication Failed',
            description : 'Validation token not found',
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err) {
                return res
                .status(res.statusCode)
                .json({
                    message : 'Authentication Failed',
                    error : err
                })
            }

            next()
        })
    } 
    catch(err){
        return res
        .status(401)
        .json({
            message : 'Authentication Failed',
            description : 'Token validation failed',
            error : err
        })
    }
}