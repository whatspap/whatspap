import  express from 'express';
import { addUser, getUsers } from '../Controllers/user-side-ctrler.js';

const router = express.Router();


router.post("/add-user",addUser)
router.get("/get-users",getUsers)

export default router