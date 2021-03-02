const Mongoose = require('mongoose');

const config = {
    uri: 'mongodb://localhost:27017/node-jwt',
    optios:  {
        useNewUrlParser: true,
        useFindAndModify: false,
    }
}

const db = Mongoose.connection;

db.on('error', ()=>{
    console.error('Erro ao conectar ao banco de dados!')
});

db.on('open', ()=>{
    console.log('Conectado ao banco de dados com sucesso!')
})

module.exports = { connect: ()=> Mongoose.connect(config.uri, config.optios)};