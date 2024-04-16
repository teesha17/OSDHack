const express=require('express');
const app=express();
const cors=require('cors');
const port =3000;
const mongodb=require('./db');
app.use(cors());
mongodb();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"))



app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
})