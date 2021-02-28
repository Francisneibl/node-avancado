import PostModel from '../models/posts';

const PostRoute = (app)=>{
    app.route('/posts/:id?')
    .get(async (req, res)=>{
        
        try {
            const posts = await PostModel.find();
            if(posts.length !== 0){
                return res.send({posts}).status(200);
            }else{
                return res.status(200).send('Nenhum Usuario Encontrado!');
            }
        } catch (error) {
            res.status(400).send('Erro ao ao buscar usuários :(');
        }
    })
    .post(async (req, res)=>{
        try {
            const Users = PostModel(req.body);
            await Users.save();
            res.send('OK').status(201);
        } catch (error) {
            res.status(400).send(error);
        }
    })
    .put(async (req, res)=>{
        const {id} = req.params;
        if(!id){
            return res.status(400).send('Id is missing');
        }
        try {
            const postUpdate = await PostModel.findOneAndUpdate({_id: id}, req.body, {new: true});
            if(postUpdate){
                return res.status(200).send(postUpdate);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    })
    .delete(async (req, res)=>{
        const {id} = req.params;

        if(!id){
            return res.status(400).send('Id is missing!');
        }

        try {
            const deletedPost = await PostModel.deleteOne({_id: id});
            if(deletedPost.deletedCount){
                return res.status(200).send('OK');
            }
        } catch (error) {
            res.status(400).send('gasdf');
        }
    })
}

export default PostRoute;