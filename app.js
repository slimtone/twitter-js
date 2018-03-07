const express = require("express");
const app = express(); // creates a server(creates an instance of an express application)
const morgan = require("morgan");

app.use(morgan("dev"));

app.get("/", function(req, res){
	res.send("You got the root route");
});

app.get("/news", function(req, res){
	res.json({name: "newsRoute", data: 12345});
});


app.listen(3000, function(){
	console.log("Server is up and running");
});
