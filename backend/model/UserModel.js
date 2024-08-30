const express = require("express")
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.methods.genrateToken = async function () {
    return JWT.sign({
        isAdmin: this.isAdmin,
        id: this._id.toString(),
        email: this.email
    },
        "HELLOANASTHISSECRATEKEY",
        {
            expiresIn: "1d"
        }
    )
}

const UserModel = mongoose.model("signin", userSchema)
module.exports = UserModel;