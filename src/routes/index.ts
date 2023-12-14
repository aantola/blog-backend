import express from 'express' 
import UserRouter from 'Routes/user'
import AuthRouter from 'Routes/auth'

let router = express.Router()

router.use('/auth', AuthRouter)
router.use('/user', UserRouter)

export default router