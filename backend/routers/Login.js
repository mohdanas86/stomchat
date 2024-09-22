const express = require("express")
const UserModel = require("../model/UserModel")
const LoginRouter = express.Router();

LoginRouter
    .route("/login")
    .post(postLogin)

async function postLogin(req, res) {
    try {
        const obj = req.body;
        const user = await UserModel.findOne({ email: obj.email })
        return res.json({
            mesage: "user login",
            data: user,
            token: await user.genrateToken()
        })
        console.log(user)
    } catch (err) {
        console.log(err, "login problem")
    }
}

console.log("http://localhost:3000/login");

module.exports = LoginRouter;