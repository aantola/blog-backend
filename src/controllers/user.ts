import {Request, Response} from 'express';
import {getUser, createUser, deleteUser, userSchema} from 'Models/user'; 

class UserController {

    async create(req: Request, res:Response){
        let googleId = req.body.googleId
        let username = req.body.name
        if(googleId && username){

            const user = await createUser({username, googleId})
            res.send(JSON.stringify(user))
        } 
    }
    async read(req : Request, res: Response){
        if(req.body.id){
            const user = await getUser(req.body.id)
            res.send(user)
        }  
        throw Error("Cant find user with id"+req.body.id)
    }

    async update(req : Request, res: Response){
        // TODO
    }
    async delete(req : Request, res: Response){
        let googleId = req.body.googleId
        let id = req.body.id
        if(id && googleId){
            const deleted = await deleteUser(parseInt(id), googleId)
            res.send(deleted)
        }  
        throw Error("User doesn't exist with id"+ id)
    }
}


export default UserController;