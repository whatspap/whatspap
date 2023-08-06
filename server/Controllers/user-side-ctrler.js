import mongoose from "mongoose"
import Users from "../models/userModel.js"

export const addUser =async (req,res) =>{
    try {
        let checkPresence  = await Users.findOne({sub:req.body.sub})
        //this conditional will be exec if user already exists in DB
        if(checkPresence){
            res.status(200).json({msg:"User already exists"});
            return; 
        }
        
        const newUser = new Users(req.body);
        await newUser.save();
        res.status(200).json({msg:"New User Created"});
    } 
    catch (error) {
        res.status(500).json(error.message);
    }    
}