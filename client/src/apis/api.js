import axios from 'axios';

export async function addUser(reqBody){
    console.log("add user function called:",reqBody)
    const endpoint = 'http://localhost:5000/add-user';

    try {
       await axios.post(endpoint,reqBody);
       console.log("request sent from client")
    } catch (error) {
        console.error("User not added successfully")
        console.log(error)

    }
}