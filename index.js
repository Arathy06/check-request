
var express = require('express')
var bodyParser = require('body-parser')

var app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/large",(res,req)=>{

var getnum=parseInt(req.body.num);

if(getnum%2==0)
{
    res.send("Even number")
}
else
{
    res.send("Odd number")
}
})


app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})