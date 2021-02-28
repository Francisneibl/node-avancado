import Express from 'express'
import bodyParser from 'body-parser';
import userRoute from  './routes/userRoute';
import postRoute from './routes/postRoute'
import database from './config/database';

const app = Express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.set('json spaces', 2);

userRoute(app);
postRoute(app);

app.get('/',(req, res)=> res.send("Bem vindo ao servidor"));

database.connect().then(()=>{
    app.listen(port, () => console.log('Api rodando na porta '+port));
});