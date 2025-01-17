import { addProfileImage, loginUser, registerUser } from "../controller/AuthController.js"
import express from "express";
const router = express.Router()

router.post('/addProfileImage', addProfileImage)
router.post('/register', registerUser)
router.post('/login', loginUser)

export default router