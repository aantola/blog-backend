import express from 'express' 
import UserRouter from 'Routes/user'
import AuthRouter from 'Routes/auth'
import cors from 'cors'

let corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
}

let router = express.Router()

router.use(cors(corsOptions))
router.use('/auth', AuthRouter)
router.use('/user', UserRouter)

export default router