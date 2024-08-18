const mongoose = require("mongoose");

// FORM SCHEMA
const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    password: String,
    copPass: String
});

const userModel = mongoose.model("form", userSchema);
module.exports = userModel;