import React from 'react'
import {AppBar,Box,Dialog,Toolbar,Image} from '@mui/material'
import './styles/LoginPage.css'
import { GoogleLogin,useGoogleOneTapLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'

const LoginPage = () => {


  const handleLoginSuccess = (response)=>{console.log(
    jwtDecode(response.credential))}
  const handleLoginFailure =(response)=>{console.log(response)}

  return (
    <div>

    <Box height={"100%"} width={"100%"} sx={{
        backgroundColor:'whitesmoke'
    }}>
        <Toolbar 
            style={{
                height:"30vh",
                backgroundColor:"royalblue"
            }}
        />

        <Dialog 
        
        open={true}
        PaperProps={{
            sx: { 
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              height: "90%",
            backgroundColor:"whitesmoke"
            ,minWidth:"80%",marginTop:"12vh",
          boxShadow:"none" } 
          }}
        >

<div className="loginDiv">


  <img className='googleLogin'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'></img>
  <GoogleLogin 
  className = 'loginOption'
  onSuccess={handleLoginSuccess}
  onError={handleLoginFailure}
/>



</div>
        </Dialog>


    </Box>

    </div>
  )
}

export default LoginPage