const models = require('./models');
const Op = require('sequelize').Op;

async function selec(){

    /**
     * Regra 1: Listar apenas eventos que tenham Nodejs no nome;
     * Regra 2: Dentro desse(s) evento(s), listar apenas pessoas qua NÃO tenham a letra "o" no nome.
     */

     const eventoComParticipantes = await models.evento.findAll({
        where: {
            nome: {
                [Op.like]: '%Nodejs%'
            }
        },

        include: [
            {
                model: models.participante,
                where: {
                    nome: {
                        [Op.notLike]: '%o%'
                    }
                }
            }
        ]
         
     });

     eventoComParticipantes.forEach(evento => {
        console.log('Evento: ',evento.nome);
        evento.participantes.forEach(participante =>{
            console.log('------------> Participante: ',participante.nome)
        })
     });

     await models.sequelize.close();
}

selec();