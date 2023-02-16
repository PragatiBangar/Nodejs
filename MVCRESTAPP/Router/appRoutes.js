var taskList = require('../controllers//taskcontroller');
const{getTaskById} = require('../model/dal');

module.exports = function(app){

app.route('/api/tasks')
    .get(taskList.list_all_tasks) 
    .post(taskList.create_a_task);

app.route('/api/tasks/taskId')
    .get(getTaskById)
    .put(taskList.update_a_task)
    .delete(taskList.delete_a_task)
}