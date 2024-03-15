import express from "express"
import {getUsers, getUser} from "../controllers/users.js"
import { validateGetById } from "../validators/users.js"

const router = express.Router()

router.get('/', getUsers)

router.get('/:id', validateGetById, getUser)

export default router
