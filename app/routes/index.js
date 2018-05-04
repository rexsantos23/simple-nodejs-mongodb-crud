const toDoRoutes = require('./toDo_routes');

module.exports = function(app,db) {
	toDoRoutes(app,db);
};