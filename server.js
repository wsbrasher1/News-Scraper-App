//Dependencies//
var express = require("express");
var exbars = require("express-handlebars");
var logger = require("morgan");
var mongoose = require("mongoose");

//Web Scraping Dependencies//
var axios = require("axios");
var cheerio = require("cheerio");

//To require all models//
var db = require("./models");

//App Configuration//
var app = express();
var PORT = process.env.PORT || 3000

//Sets up the logger for development//
app.use(logger("dev"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//To make public a static folder//
app.use(express.static("public"));

//To set up Handlebars//
app.engine(handlebars, exbars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Connect to the Mongo DB//


//Routes//


//To start the server//
app.listen(PORT, function(){
    console.log("Server is listening on http://localhost: " + PORT);
});