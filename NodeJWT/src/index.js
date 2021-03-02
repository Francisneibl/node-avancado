const Express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/_database');
const ProdutosRoute = require('./routes/produtos')
const {verifyToken} = require('./middlewares/auth')
const {generateToken} = require('./middlewares/auth')

const port  = 3000;

const app = Express();
app.set('json spcaces', 4)
app.use(bodyParser.urlencoded({extended: false}));
app.use(verifyToken);

app.get('/', (req, res)=> res.send('Você está em uma API segura :)'))
ProdutosRoute(app)

/**
 * Rota para login e geração de token
 * OBS: Implementar consulta de usuari ao banco de daddos
 * e persistencia de token
 */
app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username !== 'admin' || password !== '123456') {
        return res.status(400).send({ error: 'Usuário ou senha inválidos!' })
    }

    const payload = {
        sub: 1,
        name: 'Nome Usuário',
        roles: ['admin']
    }
    const token = generateToken(payload)

    res.send({
        token
    })
});


db.connect().then(() => {
    app.listen(port, ()=> console.log('Servidor rodando em : localhost:'+port))
})