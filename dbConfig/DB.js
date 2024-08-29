import mongoose from 'mongoose'


export const dbconnect = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI,{
            dbName:'ProjectMan'
        })
        console.log('connected to db')

    }catch(error){

        console.log(error)
    }
}
