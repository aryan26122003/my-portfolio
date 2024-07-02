const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const routes = require('./Routesh');
const {connectiondb} = require('./Config');


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//calling main connection function
connectiondb();

// app.use("/users",routes);
app.use("/",routes);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});