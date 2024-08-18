const express = require("express");
const userModel = require("../model/userModel");
const userRouter = express.Router();

userRouter
    .route("/user")
    .get(findUser)
    .delete(deleteUser)

async function findUser(req, res) {
    try {

        const obj = req.body;
        const user = await userModel.find();
        console.log("all user", user)
        res.json({
            message: "all users",
            data: user
        })

    } catch (err) {
        console.log("user route error", err)
    }
}


async function deleteUser(req, res) {
    try {
        const obj = req.body;
        const delData = await userModel.findOneAndDelete(obj)
        res.json({
            message: "data deleted",
            data: delData
        })
        console.log(delData)
    } catch (err) {
        console.log("delete user route error", err)
    }
}

module.exports = userRouter