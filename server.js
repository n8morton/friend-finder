var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var friends = [];

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {

    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.post("/api/friends", function (req, res) {
    var newFriend = req.body
    friends.push(newFriend)

    console.log(friends);
});

app.get("/api/friends", function(req, res) {
    console.log(friends)
    res.json(friends);
  });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
