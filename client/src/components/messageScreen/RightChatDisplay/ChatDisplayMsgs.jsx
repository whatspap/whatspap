// This will display all the messages for selected chat
import { Box } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getConvo, getMessages } from '../../../apis/api'
import LoginContext from '../../user-context/UserLoginContext'
import { Typography } from '@mui/material';

let fileImage = "https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png"

const TextMsg = ({ message }) => {
    return (
        <>
            <Typography><h4 style={{ margin: 0 }}>{message.text}</h4></Typography>
            <Typography sx={{ fontSize: "small", textAlign: 'right' }}>{message.createdAt}</Typography>
        </>
    )
}
const ImageMessage = ({ message }) => {
    return (
        <>
            {message?.text?.includes(".jpg")?

            
            <>
                    <a href={message.text} target='_blank'>

                        <img src={message.text} style={{ height: "200px", width: "100%" }} alt={message.text} />
                    </a>
                    <Typography sx={{ fontSize: "small", textAlign: 'right' }}>{message.createdAt}</Typography>
            </>


             
            
            :   
            
                <Box >
                    <Box display={"flex"} sx={{ alignItems: 'center' }}>

                        <a href={message.text} target='_blank'>

                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABCQkL7+/v39/dPT0+mpqbGxsbs7OwXFxe2trbJycl3d3fU1NQvLy+jo6M7OzuPj4/j4+NJSUmFhYVvb29VVVVbW1tnZ2fX19dgYGDg4OAgICA8PDxiYmKTk5MoKCh+fn68vLwLCwucnJySkpJeWSrHAAAErUlEQVR4nO3d63KiQBSFURAiFyUqERM1idHJvP8rzkQdoa1Aw4HeRzP7+03RrECkikvjeYwxxhhjjLFbK87SsdMOWajpyzavvvNei7WWL1i4552a6uzHoEABfX+lQpzigL7/rEAcI4F/92KMBoZzrBB/oEb/Bk4jlz2WRPSBev4dnQZuh3nz1YinH9LE8X9HYPwvQA/UYHUcc+54TFMIJQYPxyFHGGGicKBihQ9LPBErfPLwRLQQT4QLS+IGQ8QL0XtRQQgmagixB6qKEErUESIPVCUhkKglLInvrofWEsL+F/WEKKKiEHSgagpL4ovDKwyqQshe1BVWiM72orIQcKBqCytER5ugLnRO1Be6PlBvQFgSCxfEWxC6PVBvQuj0QL0NocsDFST0TsN81A7jjogSnu+kL2sXuDxLMPSBWiPMZp+z1n3OJtatSv9t/6zucZTLvZspQNj92QXrtYj4V/uVpe6Fglv7O9tAv9uv623Qf5lvhavuwifbcRo+tF/ZxLnwvbtwZR0pH7Ve2cK5MLJswTeN7UOFL21XVjgXerOPbr6k3V99UrRb72rIE0bN2SLMOtX6OYd4O2kqOt8qBgiVCkY/XRhSKIhCbBRKohAbhZIoxEahJAqxUSiJQmwUSqIQG06YL0b1vT3tqlee8uVo3rB0U/PRItcR5raLfqOSuO33fu2HQYQJl03bdKy8ALzvBby63wYT2q+/l3fA+r6+OFIRdtmHfd+x1dmHW9vNvsfy/3DdD5hsVYTedvrY0HxZ/XlYF03LWpoaQJ4PRVGIjUJJFGKjUBKF2CiURCE2CiVRiI1CSf+rMEinRTF13d8hUtMCE4ZPPqqrgVHCTxjQ9z9VhLhdePUaDUwInEjRfOIZJsyAwkxF6EWrBNMqMsYFng+DGNMVhWd8SRRio1AShdgolEQhNgolUYiNQkkUYqNQ0hDzYlxPkmGsaT1uWjozh4UJg36P4xWVldkeAjTn84cJ+37yYnZZk33uAmOqApiwwxQW31Y+M7q3LvugIhTMi2H0fFmT/Rs97ypCwbwYRuUEM/anT43Libjf0q7zYhi9Vm9FpI+Ny37MjHGBZ4tw3W1ijErruP2a1tfD8owviEJsFEqiEBuFkijERqEkCrFRKIlCbBRKqhHGkyiKGidx7N/XCFdTSuKEuw6z/vbqlzk7L0x4APm+OqgIn4HC5+rAMKFgpmRxxgTEMGHatEkDZ0zejbszs4cB9zp3Zjxve0gRHcwJB3jGF0UhNgolUYiNQkkUYqNQEoXYKJREITYKJbkX5tu8vh/whmXU/F74m/mNtTsUbht9XxlPFN+hcGcVvlQXv0Ph3irUmXFguOz3B4zHL+9QaP1WpPlpyDsUet5kt6jv90Fp9ha1KJREITYKJVGIjUJJFGKjUBKF2CiURCE2CiUFp6f05jciPH15aNCvx5/nuUxy+5KA8uS4NYV9yQ6d3ycfdqXSztetFoOudHJaqb9JI+3SzXlbJvbN7lDY96Nbwzf0j0LfSTCGb2zf6G4h59Rt0/A/Cdbr0tiKQU8V5+zzc+Aa9nf0UrZJtGXHkk1m31hhcZaOtUuz2L6hjDHGGGOMMXB/AFbjgPStNOjZAAAAAElFTkSuQmCC" style={{ height: "100px", width: "60%" }} alt="hello" />
                        </a>
                        <a href={message.text} target='_blank'>
                            <Typography sx={{ fontSize: "small", textAlign: 'right' }}>{message.text.substring(message.text.indexOf('-file-') + '-file-'.length)}</Typography>
                        </a>
                    </Box>
                    <Typography sx={{ fontSize: "small", textAlign: 'right' }}>{message.createdAt}</Typography>
                    </Box>
            
        }
        </>
    )
}

