var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/primosRoutes');
routes(app);

app.listen(port);

console.log('apimos running in: ' + port);
