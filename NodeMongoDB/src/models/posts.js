import Mongoose from 'mongoose';

const definitions = {type: String, required: true};
const schemaPost = new Mongoose.Schema({
    title: definitions,
    content: definitions,
    author: definitions,
    publishDate: {type: Date, required: true}
},{
    timestamps: {createdAt: true, updatedAt: true},
    toJSON: {
        virtuals: true,
        transform(doc, ret){
            ret.id = ret._id
            delete ret._id
        },
        versionKey: false,
    }

});

const PostModel = Mongoose.model('Post',schemaPost);

export default PostModel;