
import { OAuth2Client } from 'google-auth-library'

class AuthController {

    async verifyToken(token: string){
        const client = new OAuth2Client();

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIEND_ID,  
        });
        const payload = ticket.getPayload();
        if (payload){
            const name = payload["name"];
            const picture = payload["picture"]
            return {name, picture}
        }
        
    }
}



export default AuthController