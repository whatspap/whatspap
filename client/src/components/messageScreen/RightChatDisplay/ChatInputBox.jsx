import { Box, InputBase, TextField } from '@mui/material'
import React from 'react'
import {Search, EmojiEmotionsOutlined,AttachFile} from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
const ChatInputBox = () => {
  return (
    <Box
    sx={{
      color:"white",
      height:"8%",
      display:"flex",
      justifyContent:"space-evenly",
      alignItems:"center"
    }}
    >
      <EmojiEmotionsOutlined/>
      <AttachFile/>
      
      <InputBase
      size='small'
      variant="standard"
      sx={{
        color:"white",
        borderRadius:"12px",
        border:"1px solid royalblue",
        width:"90%",
        padding:"4px 6px"
        
      }}
      placeholder="enter message"
      />
      <MicIcon/>
      </Box>
  )
}

export default ChatInputBox