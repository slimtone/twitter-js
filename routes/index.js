"use strict";

const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");

router.get("/", function(req, res, next){
	let tweets = tweetBank.list();
	res.render("index", {title: "Twitter.js", tweets: tweets});
});

router.get("/stylesheets/style.css", function(req, res, next){
	res.sendFile("/stylesheets/style.css", {root: __dirname + "/../public/"});
});


module.exports = router;
