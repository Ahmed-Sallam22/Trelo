import { Schema,model } from "mongoose";

const userSchema=new Schema({
    userName :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password :{
        type:String,
        required:true
    },
    age :{
        type:Number,
        required:true
    },
    gender :{
        type:String,
        required:true,
        enum:['Male','Female']
    },
    phone :{
        type:Number,
        required:true
    },
    isOnline:{
        type:Boolean,
        default:false
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    Confirm_Email:{
        type:Boolean,
        default:false
    }
}
    ,{timestamps:true})
const userModel=model("User",userSchema)
    export default userModel