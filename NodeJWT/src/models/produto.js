const Mongoose = require('mongoose');
const ProdutosRoute = require('../routes/produtos');

const schema = Mongoose.Schema({
    descricao: {type: String, required: [true, 'Descricao necessaria!']},
    preco: {type: Number, required: [true, 'Preco necessario!']},
    quantidade: {type: Number, required: [true, 'Quantidade necessaria!']},
    dataCriacao: {type: Date, default: Date.now}
},{
    versionKey: false,
    toJSON: {
        transform(doc, ret){
            ret.id = ret._id,
            delete ret._id
        },
        virtuals: true
    }
});

const ProdutoModel = Mongoose.model('produtos', schema);

module.exports = ProdutoModel;