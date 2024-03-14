import { httpError } from "../helpers/handleError.js"
import userModel from "../models/users.js"
import { encrypt, compare} from "../helpers/handleBcrypt.js"

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body
        const passwordHash = await encrypt(password)
        await userModel.create({
            email,
            name,
            password: passwordHash
        })

        res.status(200).send({"message": "User Registered"})
    } catch (error) {
        console.error(error)
        httpError(res,error)
    }
}

export {register}
