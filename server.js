const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = process.env || 8000 ;


app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });
  app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});  
// app.get("/register", (req, res));
// app.get("/mainpage", (req, res));