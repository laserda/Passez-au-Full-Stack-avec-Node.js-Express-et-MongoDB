const express = require("express");

const dbConnection = require("./data/Connection");

const stuffRouter = require("./routes/stuff");
const userRouter = require("./routes/user");

const app = express();

dbConnection();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/stuff", stuffRouter);
app.use("/api/auth", userRouter);


module.exports = app;