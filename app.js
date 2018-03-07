const express = require("express");
const app = express(); // creates a server(creates an instance of an express application)
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const fs = require("fs");
const path = require("path");
const mimeLookup = require("mime-lookup");
const bodyParser = require("body-parser");




// const locals = {
// 	title: "Some Title",
// 	people: [
// 		{name: "Gandalf"},
// 		{name: "Hermione"}
// 	]
// };

// nunjucks.configure("views");
// nunjucks.render("index.html", locals, function(err, output){
// 	if(err) return console.error(err);
// 	console.log(output);
// });

// boiler-plate
nunjucks.configure("views", {noCache: true}); // points nunjucks to the proper directory for templates
app.set("view engine", "html"); // what file extenstion do out templates have/ have res.render work with html files
app.engine("html", nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
//boiler-plate


app.use(morgan("dev"));

// the typical way to use express static middleware
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: true})); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests



// function staticMiddleware(req, res, next){
// 	finds the associated file in our WebKitFileSystem
// 	if err, move on (call next)
// 	otherwise, res.send that file with the correct headers
// }

//manually-written static file middleware
// app.use(function(req, res, next){
// 	let mimeType = mimeLookup(req.path);
// 	fs.readFile("./public" + req.path, function(err, fileBuffer){
// 		if(err) return next();
// 		res.header("Content-Type", mimeType);
// 		res.send(fileBuffer);
// 	});
// });

app.use(routes);

app.listen(3000, function(){
	console.log("Server is up and running");
});
