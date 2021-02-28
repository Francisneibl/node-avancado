import Mongoose from 'mongoose';

/**
 * Função mongoose para gerar um schema no mongoDB
 */
const schema = new Mongoose.Schema({
    firstName:String,
    lastName: String,
    //é possivel passar outras opções como validacões
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Not duplicate emails'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email']
    },
}, {
    //Podemos passar algumas opçoes para o schema
    timestamps: {createAt: true, updateAt: true},
    toJSON: {
        virtuals: true,
        transform(doc, ret){
            ret.id = ret._id
            delete ret._id
        },
        versionKey: false,
    }
});

const UsersModel = Mongoose.model('Users', schema);

export default UsersModel;