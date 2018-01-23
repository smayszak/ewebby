const PORT = 8080;

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello From E Webby 2.0!');
});
 
var port = Number(process.env.PORT || PORT);
app.listen(port);
 
console.log(`Server is listening on ${PORT}`);
