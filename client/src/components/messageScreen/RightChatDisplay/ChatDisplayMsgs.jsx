// This will display all the messages for selected chat
import { Box } from '@mui/material'
import React from 'react'

const ChatDisplayMsgs = () => {
  return (
    <Box
        sx={{
            
            color:"white",
            width:"100%",
            height:"84%",
            boxSizing:"border-box",
            padding:"10px",
            backgroundColor:"#2f2f2f", 
                overflowY:"scroll",
            scrollbarColor:"transparent",
            paddingTop:"4px",
              "&::-webkit-scrollbar": {
                  width: 0,
              },
              "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
              },
              "&::-moz-scrollbar": {
                  width: 0,
              },
              "&::-moz-scrollbar-thumb": {
                  background: "transparent",
              },
        }}
    >

        
    </Box>
    )
}

export default ChatDisplayMsgs