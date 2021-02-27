const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: '1234',
    dialect: 'postgres',
    port: 5432,
    logging: true
});

module.exports = sequelize;

//Testando conexão com banco de dados
async function test(){
    try {
        let result = await sequelize.authenticate();
       // console.log('Sequelize realizou a conexão com sucesso!');
    } catch (error) {
        console.log('Houve um erro ao conectar com o banco de dados:');
        console.log(error);
        process.exit();
    }
}

test();