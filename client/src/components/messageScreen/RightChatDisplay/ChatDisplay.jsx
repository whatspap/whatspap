import { Box } from '@mui/material'
import React, { useContext, useState } from 'react'
import ChatDisplayHeader from './ChatDisplayHeader'
import ChatDisplayMsgs from './ChatDisplayMsgs'
import ChatInputBox from './ChatInputBox'
import LoginContext from '../../user-context/UserLoginContext'


const ChatDisplay = () => {

  const {currentUser,currentChatter} = useContext(LoginContext);
  const { convo, setConvo } = useContext(LoginContext)
  const [message, setMessage] = useState("");


  function sendText(keyPressCode,message){
    if(keyPressCode==13){
      console.log(convo._id,message)
      let msg = {
        senderID: currentUser.sub,
        receiverID: currentChatter.sub,
        conversationID:convo._id,
        type:'text',
        message:message
      }

      console.log(msg)
    }

  }

  return (
    <Box
        sx={{
            width:"100%",

        }}
    >
       <ChatDisplayHeader/>
       <ChatDisplayMsgs sender={currentUser.sub} receiver={currentChatter.sub}/>
       <ChatInputBox sendText = {sendText} setMessage={setMessage} message={message}/>
    </Box>

  )
}

export default ChatDisplay