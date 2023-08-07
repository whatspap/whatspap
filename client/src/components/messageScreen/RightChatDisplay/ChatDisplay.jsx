import { Box } from '@mui/material'
import React from 'react'
import ChatDisplayHeader from './ChatDisplayHeader'
import ChatDisplayMsgs from './ChatDisplayMsgs'
import ChatInputBox from './ChatInputBox'

const ChatDisplay = () => {
  return (
    <Box
        sx={{
            width:"100%",

        }}
    >
       <ChatDisplayHeader/>
       <ChatDisplayMsgs/>
       <ChatInputBox/>
    </Box>

  )
}

export default ChatDisplay