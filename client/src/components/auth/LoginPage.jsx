import React from 'react'
import {AppBar,Box,Dialog,Toolbar} from '@mui/material'

const LoginPage = () => {
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
            sx: { height: "90%", minWidth:"80%",marginTop:"12vh" } 
          }}
        >

            WELCOME TO WHATSPAP
        </Dialog>

    </Box>

    </div>
  )
}

export default LoginPage