import  express  from "express";
import cors from 'cors';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import User from './models/user.js'

dotenv.config()
const bcryptSalt=bcrypt.genSaltSync(10);
const jwtSecreate="wejhwer4fwkjdfu435345kjbfdefbweiuf";
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


//Register user
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


//Login user

app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});

    
    if(user){
        const passOk=await bcrypt.compareSync(password,user.password);
        if(passOk){
            jwt.sign({email:user.email, id:user._id}, jwtSecreate, {}, (err,token)=>{
                    if(err) throw err;
                res.cookie('token', token).json('pass ok');
            });
            
        }else{
            res.status(422).json("pass not ok")
        }
        
    }else{
        res.json('Not Found')
    }
})  
app.listen(4000, ()=>{      
    console.log("server running on port 4000");
})



//6XYs6GQTTRB8LHtq