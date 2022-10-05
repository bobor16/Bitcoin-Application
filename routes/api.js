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

// ... routes will go here

router.get("/getblockcount", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
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

router.get("/getblock/:hash", (req, res) => {
	var dataString = `{"json":"1.0","id":"curltext","method":"getblock","params":["${req.params.hash}"]}`;
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

router.get("/getblockchaininfo", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
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

router.get("/getblockhash/:index", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${req.params.index}]}`;
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

router.get("/getrawtransaction/:id", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${req.params.id}"]}`;
	var options = {
		url: `http://${USER}:${PASS}@127.0.0.1:28443/`,
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

router.get("/decoderawtransaction/:hex", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${req.params.hex}"]}`;
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

router.get("/getwalletinfo", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getwalletinfo","params":[]}`;
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

router.get("/getbalance", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalance","params":["*", 6]}`;
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

router.get("/getaddressinfo", (req, res) => {
	var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getaddressinfo","params":["${"bcrt1qxx8d9regrwz07lxtktx36lzawq08pafqk9868k"}"]}`;
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
	var dataString = `{"jsonrpc": "1.0", "id": "curltest", "method": "sendtoaddress", "params": ["bcrt1q7laksvall9vc6yt8xmhs6r63fmxetxg3ujaps2", 0.0001, "donation", "seans outpost"]}`
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

router.get("/listunspent/", (req, res) => {
	var dataString = `{"jsonrpc": "1.0", "id": "curltest", "method": "listunspent", "params": []}`
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


