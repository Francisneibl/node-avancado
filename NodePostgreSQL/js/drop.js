const db = require('./database');

async function dropTables(){
    await db.connect();//Faz conexao com o banco de dados
    //Executa uma query no banco de dados
    await db.query('DROP TABLE evento CASCADE');
    await db.query('DROP TABLE participante CASCADE');//O uso do CASCADE elimina relações entre tabelas
    await db.query('DROP TABLE evento_participante CASCADE');
    await db.end();//Fecha conexão com banco de dados

    console.log('Tabelas removidas');
}

dropTables();