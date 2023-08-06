const express = require("express");
const path = require('path');
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

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/stuff", stuffRouter);
app.use("/api/auth", userRouter);


module.exports = app;