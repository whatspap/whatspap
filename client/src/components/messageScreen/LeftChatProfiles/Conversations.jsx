import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../apis/api'
import { Box, Divider } from '@mui/material';
import LoginContext from '../../user-context/UserLoginContext';


const Conversations = () => {
    const [users,setUsers] = useState([]);
    const{currentUser,setCurrentUser} = useContext(LoginContext);
    console.log("currentUser",currentUser.name)

    useEffect(() => {
      //this will run when component mounts
        const fetchAllUsers = async()=>{

            let users = await getUsers();
            setUsers(users);
        }
        fetchAllUsers();
    
    
      
    }, [])
    

  return (
    <Box sx={{
        height:"100%",
        backgroundColor:"teal",
        overflow:"overlay"
    }}>
        {

            users.map((item)=>{

                
                if(item.sub!==currentUser.sub){
                    return(

                <Box
            sx={{

                height:"9%",
                backgroundColor:"whitesmoke",
                display:"flex",
                alignItems:"center",
                cursor:"pointer",
                borderBottom:"0.3px solid rgba(0,0,0,0.12)"
                
            }}    
            >

                <Box
                    sx={{height:"100%",width:"18%",display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                    
                <img src={item.picture} style={{height:"50px",borderRadius:"50%"}}alt="" />
                </Box>
                <Box
                    sx={{
                        marginLeft:"12px",
                        display:"flex",
                        marginTop:"23px",
                        fontSize:"15px",
                        height:"100%",
                        width:"100%",
                        flexDirection:"column"
                    }}
                    
                    >
                {item.name}

                </Box>

            </Box>
                    )
                }
            }
            )
            
        }

        
        </Box>
        )
}

export default Conversations