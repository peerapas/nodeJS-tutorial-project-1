const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log('Server is running on port '+ port)
})