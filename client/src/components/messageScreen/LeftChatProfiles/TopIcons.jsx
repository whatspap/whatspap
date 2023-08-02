import { Box } from '@mui/material'
import React, { useContext } from 'react'
import LoginContext from '../../user-context/UserLoginContext'
import { Chat,MoreVert } from '@mui/icons-material'

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
                <Chat color="black" height="100%" />
                <Chat color="black" height="100%" />
                <MoreVert color="black" height="100%" />
            </Box>
        </Box>
    )
}

export default TopIcons
