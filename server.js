const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    bigNumber = require('big-number');
    port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/primosRoutes');
routes(app);

app.listen(port);

exports.bigNum = bigNumber;

console.log('apimos running in: ' + port);
