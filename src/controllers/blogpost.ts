import {Request, Response} from 'express';

class BlogpostControllers {
    // TODO: Fix add req return 
    getall(req : Request, res: Response){
        
        res.send('authorization adquired')
    }

    get(req: Request, res: Response){

    }
}


export default BlogpostControllers;