import axios from 'axios';

export async function addUser(reqBody){
    const url = 'http://localhost:5000';
 
    try {
        await axios.post(`${url}/add-user`,reqBody);
       console.log("adduser  sent from client")
    } catch (error) {
        console.error("User not added successfully")
        console.log(error)

    }
}
export async function getUsers(){
    const url = 'http://localhost:5000';
 
    try {
       let response =  await axios.get(`${url}/get-users`); 
        console.log("getusers sent")
       return response.data;
    } catch (error) {
        console.error("User not added successfully")
        console.log(error)

    }
}