const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./models/database')
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
const { application } = require("express");
app.use(express.urlencoded({ extended: true }));

const commonRoutes= require('./routes/commonRoutes');

app.use('/',commonRoutes);

const server = app.listen(process.env.PORT, function (req, res) {
    console.log(`server is running on port no :${process.env.port}`);
})

module.exports = server
