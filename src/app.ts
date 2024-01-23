import {config} from 'dotenv'
config()
import routes from 'Routes/index'
import express from 'express' 
import query from 'Models/DB'

let app = express()

app.use('/', routes)

app.get('/ping', async (req, res) => {
    const result = await query('SELECT NOW()')
    console.log(result.rows)
    return res.json(result.rows)
} )


app.listen(10000, (): void => {
    console.log("Server listening on PORT", 10000);
});


