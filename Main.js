const express = require("express")
const app = express()
const port = 5000
const middleware = function(req,res,next){
    const d =new Date()
    var day =d.getDay()
    var hours = d.getHours()
    if(day==6 || day==0 || hours<9 || hours>16){
        res.send('<h1>Come back later</h1>')
    }
    else{
        next()
    }
}

app.get('/',middleware,(req,res)=>{
    res.sendFile(__dirname+'/public/Home.html')
})
app.get('/Services',middleware,(req,res)=>{
    res.sendFile(__dirname+'/public/Services.html')
})
app.get('/Contact',middleware,(req,res)=>{
    res.sendFile(__dirname+'/public/Contact.html')
})
 app.get('/style.css',(req,res)=>{
     res.sendFile(__dirname+'/Public/style.css')
 })



app.listen(port,console.log("le server est en marche"))