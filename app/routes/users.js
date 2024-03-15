import express from "express"
import {getUsers, getUser} from "../controllers/users.js"
import { validateGetById } from "../validators/users.js"
import { checkAuth } from "../middlewares/auth.js"

const router = express.Router()

router.get('/', checkAuth, getUsers)

router.get('/:id', validateGetById, checkAuth, getUser)

export default router
