import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../apis/api'
import { Box, Divider } from '@mui/material';
import LoginContext from '../../user-context/UserLoginContext';
import OneConvoDisplay from './OneConvoDisplay';


const Conversations = ({query}) => {
    const [users,setUsers] = useState([]);
    const{currentUser,setCurrentUser} = useContext(LoginContext);
    console.log("currentUser",currentUser.name)

    useEffect(() => {
      //this will run when component mounts
        const fetchAllUsers = async()=>{
            console.log("query:",query)
            let users = await getUsers();
            if(query!=undefined){

                let filteredUsers = users.filter((user)=>user.name.toLowerCase().includes(query.toLowerCase()))
                setUsers(filteredUsers);
            }
            else{

                setUsers(users);
            }
           
            
            
        }
        fetchAllUsers();
    
    
      
    }, [query])
    

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

                        <OneConvoDisplay user={item}/>
                    )
                }
            }
            )
            
        }

        
        </Box>
        )
}

export default Conversations