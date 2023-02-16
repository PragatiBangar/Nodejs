var sql = require('./db.js');

//data access logic layer

var Task = function(t){
    //initialization code
    //constructor
    this.task = t.task;
    this.status = t.status;
    this.creted_at=new Date();
}

Task.createTask = function(newTask,result){
    //insert new task
    sql.query("INSERT into tasks SET ?",newTask, function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
   });
};

Task.getTaskById = function(taskId,result){
    sql.query("select task from tasks where id=?", taskid, function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err);
        }
        else{
            result(null,res);
        }
   });
};

Task.getAllTask = function(result){
   sql.query("select * from tasks", function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err);
        }
        else{
            console.log('tasks : ',res);
            result(null,res);
        }
   });
};

Task.updateById = function(id,task,result){
    sql.query("UPDATE tasks SET task =? WHERE id =?", [task.task,id], function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    }); 
};

Task.remove = function(id,result){
    sql.query("DELETE from tasks WHERE id =?", [id], function(err,res){
        if(err){
            console.log('error: ',err);
            result(null,err);
        }
        else{
            result(null,res);
        }
    }); 
};

module.exports = Task;