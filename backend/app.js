const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");

require('dotenv').config();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

const port = 3001; // PORT
app.use(express.json())
const bodyParser = require("body-parser");
app.use(cookieParser())
app.use(bodyParser.json())

// ROUTES
const ChatRouter = require("./routers/chat");
app.use("/chat", ChatRouter)

// DATABASE CONNECTION
const Database = require("./model/Database")
Database();

// USERMODEL
const UserModel = require("./model/UserModel")

// ROUTERS
const LoginRouter = require("./routers/Login")
app.use("/", LoginRouter)

const RegsiterRouter = require("./routers/Register")
app.use("/", RegsiterRouter)

const UserRouter = require("./routers/User")
app.use("/", UserRouter);

// LIVE SERVER
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`live server : http://localhost:${port}/`);
});