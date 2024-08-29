
import app  from "./index.js";
import { dbconnect } from "./dbConfig/DB.js";

const port = process.env.PORT
const local = process.env.LOCAL


dbconnect() 

app.listen(port, ()=> console.log(`server running on http://${local}:${port}`))