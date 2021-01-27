//boiler plate for getting express up and running
'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const app = express();

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const friendsController = require('./routes/friends');

app.use('/', rootController); // <- ROOT route
app.use('/friends', friendsController); // <- /friends route 





