import Hapi from 'hapi';

import database from './config/database';
import userRoute from './routes/usersRoute';
import postRoute from './routes/postRoute';

const port = 3000;
const server = Hapi.server({
    host: 'localhost',
    port,
    routes: {
        json: {
            space: 4
        }
    }
});

userRoute(server);
postRoute(server);

server.route({
    method: 'GET',
    path: '/',
    handler: ()=> 'Bem vindo ao servidor Hapi!'
})

database.connect().then(async ()=>{
    try {
        await server.start();
    } catch (error) {
        console.log(error)
    }

    console.log('Server runnin at:', server.info.uri);
})