## Bitcoin-Application 

> :warning: **it is assumed bitcoin-core is installed and configured:** 

To run the application
```
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

The apicalls are represented by replacing the `/test` by the following:
* /getbalance
* /getnewaddress
* /sendtoaddress
* /listunspent


