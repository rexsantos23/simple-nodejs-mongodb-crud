module.exports = function(app) {


	var toDo = require('../controllers/toDo.controller');

	// Create new toDo/Task
	app.post('/to-do', toDo.create);

	// Retrieve all notes
	app.get('/to-do', toDo.findAll);

	app.get('/to-do/:toDoParams', toDo.findOne);

	app.put('/to-do/:toDoParams', toDo.update);

	app.delete('/to-do/:toDoParams', toDo.delete);

};