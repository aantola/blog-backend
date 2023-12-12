import express from 'express' 
import UserRouter from 'Routes/user'


let router = express.Router()


router.use('/user', UserRouter)

export default router