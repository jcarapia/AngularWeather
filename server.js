var express = require('express');

var app = express();

app.use(express.static(__dirname));

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile(index.html)
})

app.listen(PORT, function(){
	console.log('The magic happens in port' + PORT);
})