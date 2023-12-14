import {Request, Response} from 'express';

class UserController {
    // TODO: Fix add req return 
    auth(req : Request, res: Response){
        console.log('auth request')
        res.send('authorization adquired')
    }
}


export default UserController;