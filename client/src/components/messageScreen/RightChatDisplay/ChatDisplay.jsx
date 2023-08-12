import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatDisplayHeader from './ChatDisplayHeader'
import ChatDisplayMsgs from './ChatDisplayMsgs'
import ChatInputBox from './ChatInputBox'
import LoginContext from '../../user-context/UserLoginContext'
import { getMessages, newMessage } from '../../../apis/api.js'


const ChatDisplay = () => {

  const {currentUser,currentChatter} = useContext(LoginContext);
  const { convo, setConvo } = useContext(LoginContext)
  const [message, setMessage] = useState("");
  const [previousMessages, setPreviousMessages] = useState([]);
  const [file,setFile] = useState();
  const [image, setImage] = useState('');



  let messages = [];
  useEffect(() => {
    const getPrevMessages = async () => {

      let messages = await getMessages(convo._id);
      setPreviousMessages(messages)
      console.log(previousMessages)
    }
    getPrevMessages();
  }, [convo,message])
  

  async function sendText(keyPressCode,message){

    if(keyPressCode==13){
      let msg={};
      if(!file){

         msg = {
          senderName:currentUser.name,
          receiverName:currentChatter.name,
          senderID: currentUser.sub,
          receiverID: currentChatter.sub,
          conversationID:convo._id,
          type:'text',
          text:message
        }
      }else{
        msg = {
          senderName: currentUser.name,
          receiverName: currentChatter.name,
          senderID: currentUser.sub,
          receiverID: currentChatter.sub,
          conversationID: convo._id,
          type: 'file',
          text: image
        }
      }

    await newMessage(msg);
    setMessage("")
    setImage("");
    setFile("")

    
    }

  }

  return (
    <Box
        sx={{
            width:"100%",

        }}
    >
       <ChatDisplayHeader/>
       <ChatDisplayMsgs sender={currentUser.sub} receiver={currentChatter.sub} previousMessages={previousMessages} />
       <ChatInputBox sendText = {sendText} setMessage={setMessage} message={message} file={file} setFile = {setFile} setImage={setImage}/>
    </Box>

  )
}

export default ChatDisplay