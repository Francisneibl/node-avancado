const models = require('./models');
const Op = require('sequelize').Op;

async function update(){

    const eventos = await models.evento.update({
        nome: 'Encontro de Nodejs',
    },{
        where: {
            nome: {
                [Op.like]: '%Nodes.js%'
            }
        }
    });

    console.log(eventos);

    await models.sequelize.close();
}

update();