import mongoose from "mongoose"
import Conversations from "../models/conversation.js";

export const setConversation = async (req, res) => {
   try {
    console.log(req.body)
    const senderID = req.body.senderID;
    const receiverID = req.body.receiverID;

    //
    //search in members array and check whether all elements match using $all operator
    const checkExistence = await Conversations.findOne({members:{$all:[receiverID,senderID]}})
    if(checkExistence){
    return res.status(200).json("convo pre exists")
    }
   
    const newConvo = new Conversations({
       members:[senderID,receiverID]
      })
      await newConvo.save();
      return res.status(200).json("new convo created")

   } catch (error) {
      return res.status(500).json(error);
        console.log(error)
   }
}