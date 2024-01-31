import UserController from 'Controllers/user';
import express from 'express';
import asyncMiddleware from 'Middleware/asyncMiddleware';


let router = express.Router()
let userController = new UserController();

router.post('/login', asyncMiddleware(userController.create))

export default router