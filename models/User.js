import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:[true,'first name is required']
    },
    email : {
        type:String,
        unique:[true,'email already in use'],
        required:[true,'email name is required']
    },
    password : {
        type:String,
        required:[true,'password is required']
    },
    salary : {
        type:Number,
        required:true
    },
    dateOfIntegration : {
        type:Date,
        default:Date.now
    },
    role : {
        type:String,
        required:[true,'role is required'],
        enum:['user','admin'],
        default:'user'
    }

},{
    timestamps:true
})



export const User = mongoose.model('User',userSchema)
