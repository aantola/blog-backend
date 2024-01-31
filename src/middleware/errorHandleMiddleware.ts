import {Request, Response, NextFunction} from 'express';

function errorHandle(err: Error, req: Request, res: Response, next: NextFunction){
    if (res.headersSent) {
        return next(err)
    }
    res.status(400).send(err.message)
}

export default errorHandle;