const express = require('express');

const app = express();

//Routes '/' = default route
app.get('/', (request, response) => {
    response.send('Hello from home!');
});

app.listen(3000);