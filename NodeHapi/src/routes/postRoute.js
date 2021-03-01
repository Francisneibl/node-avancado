import PostModel from '../models/post';
import PostController from '../controller/postContoller';
import Joi from 'joi';

const postContoller = new PostController(PostModel);

const PostRoute = (server)=>{

    server.route({
        method: 'GET',
        path: '/posts/{id?}',
        handler: (request, h) => postContoller.find(request, h)
    });

    server.route({
        method: 'POST',
        path: '/posts',
        handler: (request, h)=> postContoller.create(request, h),
        options:{
            validate: {
                payload: {
                    title: Joi.string().required(),
                    content: Joi.string().required(),
                    author: Joi.string().required(),
                    data: Joi.date().required()
                }
            }
        }
    });

    server.route({
        method: 'PUT',
        path: '/posts/{id}',
        handler: (request, h)=> postContoller.update(request, h),
        options: {
            validate: {
                payload: {
                    title: Joi.string().required(),
                    content: Joi.string().required(),
                    author: Joi.string().required(),
                    data: Joi.date().required()
                }
            }
        }
    });

    server.route({
        method: 'DELETE',
        path: '/posts/{id}',
        handler: (request, h)=> postContoller.delete(request, h),
        options: {
            validate:{
                params:{
                    id: Joi.required()
                }
            }
        }
    });

}

export default PostRoute;