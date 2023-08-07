import  express from 'express';
import { addUser, getUsers } from '../Controllers/user-side-ctrler.js';
import { setConversation } from '../Controllers/conversation-ctrler.js';


const router = express.Router();


router.post("/add-user",addUser)
router.get("/get-users",getUsers)
router.post("/conversation/add",setConversation)

export default router