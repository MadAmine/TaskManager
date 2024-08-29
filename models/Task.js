import mongoose from "mongoose"

const taskSchema = new mongoose.Schema({
    title : {
        type:String,
        required:[true,"title is required"]
    },
    completed : {
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})



export const Task = mongoose.model('Task',taskSchema)