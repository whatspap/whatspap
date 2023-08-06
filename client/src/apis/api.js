import axios from 'axios';

export async function addUser(reqBody){
    const url = 'http://localhost:5000';
 
    try {
        await axios.post(`${url}/add-user`,reqBody);
       console.log("request sent from client")
    } catch (error) {
        console.error("User not added successfully")
        console.log(error)

    }
}