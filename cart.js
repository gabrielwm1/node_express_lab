"use strict"

//create a node module
const express = require("express");
//route is a function of express
//building an object from the router class
const cartRoute= express.Router();
//declare the object
const cartList = [
    {
    id:"1",
    product: "Mango",
    price: "10",
    quantity: "2"
    },
    {
    id:"2",
    product: "Peach",
    price: "7",
    quantity: "3"
    },
    {
    id:"3",
    product: "Ice-cream",
    price: "5",
    quantity: "10"
    } 
]
cartRoute.get("/cart-items", (req,res)=>{
    res.json(cartList);
})
cartRoute.post("/cart-items", (req, res)=>{
    console.log(cartList);
})
cartRoute.put("/cart-items/_ID_", (req,res)=>{
    console.log(cartList);
})
cartRoute.delete("/cart-items/_ID_", (req, res)=>{
    console.log(cartList);
})

module.exports = cartRoute;