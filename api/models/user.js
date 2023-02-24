import mongoose ,{Schema} from "mongoose";

// const UserSchema =new mongoose.Schema()

const UserSchema=new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:String
})

const userModel=mongoose.model('User',UserSchema);

export default userModel;