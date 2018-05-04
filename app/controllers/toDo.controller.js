var ToDo = require('../models/toDo.model.js');

exports.create = function(req, res) {
	//Create and Save ne ToDo/Task
	console.log('here');
	if(!req.body.description) {
		return res.status(400).send({ message: "toDo's can't be empty!" });
	}

	var toDo = new ToDo({title: req.body.title || "Untitled ToDo/Task", description: req.body.description});

	toDo.save(function(err, data) {
		if(err) {
			console.log(err);
			res.status(500).send({ message: "Some error occured while creating the toDo/Task"});
		}else{
			res.send(data);
		}
	});
}

exports.findAll = function(req, res) {
	// Retrieve and return al todos/task from database
	ToDo.find(function (err,toDos) {
		if(err){
			console.log(err);
			res.status(500).send({ message: "Some error occured while retrieving data"});
		}else{
			res.send(toDos);
		}
	});
}

exports.findOne = function(req, res) {


	console.log(req.params);
	
}

exports.update = function(req, res) {
	console.log(req.body);
}

exports.delete = function(req, res) {
	console.log(req.body);
}