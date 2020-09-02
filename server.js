'use strict';

const express = require('express');
const expressLoader = require('./Loaders/express')
// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

//reload express config
expressLoader(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);