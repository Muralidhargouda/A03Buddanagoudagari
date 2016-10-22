var express = require("express");
var app     = express();
var path    = require("path");
var logger = require("morgan");
var http = require('http').Server(app);
var bodyParser = require("body-parser");
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));

// set up the logger
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.resolve(__dirname, "views")); // path to views
app.set("view engine", "ejs"); // specify our view engine
app.get("/views/new-entry", function (request, response) {
  response.render("new-entry");
});

// manage our entries
var entries = [];
app.locals.entries = entries;
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/assets/index.html'));
  //__dirname : It will resolve to your project folder.
});
// http GET (default and /new-entry)
app.get("/views/index", function (request, response) {
  response.render("index");
});
app.get("/views/new-entry", function (request, response) { 
  response.render("new-entry");
});

// http POST (INSERT)
app.post("/views/new-entry", function (request, response) {
  if (!request.body.title || !request.body.body) {
    response.status(400).send("Entries must have a title and a body.");
    return;
  }
  entries.push({
    title: request.body.title,
    content: request.body.body,
    published: new Date()
  });
  response.redirect("index");
});
app.use(function (request, response) {
  response.status(200).render("index");
});
// 404
app.use(function (request, response) {
  response.status(404).render("404");
});

app.listen(8081, function () {
  console.log("My Website on http://127.0.0.1:8081/");
});