const ChatDisplayMsgs = ({sender,receiver,previousMessages}) => {
    const scrollRef = useRef(null);
    const {convo,setConvo,currentUser} = useContext(LoginContext)
    


    useEffect(() => {
        console.log("receiver changed to",receiver)
        console.log("convoid:",convo._id)


      
        let getConvoDetails = async()=>{
            let convoDetails = await getConvo(sender,receiver);
            setConvo(convoDetails)
        }
        getConvoDetails();

        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
        }
        
        
        
    },[receiver] )
    

  return (
    <Box
    
          
        sx={{
            
            color:"white",
            width:"100%",
            height:"84%",
            boxSizing:"border-box",
            padding:"5px",
            backgroundColor:"#2f2f2f", 
                overflowY:"scroll",
            scrollbarColor:"transparent",
            paddingTop:"4px",
              "&::-webkit-scrollbar": {
                  width: 0,
              },
              "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
              },
              "&::-moz-scrollbar": {
                  width: 0,
              },
              "&::-moz-scrollbar-thumb": {
                  background: "transparent",
              },
        }}
    >
           

        {previousMessages && previousMessages.map(message=>(
            <Box 
            ref={ scrollRef }
            sx={{
                display:"flex",
                flexDirection:'column'
            }}>
                {message.senderID === currentUser.sub ? (
                <Box sx={{
                    backgroundColor: "whitesmoke"
                    , color: "#4169e1",
                    alignSelf: "flex-end",

                    margin: "4px",
                    maxWidth: "60%",
                    width: "30%",
                    borderRadius: "18px",
                    padding: "8px"
                }}>
                    {message.type==="text"
                    ?
                    <>
                                <TextMsg message={message} /> 
                    </>

                    
                    :
                    <>
                        <ImageMessage message={message}/>
                    </>
                    
                    
                }
                    
                </Box>) : (<Box sx={{
                    backgroundColor: "royalblue"
                    , color: "white",
                    margin: "4px",
                    maxWidth: "60%",
                    width: "30%",
                    borderRadius: "18px",
                    padding: "8px"
                }}>
                        {message.type === "text"
                            ?
                            <>
                                <TextMsg message={message} /> 
                            </>


                            :
                            <>
                            
                            <ImageMessage message={message}/>
                            </>


                        }
                  
                </Box>)}
            
                

                
            
            
            
            </Box>
            ))
            
        }
        
    </Box>
    )
}



export default ChatDisplayMsgs