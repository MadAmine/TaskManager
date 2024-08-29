import { User } from "../models/User.js";

export const getUser= async (req,res)=>{
    const user = await User.findOne({_id: req.params.id})
    res.status(200).json({
        data:user
    })
}

export const getAllUsers = async (req,res)=>{


    let myQuery = {...req.query}
    const arr = ["page","limit","fields","sort"]
    arr.forEach(element => {
    delete myQuery[element]
})
    let queryStr = JSON.stringify(myQuery)
    queryStr = queryStr.replace(/\bgte|lte|gt|lt\b/g, (ele) => `$${ele}`)
    
    const queryObj = JSON.parse(queryStr)



    let query = User.find(queryObj)

    if(req.query.sort){
        let reqSort = req.query.sort.split(',').join(' ')
        query = query.sort(reqSort)
    }

    if(req.query.fields){
        let reqFields = req.query.fields.split(',').join(' ')
        query = query.select(`${reqFields} -password`)
        }
    else{
        query = query.select('-password')
    }
    
    const users = await query

    res.status(200).json({
        data:users,
        "user count" : query.length
    })
}

export const createUser = async (req,res) =>{
    
    const user = req.body;
    try{
    const created = await  User.create(user);
    res.status(201).json({
            data:created
        })
    }catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}   

export const deleteUser = async (req,res) =>{

        try{
        const deleted = await User.deleteOne({_id: req.params.id})
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