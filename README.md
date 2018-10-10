# Vege-Track

## Installation 
Run `shards install` in the parent directory and `npm install` in the `src/app` folder.

## Running the app
From the parent directory run `crystal src/crystal-blockchain.cr` and from the `src/app` run `node index.js`

## Creating new Blocks
To create new blocks in the blockchain do a post request at ```http://localhost:3000/new-block```
Example POST request, with curl: 
```curl -d '{"data":"watermelons", "info": "prov->Milan|dests->Achen => Chicago => London|batch->23 "}' -H "Content-Type: application/json" -X POST http://localhost:3000/new-block```

## Website
![Website](https://github.com/francescosgherzi/Vege-Track/blob/master/photos/p1.png)

## Raw Output
![Raw Output](https://github.com/francescosgherzi/Vege-Track/blob/master/photos/p2.png)

*Made with love by Francesco Sgherzi, Chiara Marzano, Silvia Rossi, Nicola Fossati*
