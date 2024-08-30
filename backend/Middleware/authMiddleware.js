const express = require("express");
const JWT = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

async function authMiddleware(req, res, next) {
    // Extract token from Authorization header
    const token = req.header("Authorization");

    // Check if token is provided and starts with 'Bearer '
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized: Token not provided" });
    }

    // Extract JWT from the token
    const jwtToken = token.replace("Bearer ", "").trim();

    try {
        // Verify the JWT
        const isVerified = JWT.verify(jwtToken, process.env.JWT_SECRET || "HELLOANASTHISSECRATEKEY");

        // Find user by email
        const userData = await UserModel.findOne({ email: isVerified.email }).select('-password'); // Exclude password

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        // Attach user data and token to request object
        req.token = token;
        req.user = userData;
        req.userId = userData._id; // Fixed typo

        next(); // Proceed to the next middleware

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized: Invalid token." });
    }
}

module.exports = authMiddleware;
