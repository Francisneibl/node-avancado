import Boom from 'boom'


class PostController {
    constructor(Posts){
        this.Posts = Posts;
    }

    async find(request){
        const {id} = request.params
        const query = {}
        if(id){
            query._id = id
        }

        try {
            const users  = await this.Posts.find(query);
            return {users};

        } catch (error) {
            return Boom.badRequest(error);
        }
    }

    async create(request, h){
        try {
            const post = new this.Posts(request.payload);
            await post.save();
            return h.response().code(201);
        } catch (error) {
            return Boom.badRequest(error)
        }
    }

    async update(request, h){
        const {id} = request.params;

        if(!id){
            return Boom.badRequest('Id is missing.')
        }

        try {
            const updatePost = await this.Posts.findOneAndUpdate({_id: id},request.paylod, {new: true})
            if(updatePost){
                return h.response().code(200)
            }
            return Boom.badRequest('Could not update the post')
        } catch (error) {
            return Boom.badRequest(error)
        }
    }

    async delete(request, h){
        const {id} = request.params
        if(!id){
            return Boom.badRequest('Id is missing')
        }

        try {
            const deletedPost = await this.Posts.deleteOne({_id: id});
            if(deletedPost.deletedCount){
                return h.response().code(200);
            }
            return Boom.badRequest('Could not delete the post.')
        } catch (error) {
            return Boom.badRequest(error)
        }
    }
}

export default PostController;