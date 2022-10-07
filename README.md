## Bitcoin-Application 

> :warning: **it is assumed bitcoin-core, node.js, nodemon, and express is installed and configured:** 

Add a .env file to the root and replace the bitcoin user and password as follows:

### .env:
```
RPC_USER=yourbitcoinusername
RPC_PASSWORD=yourbitcoinpassword
```

### To run the application
```
npm init

npm run server
```

next, open `localhost:4444/api/test`
if the setup is complete the output should be:
> msg: "backend works"

there are the following api calls in this application:
* Check the balance
* Create a new address
* Send bitcoin to the address
* List unspend transactions

The api calls are represented by replacing `/test` with the following:
* /getbalance
* /getnewaddress
* /sendtoaddress
* /listunspent/0


