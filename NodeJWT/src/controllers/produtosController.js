const { create } = require('../models/produto');
const ModelProduto = require('../models/produto');

const ProdutoController = {
    async find(req, res){
        const {id} = req.params;
        const query = {}

        if(id){
            query._id = id
        }

        try {
            const produtos = await ModelProduto.find(query);
            if(produtos.length){
                return res.send({produtos}).status(200);
            }
            return res.send('Nenhum produdo encontrado').status(200)
        } catch (error) {
            return res.send(error).status(400);
        }
    },

    async create(req, res){
        try {
            const produto = new ModelProduto(req.body);
            await produto.save();
            return res.send('OK').status(201);
        } catch (error) {
            res.send(error.name+' : '+error.message).status(400)
        }
    },

    async update(req, res){
        const {id} = req.params

        if(!id){
            return res.send('ID is missing.').status(400)
        }

        try {
            const produto = await ModelProduto.findOneAndUpdate({_id: id},req.body, {new: true});
            if(produto){
                return res.send(produto).status(200);
            }
            return res.send('Erro ao alterar produto').status(200)
        } catch (error) {
           return res.send(error).status(400) 
        }
    },

    async delete(req, res){
        const {id} = req.params;
        if(!id){
           return res.send("ID is missing.").status(400)
        }

        try {
            const deletedProduto = await ModelProduto.deleteOne({_id: id})
            if(deletedProduto.deletedCount){
                return res.send("OK").status(200)
            }
            
            return res.send('Não foi possivel deletar produto')
            
        } catch (error) {
            console.log('test')
            return res.send(error).status(400)
        }
    }
}
module.exports = ProdutoController;