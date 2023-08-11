import { Box, InputBase, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import {Search, EmojiEmotionsOutlined,AttachFile} from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import LoginContext from '../../user-context/UserLoginContext';
import { uploadFile } from '../../../apis/api';


const ChatInputBox = ({sendText,setMessage,message,file,setFile}) => {


  useEffect(() => {
    const setImage = async() =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        
        await uploadFile(data);
      }
    }
  setImage();
  
  }, [file])
  


  const handleFileChange = (e) =>{
    setFile(e.target.files[0])
    setMessage(e.target.files[0].name);
    console.log(file)

  }
  
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

      <label htmlFor="FileInput">

      <AttachFile/>
      </label>
      <input type="file" name="" id="FileInput" style={{display:"none"}}
      
      onChange={(e)=>{handleFileChange(e)}}
      />


      <InputBase
      size='small'
      variant="standard"
      sx={{
        color:"white",
        borderRadius:"12px",
        border:"1px solid royalblue",
        width:"90%",
        padding:"4px 6px",
        
      }}
      value = {message}
      placeholder="enter message"
      onChange={(e)=>{
        setMessage(e.target.value)
      }}
      onKeyDown={(e)=>{sendText(e.keyCode,message);setMessage(message)}}
      />
      <MicIcon/>
      </Box>
  )
}

export default ChatInputBox