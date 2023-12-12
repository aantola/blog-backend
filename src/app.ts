import routes from 'Routes/index'
import express from 'express' 

let app = express()

app.use('/', routes)


app.listen(10000, (): void => {
    console.log("Server listening on PORT", 10000);
});


