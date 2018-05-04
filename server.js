const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db.config');
var mongoose = require('mongoose');

const app = express();
const port = 9200;

app.use(bodyParser.urlencoded({extended: true }))


// parse requests of content-type - application/json
app.use(bodyParser.json())

/*mongoose.Promise = global.Promise;

mongoose.connect(db.url, {});

mongoose.connection.on('error', function () {
	console.log('could not connect to the database. Exiting now....');
	process.exit();
});

mongoose.connection.once('open', function () {
	console.log("Successfully connected to the database");
});*/

require('./app/routes')(app);

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});


app.listen(port, function(){
    console.log("Server is listening on port " + port);
});


/*MongoClient.connect(db.url, (err,db) => {
	
	if(err) return console.log(err)
	
	require('./app/routes')(app, db);
	
	app.listen(port, () => {
		console.log('We are live on ' + port);
	});

});*/