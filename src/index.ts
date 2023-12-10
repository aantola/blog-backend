const express = require("express")
var app = express()

console.log('NODE_ENV:', process.env.NODE_ENV);

app.get("/",function(request,response){
    response.send("Hello World!")
})
app.listen(10000, function () {
    console.log("Started application on port %d", 10000)
});