// console.log("Hello World!");

import bodyParser from 'body-parser';
import express from 'express';
import user from './routes/user.js';
const app=express();
const port=8080;

const myLogger=function (req,res,next) {
    console.log("Logged");
    next();
}


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
});


app.use(myLogger);
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    // res.send("Hello World!");
    res.json({'message':'Get API Response!'})
})

app.use('/user',user);

app.get('/:id',(req,res)=>{
    // res.send("Hello World!");
    res.json({'message':'Get API Response!'+ req.params.id})
})

app.put('/user',(req,res)=>{
    // res.send("Hello World!");
    res.json({'message':'PUT API Response!'})
})


export default app;

