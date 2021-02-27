const db = require('./database');

async function listData(){
    await db.connect();

    var result;

    //Lista participantes
    result = await db.query("SELECT * FROM participante");
    console.log('Participantes')
    console.log(result.rows);

    //Lista Eventos
    result = await db.query("SELECT * FROM evento");
    console.log('EVENTOS');
    console.log(result.rows);

    //Lista Participantes e eventos
    const query = "SELECT e.nome as Evento, p.nome AS Participante FROM evento_participante as ep \
    inner join participante as p on p.id=ep.participante_id \
    INNER JOIN evento AS e ON e.id = ep.evento_id";
    result = await db.query(query);
    console.log('Evento e Participantes');
    console.log(result.rows)
    db.end();
}

listData();