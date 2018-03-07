const express = require("express");
const app = express(); // creates a server(creates an instance of an express application)
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const locals = {
	title: "Some Title",
	people: [
		{name: "Gandalf"},
		{name: "Hermione"}
	]
};

// nunjucks.configure("views");
// nunjucks.render("index.html", locals, function(err, output){
// 	if(err) return console.error(err);
// 	console.log(output);
// });

// boiler-plate
nunjucks.configure("views", {noCache: true}); //where
app.set("view engine", "html"); // what file extenstion do out templates have
app.engine("html", nunjucks.render); //how to render html templates
//boiler-plate


app.use(morgan("dev"));

app.get("/", function(req, res){
	res.render("index", locals);
});

app.get("/news", function(req, res){
	res.json({name: "newsRoute", data: 12345});
});


app.listen(3000, function(){
	console.log("Server is up and running");
});
