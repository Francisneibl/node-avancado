const fs = require('fs');
const path = require('path');

/**
 * Leitura das chaves.
 */
const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'),'utf-8');
const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'),'utf-8');

module.exports = {
    privateKey,
    publicKey,
    options: {
        expiresIn: '50s',//Tempo para token expirar
        algorithm: 'RS256'//Algoritmo usado na criptografia
    }
}