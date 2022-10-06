const express = require("express");
const router = express.Router();
var request = require("request");
const dotenv = require("dotenv");

dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;

const headers = {
	"content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

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


router.get("/sendtoaddress/", (req, res) => {
	console.log(req.params.addr)
	var dataString = `{"jsonrpc": "1.0", "id": "curltext", "method": "sendtoaddress", "params": ["bcrt1q7laksvall9vc6yt8xmhs6r63fmxetxg3ujaps2", 0.0001, "donation", "seans outpost"]}`
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


