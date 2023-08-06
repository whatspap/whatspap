import React, { useEffect, useState } from 'react'
import { getUsers } from '../../../apis/api'
import { Box } from '@mui/material';

const Conversations = () => {
    const [users,setUsers] = useState([]);
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
        backgroundColor:"teal"
    }}>
        {

            users.map((item)=>
            
            <Box
            sx={{

                height:"9%",
                border:"1px solid grey",
                backgroundColor:"whitesmoke"
            }}    
            >
                {item.name}

            </Box>
            )

        }


    </Box>
  )
}

export default Conversations