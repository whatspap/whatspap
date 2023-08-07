import mongoose from "mongoose"
import Conversations from "../models/conversation.js";

export const setConversation = async (req, res) => {
   try {
    console.log(req.body)
    const senderID = req.body.senderID;
    const receiverID = req.body.receiverID;

    //
    //search in members array and check whether all elements match using $all operator
    const checkExistence = await Conversations.findOne({members:{$all:(receiverID,senderID)}})
    if(checkExistence){
    return res.status(200).json("convo pre exists")
    }
   

   } catch (error) {
        console.log(error)
   }
}