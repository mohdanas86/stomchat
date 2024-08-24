
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const bodyParser = require("body-parser"); // Middleware to parse JSON
const chat = express.Router();
require('dotenv').config(); // Load environment variables


// Access your API key from an environment variable
const genAI = new GoogleGenerativeAI(process.env.Chat_Api_Key);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Middleware to parse JSON
chat.use(bodyParser.json());

chat.route("/").get(getResponse);

async function getResponse(req, res) {
    const prompt = req.query.prompt || "Write a story about an AI and magic"; // Use query params for dynamic prompt
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response.text(); // Await text() as it returns a promise

        res.json({
            message: "Prompt response",
            data: response
        });
        console.log(response);
    } catch (err) {
        console.error("Error generating content:", err);
        res.status(500).json({
            message: "Error generating content",
            error: err.message
        });
    }
}

console.log(`Chat router running at: http://localhost:3000/chat`);

module.exports = chat;
