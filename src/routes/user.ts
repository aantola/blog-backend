import UserController from 'Controllers/user'
import express from 'express' 

let router = express.Router()
let userController = new UserController();

router.get('/auth', userController.auth)

export default router