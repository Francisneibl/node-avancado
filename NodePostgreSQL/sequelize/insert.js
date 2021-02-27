const models = require('./models');

async function insert(){

    //Eventos
    const eventNode = await models.evento.create({nome: 'Encontro de Nodes.js'});
    const eventPost = await models.evento.create({nome: 'Encontro de Postgresql'});

    //Participantes
    const carlos = await models.participante.create({nome: 'Carlos'});
    const augusto = await models.participante.create({nome: 'Augusto'});
    const janaina = await models.participante.create({nome: 'Janaina'});
    const rafael = await models.participante.create({nome: 'Rafael'});

    //Participantes em eventos
    
    await eventNode.setParticipantes([carlos, augusto, janaina]);
    await eventPost.setParticipantes([janaina, rafael]);

console.log(eventNode)
    await models.sequelize.close();

    console.log('Dados inseridos');
}

insert();