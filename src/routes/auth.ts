// import UserController from 'Controllers/user'
import express from 'express' 
import {Request, Response} from 'express';
import AuthController from 'Controllers/auth'


let authController = new AuthController()
let router = express.Router()

// Check login credential
router.use('/verifytoken/:token', async (req: Request,res: Response) => {
    await authController.verifyToken(req.params.token).then( (userdata) => {
        console.log('Success')
        res.status(200).send(userdata)
    }).catch((e: Error) => {

        console.error('Failed to verify token with error: '+ e.message)
        res.status(401).send("Failed to verify token " + e)
    })
    
    
})

export default router