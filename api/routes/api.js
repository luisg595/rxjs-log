module.exports = function(app) {
    const todo = require('../controllers/TodosController')

    app.route('/tasks')
        .get(todo.index)
        .post(todo.store)
    
    app.route('/tasks/:id')
        .get(todo.show)
        .put(todo.update)
        .delete(todo.destroy)
}