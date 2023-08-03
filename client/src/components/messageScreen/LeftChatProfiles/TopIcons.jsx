import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import LoginContext from '../../user-context/UserLoginContext'
import { Chat,MoreVert,DonutLarge } from '@mui/icons-material'
import SearchBar from './SearchBar'
import TripleDotMenu from './TripleDotMenu'

const TopIcons = () => {
    const { currentUser, setCurrentUser } = useContext(LoginContext)
    console.log(currentUser)

    return (
        <Box
            sx={{
                height: "50px",
                backgroundColor: "whitesmoke",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px 15px",
            }}
        >
            <img
                src={currentUser.picture}
                alt=""
                style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                }}
            />
            <Box
                sx={{
                    height: "100%",
                    width:"70%",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    gap:"10%"
                }}
            >
               
                    <DonutLarge color="black" height="100%" />
                <Chat color="black" height="100%" />
                    <TripleDotMenu />
                </Box>

            
        </Box>
    )
}

export default TopIcons
