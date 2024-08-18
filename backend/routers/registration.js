const express = require("express");
const app = express();
const userModel = require("../model/userModel");
const regiseterRoute = express.Router();

regiseterRoute
    .route("/register")
    .get((req, res) => {
        res.send("/register");
    })
    .post(async (req, res) => {
        const obj = req.body;
        const userdata = await userModel.create(obj);
        res.json({
            message: "data posted",
            data: userdata
        })
        console.log("new user data : ", userdata)
    })

module.exports = regiseterRoute;