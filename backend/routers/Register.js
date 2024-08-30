const express = require("express")
const UserModel = require("../model/UserModel")
const RegsiterRouter = express.Router();

RegsiterRouter
    .route("/register")
    .post(RegisterPost)

async function RegisterPost(req, res) {
    try {
        const obj = req.body;
        const user = await UserModel.create(obj)
        console.log(user)
        const userId = user._id.toString();
        res.json({
            message: "resgister successfully",
            data: user,
            id: userId,
            token: await user.genrateToken()
        })
    } catch (err) {
        console.log("register error", err)
    }
}

console.log('http://localhost:3000/register')
module.exports = RegsiterRouter;