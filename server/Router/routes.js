import  express from 'express';
import { addUser } from '../Controllers/user-side-ctrler.js';

const router = express.Router();


router.post("/add-user",addUser)

export default router