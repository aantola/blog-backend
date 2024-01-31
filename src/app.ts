import {config} from 'dotenv'
config()
import routes from 'Routes/index'
import express from 'express' 
import errorHandleMiddleware from 'Middleware/errorHandleMiddleware'

let app = express()


app.use(express.json())
app.use('/', (req,res, next) => {
    Promise.resolve(next('route')).catch((error) => {
        console.log("error catch")
        next(error)
    })
    
}, routes)

app.use(errorHandleMiddleware)

app.listen(10000, (): void => {
    console.log("Server listening on PORT", 10000);
});


