const express = require("express");
const UserModel = require("../model/UserModel");
const authMiddleware = require("../Middleware/authMiddleware");
const UserRouter = express.Router();

UserRouter
    .route("/user")
    .get(authMiddleware, getUser);

async function getUser(req, res) {
    try {
        const data = req.user;
        console.log("Logged in user data: ", data);
        return res.json({ data });
    } catch (err) {
        console.error("Error fetching user data:", err); // Use `console.error` for errors
        return res.status(500).json({ message: "Internal server error" }); // Send a proper error response
    }
}

module.exports = UserRouter;
