const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

const port = 3000; // PORT
app.use(express.json())
const bodyParser = require("body-parser");
app.use(bodyParser.json())

// MONGOOSE CONNECTION
const url = "mongodb+srv://anas:anas@food.t6wubmw.mongodb.net/foodApp?retryWrites=true&w=majority&appName=food";
mongoose.connect(url)
    .then((db) => {
        console.log("db connected...");
    }).catch((err) => {
        console.log("connection problem", err)
    })

// get, POST, PATCH ====== METHODS
app.get("/", (req, res) => {
    res.send('helllo');
});

// USERMODEL
const userModel = require("./model/userModel");

// ROUTES
const regiseterRoute = require("./routers/registration")
app.use("/", regiseterRoute);

const userRouter = require("./routers/users")
app.use("/", userRouter)

const ChatRouter = require("./routers/chat")
app.use("/chat", ChatRouter)

// LIVE SERVER
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`live server : http://localhost:${port}/`);
});