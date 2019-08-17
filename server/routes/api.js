const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;

// declare axios for making http requests
const axios = require('axios');

MongoClient.connect('mongodb+srv://test1:testone1@cluster0-gcika.mongodb.net/test?retryWrites=true&w=majority', {
useNewUrlParser: true }, (err, database) => {
	 if (err) return console.log(err);
	db = database.db('testone');
});

router.route('/authuser').post(function(req, res2) {
	var username = req.body.username;
	var password = req.body.password;
	
	db.collection('users').findOne({"name": username}, { password: 1, role: 1, _id: 0 }, function(err, result) {
		if (result == null) 
			res2.send([{"auth": false}]);
		else {
			bcrypt.compare(password, result.password, function(err, res) {
				if(err || res == false) { 
					res2.send([{"auth": false}]);
				} else {
					res2.send([{"auth": true, "role": result.role}]);
				}
			});
		}
	});
});

router.route('/reguser').post(function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var role = req.body.role;
	
	bcrypt.hash(password, BCRYPT_SALT_ROUNDS, function(err, hash) {
		db.collection('users').insertOne({"name" : username, "password" : hash, "role" : role }, (err, result) => {
			if (err) return console.log(err)
			console.log('user registered')
			res.send(result);
		});
	});
})

					 




module.exports = router;