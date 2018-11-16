"use strict"
//creating module
const express = require("express");
//create an instance of type express 
const app = express();
//
const cart = require("./cart.js")

app.use(express.static("./public"));
app.use(express.json());
//telling the application to use the routing object
app.use("/", cart);
//set up port
const port = 3000;
//pass port to the app.listen function
app.listen(port, () => {
//testing if server is listening properly
    console.log(`server is running on port: ${port} `);
});