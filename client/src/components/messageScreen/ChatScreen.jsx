import { Box, Toolbar } from '@mui/material'
import React from 'react'

const ChatScreen = () => {
  return (
    <div>

    <Box height={"100%"} width={"100%"} sx={{
        backgroundColor:'#1f1f1f'
    }}>
        <Toolbar 
            style={{
                height:"20vh",
                backgroundColor:"royalblue"
            }}
        />
        </Box>
        </div>
  )
}

export default ChatScreen