"use strict"

//create a node module
const express = require("express");
//route is a function of express
//building an object from the router class
const routes= express.Router();
//declare the object
const pool = require("../connection/pg-connection-pool.js");
let req = null;

function getTable(req,res){
    pool.query("select * from ShoppingCart order by id").then((result) => {
        res.json(result.rows);
    });
}

routes.get("/phrases", (req, res) => {
    getTable(req, res);
});


routes.put("/phrases/:id", (req, res) => {
    pool.query("update ShoppingCart set product=$2::text, price=$3::int, quantity=$4::int where id=$1::int", [req.params.id, req.body.product, req.body.price, req.body.quantity, ]).then(() => {
        getTable(req, res);
    });
});

routes.delete("/phrases/:id", (req, res) => {
    pool.query("delete from ShoppingCart where id=$1::int", 
    [req.params.id]).then(() => {
       getTable(req, res);
    });
});

routes.post("/phrases", (req, res) => {
    pool.query("insert into ShoppingCart (product, price, quantity) values($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
       getTable(req, res);
        });
    });

module.exports = routes;