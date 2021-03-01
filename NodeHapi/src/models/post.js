
import Mongoose from 'mongoose'

const options = {type: String, required: true}

const schema = Mongoose.Schema({
    title: options,
    content: options,
    author: options,
    data: {type: Date}
},{
    timestamps: {createdAt: true, updatedAt: true},
    versionKey: false,
    toJSON:{
        virtuals: true,
        transform(doc, ret){
            ret.id = ret._id,
            delete ret._id
        }
    }
});

const PostModel = Mongoose.model('Posts',schema);

export default PostModel;