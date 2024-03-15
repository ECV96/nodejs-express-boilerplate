import express from "express"
import {getUsers, getUser} from "../controllers/users.js"
import { validateGetById } from "../validators/users.js"
import { checkAuth } from "../middlewares/auth.js"

const router = express.Router()

/**
 * Get /
 * @openapi
 * /:
 *  get:
 *      tags:
 *          - Users
 *      summary: "Get a list of all user"
 *      description: "Get a list of all user"
 *      responses:
 *          "200":
 *              description: "OK"
 */
router.get('/', checkAuth, getUsers)

/**
 * Get /:id
 * @openapi
 * /:id:
 *  get:
 *      tags:
 *          - Users
 *      summary: "Get a user"
 *      description: "Get a specific user from an id"
 *      parameters:
 *          - name: "id"
 *            in: "path"
 *            description: "User Id"
 *            required: "true"
 *            schema:
 *                type: "string"
 *      responses:
 *          "200":
 *              description: "OK"
 *          "404":
 *              description: "User not found"
 */
router.get('/:id', validateGetById, checkAuth, getUser)

export default router
