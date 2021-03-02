const ProdutoController = require('../controllers/produtosController')
const generateToken = require('../services/auth')
const {protectRoute} = require('../middlewares/auth')

const ProdutosRoute = function(app){

    app.get('/produtos/:id?', (req, res)=>{
        ProdutoController.find(req, res);
    });

    app.post('/produtos',(req, res)=>{
        ProdutoController.create(req, res)
    });

    app.put('/produtos/:id', (req, res)=>{
        ProdutoController.update(req, res)
    });

    app.delete('/produtos/:id', protectRoute, (req, res)=>{
        ProdutoController.delete(req, res)
    });
}

module.exports = ProdutosRoute;