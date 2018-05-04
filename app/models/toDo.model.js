var mongoose = require('mongoose');

var ToDoSchema = mongoose.Schema({
	title: String,
	description: String,
	status: String
},{
	timestamps: true
});

module.exports = mongoose.model('toDoDB',ToDoSchema);