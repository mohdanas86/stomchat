
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const bodyParser = require("body-parser");
const chat = express.Router();
require('dotenv').config();


// Access your API key from an environment variable
const genAI = new GoogleGenerativeAI(process.env.Chat_Api_Key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Middleware to parse JSON
chat.use(bodyParser.json());

// Middleware to get the 'lang' cookie
const cookieGet = async (req, res, next) => {
    const lang = req.cookies.lang;
    req.lang = lang; // Attach the lang value to the request object
    next(); // next middleware
};

// Route setup
chat.route("/")
    .get(cookieGet, getResponse);

async function getResponse(req, res) {
    const prompt = req.query.prompt;

    const lang = req.lang;
    console.log("Language cookie: ", lang);

    try {
        const result = await model.generateContent(prompt + " " + "in" + " " + lang); // we send a prompt to api with lang
        const response = await result.response.text(); // Await text() as it returns a promise

        res.json({
            message: "Prompt response",
            data: response
        });

    } catch (err) {
        console.error("Error generating content:", err);
        res.status(500).json({
            message: "Error generating content",
            error: err.message
        });
    }
}

module.exports = chat;
