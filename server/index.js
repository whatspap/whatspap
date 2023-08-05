import express from 'express';
import dotenv from 'dotenv'
import connectDB from './database/db.js'
const app = express();
dotenv.config();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/add-user",(req,res)=>{
    console.log(req.body)
})



const PORT_NUMBER = 5000

connectDB().then(() => {
    app.listen(PORT_NUMBER, () => {
        console.log("server is up at ",PORT_NUMBER)
    })
})