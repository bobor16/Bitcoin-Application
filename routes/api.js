const express = require("express");
const router = express.Router();
var request = require("request");
const dotenv = require("dotenv");

// configure dotenv
dotenv.config();

// constants used from the .env
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

// sending material in textual form
const headers = {
	"content-type": "text/plain;"
};

// a test route that can be called to see if the server is running
router.get("/test", (req, res) => res.json({ msg: "backend works" }));

// check balance for the current wallet
router.get("/getbalance", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalance","params":[]}`;
	var options = {
		url: `http://${USER}:${PASS}@127.0.0.1:18443/`,
		method: "POST",
		headers: headers,
		body: dataString
	};

	callback = (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const data = JSON.parse(body);
			res.send(data);
		}
	};
	request(options, callback);
});

// get a new address
router.get("/getnewaddress", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}`;
	var options = {
		url: `http://${USER}:${PASS}@127.0.0.1:18443/`,
		method: "POST",
		headers: headers,
		body: dataString
	};

	callback = (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const data = JSON.parse(body);
			res.send(data);
		}
	};
	request(options, callback);
});

// transfer amount of btc to an address 
router.get("/sendtoaddress/:addr/:amount", (req, res) => {
	var dataString = `{"jsonrpc": "1.0", "id": "curltext", "method": "sendtoaddress", "params": [${req.params.addr}, ${req.params.amount}]}`
	console.log(req.params.addr)
	var options = {
		url: `http://${USER}:${PASS}@127.0.0.1:18443/`,
		method: "POST",
		headers: headers,
		body: dataString
	};
	callback = (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const data = JSON.parse(body);
			res.send(data);
		}
	};
	request(options, callback);
});

// list unspent transactions by index
router.get("/listunspent/:index", (req, res) => {
	var dataString = `{"jsonrpc": "1.0", "id": "curltext", "method": "listunspent", "params": [${req.params.index}]}`
	var options = {
		url: `http://${USER}:${PASS}@127.0.0.1:18443/`,
		method: "POST",
		headers: headers,
		body: dataString
	};
	callback = (error, response, body) => {
		if (!error && response.statusCode == 200) {
			const data = JSON.parse(body);
			res.send(data);
		}
	};
	request(options, callback);
});

module.exports = router;


