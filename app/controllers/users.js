import { httpError } from "../helpers/handleError.js"
import userModel from "../models/users.js" 

// Get a list of all users
const getUsers = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        return res.status(200).send({data: listAll})
    } catch (error) {
        console.error("Error in getUsers", error)
        httpError(res, error)
    }
}

export {getUsers}
