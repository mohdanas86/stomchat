const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: "https://chatbotbyanas.onrender.com"
};
app.use(cors(corsOptions));

const port = 3000; // PORT
app.use(express.json())
const bodyParser = require("body-parser");
app.use(bodyParser.json())

// get, POST, PATCH ====== METHODS
app.get("/", (req, res) => {
    res.send('helllo');
});

// ROUTES
const ChatRouter = require("./routers/chat");
app.use("/chat", ChatRouter)

// LIVE SERVER
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`live server : http://localhost:${port}/`);
});