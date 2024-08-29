import { Task } from "../models/Task.js";

// export const getCompletedTask = async (req,res)=>{
//     const task = await Task.find({completed:true})
//     res.status(200).json({
//         data:task
//     })
// }

export const getAllTasks = async (req,res)=>{
    const task = await Task.find({})
    res.status(200).json({
        data:task
    })
}

export const createTask = async (req,res) =>{
    const task = req.body;
    try{
    const created = await  Task.create(task);
    res.status(201).json({
            "status" : "created",
            data:task
        })
    }catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}


export const deleteTask = async (req,res) =>{
    try{
        const deleted = await Task.deleteOne({_id: req.params.id})
        res.status(200).json({
        "status" : "Deleted",
        data:deleted
    })
        }catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}

