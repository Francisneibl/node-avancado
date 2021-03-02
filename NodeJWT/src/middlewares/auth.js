const jwt = require('jsonwebtoken');
const config  = require('../config/keys')

const verifyToken = async (req, res, next)=>{
    const token = req.headers.authorization && req.headers.authorization.split(" ")[0]=== 'Bearer'
    ? req.headers.authorization.split(' ')[1]
    : (req.body.token || req.query.token || req.headers['x-access-token'])//Nem sempre o token é passado no authorization

    if(!token){
        return next();//Caso o token nao seja passado pulamos para a proxima rota
    }

    try {
        const decoteToken = await jwt.verify(token,config.publicKey,config.options);//Função para decodificar token
        req.decoded = decoteToken
        next()
    } catch (error) {
        res.status(401).send({
            error: 'Token não informado ou invalido!'
        });
    }
}

const protectRoute = (req, res, next)=>{
    if(req.decoded){
        return next();
    }

    res.status(401).send({
        error: 'Não autorizado!'
    })
}

module.exports = {
    protectRoute,
    verifyToken
}