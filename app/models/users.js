import mongoose from "mongoose"

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model('users', UserScheme)
