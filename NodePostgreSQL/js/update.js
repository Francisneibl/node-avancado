const db = require('./database');

async function update(){

    await db.connect();

    await db.query("UPDATE participante SET nome = 'Carlos Augusto' WHERE id = 1");

    await db.query('DELETE FROM evento_participante WHERE participante_id = 1 AND evento_id = 1');

    await db.end();

    console.log('Atualização efetuadas com Sucesso');
}

update();