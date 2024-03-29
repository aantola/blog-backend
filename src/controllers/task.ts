import {Request, Response} from 'express';
import { getTasks, checkTask, addSolvedUserTask } from 'Models/task';

class TaskController {

    async getAll(req: Request, res: Response){
        let userId = Number(req.params.userId);
        const tasks = await getTasks(userId);
        res.send(tasks);
        
    }


    async checkSolution(req: Request, res: Response){
        let userId = req.body.userId;
        let taskId = req.body.id;
        let answer = req.body.answer;
        if(taskId != undefined && answer != undefined && userId != undefined){
            let correctAnswer = await checkTask(taskId);
            console.log("Answer", correctAnswer);
            if(correctAnswer && correctAnswer == answer){
                await addSolvedUserTask(taskId, userId);
                res.status(200).send("CORRECT");
            }else{
                res.status(200).send("WRONG");
            }

        }else{
            res.status(400).send(Error("An error has ocurred, missing data in request"))
        }
    }
}


export default TaskController;