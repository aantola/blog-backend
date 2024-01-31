import {Request, Response, NextFunction} from 'express';
import { OAuth2Client } from 'google-auth-library'

async function authMiddleware(req : Request, res: Response, next: NextFunction ){
    console.log("verify token", req.body);
    let token = req.body.token;

    
    const client = new OAuth2Client();
    
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: process.env.GOOGLE_CLIEND_ID,  
    });
    const payload = ticket.getPayload();

    if (payload){
        req.body.googleId = payload["sub"];
        req.body.name = payload["name"];
        req.body.picture = payload["picture"];
        next();
    }else{
        throw Error("Failed to verify google token");
    }
    
    
}

export default authMiddleware;