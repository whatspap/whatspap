import { Box } from '@mui/material'
import React, { useContext } from 'react'
import LoginContext from '../../user-context/UserLoginContext'

const OneConvoDisplay = ({user}) => {
    const {currentChatter,setCurrentChatter} = useContext(LoginContext);

    function showUserInfo(){
        setCurrentChatter(user)
    }
  return (
      <Box
          sx={{

              height: "9%",
              backgroundColor: "whitesmoke",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              borderBottom: "0.3px solid rgba(0,0,0,0.12)"

            
          }}
          onClick = {()=>{showUserInfo()}}

         
      >

          <Box
              sx={{ height: "100%", width: "18%", display: "flex", justifyContent: "center", alignItems: "center" }}
          >

              <img src={user.picture} style={{ height: "50px", borderRadius: "50%" }} alt="" />
          </Box>
          <Box
              sx={{
                  marginLeft: "12px",
                  display: "flex",
                  marginTop: "23px",
                  fontSize: "15px",
                  height: "100%",
                  width: "100%",
                  flexDirection: "column"
              }}

          >
              {user.name}

          </Box>

      </Box>
  )
}

export default OneConvoDisplay