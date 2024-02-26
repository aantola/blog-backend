import TaskController from 'Controllers/task';
import express from 'express';
import asyncMiddleware from 'Middleware/asyncMiddleware';


let router = express.Router()
let taskController = new TaskController();

router.get('/getAll/:userId', asyncMiddleware(taskController.getAll))
router.post('/checkSolution', asyncMiddleware(taskController.checkSolution))

export default router