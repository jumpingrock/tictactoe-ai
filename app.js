var express = require('express');
var app = express();
app.use(express.static(__dirname));
var port  = process.env.PORT || 3001
app.listen(port);