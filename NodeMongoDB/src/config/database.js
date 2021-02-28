import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const config = {
    uri: 'mongodb://localhost:27017/node-mongoose',
    options: {
        userNewUrlParser: true,
        useFindAndModify: false,
    },
}

//Esses metodos escutam oque ocorre com a conexão após conectada;
mongoose.connection.on('open', () =>{
    console.log('Sucessfully connected to database.');
});
//Em caso de algum erro após a conexão podemos trata-los.
mongoose.connection.on('error', ()=>{
    throw new Error('Could not connect to MongoDB.');
});

export default {
    connect: ()=> mongoose.connect(config.uri, config.options)
}