const models = require('./models');

async function create(){
    /*Sincroniza o banco com o sequelize,
    o parametro passado para a função força deletar as tabelas para cria-las novamente*/
    await models.sequelize.sync({force: true});
    await models.sequelize.close();

    console.log('Banco sicronizado!');
}

create();