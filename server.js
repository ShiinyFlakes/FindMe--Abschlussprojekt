const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = process.env || 8000 ;


app.get('/', function (req, res) {
    res.send('GET request to the mainpage');
  });
  app.get('/register', function (req, res) {
    res.send('get request to the register');
});  
app.get('/login', function (req, res) {
    res.send('get request to the login');
});  
// app.get("/register", (req, res));
// app.get("/mainpage", (req, res));