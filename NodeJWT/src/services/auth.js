const jwt = require('jsonwebtoken');

const config = require('../config/keys');

/**
 * Função para gerar token
 * @param {*} payload 
 */
const generateToken = (payload)=>{
    return jwt.sign(payload,config.privateKey,config.options);
}

module.exports = generateToken;