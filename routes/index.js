"use strict";

const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");

router.get("/", function(req, res, next){
	let AllTweets = tweetBank.list();
	res.render("index", {title: "Twitter.js", tweets: AllTweets, showForm: true});
});

router.get("/users/:name", function(req, res, next){
	let tweetsForName = tweetBank.find({name: req.params.name});
	res.render("index", {title: "Twitter.js", tweets: tweetsForName, showForm: true, username: req.params.name});
});

router.get("/tweets/:id", function(req, res, next){
	let tweetsWithThatId =  tweetBank.find({id: Number(req.params.id)});
	res.render("index", {title: "Twitter.js", tweets: tweetsWithThatId});
});

router.post("/tweets", function(req, res, next){
	tweetBank.add(req.body.name, req.body.text);
	res.redirect("/")
});

// router.get("/stylesheets/style.css", function(req, res, next){
// 	res.sendFile("/stylesheets/style.css", {root: __dirname + "/../public/"});
// });


module.exports = router;
