import express from "express"
import { register, login } from "../controllers/auth.js"
import { validateCreate, validateLogin } from "../validators/auth.js"

const router = express.Router()

router.post('/register', validateCreate, register)

router.post('/login', validateLogin, login)

export default router
