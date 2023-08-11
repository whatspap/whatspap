import  express from 'express';
import { addUser, getUsers } from '../Controllers/user-side-ctrler.js';
import { setConversation, getPreviousConvos ,addNewMessage, getMessages} from '../Controllers/conversation-ctrler.js';
import { getFile, uploadFile } from '../Controllers/file-controller.js';
import upload from '../middleware/upload.js';



const router = express.Router();
//here upload is the middleware that gets called before the uploadFile method
router.post("/file/upload",upload.single("file"),uploadFile)
router.get('/file/:filename', getFile);

router.post("/add-user",addUser)
router.get("/get-users",getUsers)
router.post("/conversation/add",setConversation)
router.post("/conversation/getconvo",getPreviousConvos)
router.post("/message/add",addNewMessage)
router.get("/message/get/:convoID",getMessages)
// actually it will look like: localhost:8000/message/get/1231231




export default router