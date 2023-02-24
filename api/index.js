import  express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import bcrypt from 'bcryptjs'
import User from './models/user.js'

dotenv.config()
const bcryptSalt=bcrypt.genSaltSync(10);
const app=express();

app.use(express.json())


app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

// console.log(process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL,{})
app.get('/test', (req,res)=>{
    res.json('test ok');
})


app.post('/register', async(req,res)=>{
    console.log(req.body)
    const {name, email, password}=req.body;
 try{
    const user= await   User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt)
    })

  await  res.json(user)
 }catch (e){
    res.status(422).json(e);
 }
  
})
app.listen(4000, ()=>{
    console.log("server running on port 4000");
})



//6XYs6GQTTRB8LHtq