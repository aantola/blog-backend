import express from 'express';
import UserRouter from 'Routes/user';
import TaskRouter from 'Routes/task';
import cors from 'cors';
import authMiddleware from 'Middleware/authMiddleware';
import asyncMiddleware from 'Middleware/asyncMiddleware';


let corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionsSuccessStatus: 200,
}

let router = express.Router()

router.use(cors(corsOptions))

router.use('/user', asyncMiddleware(authMiddleware) ,UserRouter);
router.use('/task', TaskRouter);

export default router