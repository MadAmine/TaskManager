import dotenv from 'dotenv'
import express from 'express'
import userRouter from './routes/userRoute.js'
import taskRouter from './routes/taskRoute.js'
import registerRouter from './routes/authRoute.js'

dotenv.config()

const app  =  express()

app.use(express.json())
    

app.use('/api/task',taskRouter)
app.use('/api/user',userRouter)  
app.use('/api',registerRouter) 
export default app

