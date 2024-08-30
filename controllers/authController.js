import { User } from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

export const register = async (req,res,next) => {
    const {fullname,email,password} = req.body
    try{
        const userExist = await User.findOne({email : email})
        
        if(userExist){
            return res.status(400).json({
                status : "failed",
                message: "email already in use"
            })
        }
            const hashedPw = await bcrypt.hash(password,10)
            const token = await jwt.sign({email: email},process.env.PRIVATEKEY, { expiresIn: "1h" })
                const createdUser = await  User.create({
                    fullname : fullname,
                    email : email,
                    password : hashedPw
                })
                res.status(201).json({
                        status : "success",
                        message : "user successfully created",
                        data:createdUser,
                        token : token
                    })
                    
    }catch(error){
        res.status(400).json({
            status : 'failed',
            error : error.message
        })
    }
}


export const login = async (req,res,next) => {
    const {role,email,password} = req.body
    try{
        const userExist = await User.findOne({email : email})
        
        if(!userExist){
            return res.status(404).json({
                status : "failed",
                message: "this user doesn't exist, please register"
            })
        }
        const verifyPw = await bcrypt.compare(password,userExist.password)
        if (!verifyPw) {
            return res.status(400).json({
                status : "failed",
                message: "incorrect passord, please try again"
            })
        }
        const token = await jwt.sign({email: email,role: role},process.env.PRIVATEKEY, { expiresIn: "1h" })

        res.status(200).json({
            status : "success",
            message : "Logged in successfully",
            token : token
        })
        
        
    }catch(error){
        res.status(400).json({
            status : 'failed',
            error : error.message
        })
    }
}