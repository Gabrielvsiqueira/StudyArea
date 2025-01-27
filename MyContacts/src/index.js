const express = require('express');

const app = express();

app.get('/', (request,response) => {
    response.end('Hello World!');
});

app.listen(3000,() => 'Server started at http://locaslhost:3000');