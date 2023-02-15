const mysql = require('mysql');
//create connection with mysql server

var conEnv = {
              server : 'localhost',
              user : 'root',
              password : '',
              database : 'actsdb',
              multipleStatements : true
};

var con = mysql.createConnection(conEnv);
con.connect((err) => {
    if(!err){
          console.log("MySQL DB Connection successful");
    }
    else{
          console.log("MySQL DB Connection failed \n Error  :" + JSON.stringify(err));
    }
});

var command = "SELECT * from employees";

con.query(command,(err,rows,fields) => {
      if(!err){
            var strRows = JSON.stringify(rows);
            console.log(rows);
      }
      else{
            console.log(JSON.stringify(err));
      }
});

console.log("fetching 12 data");

var command2 = "SELECT * from employees where ID =?";

con.query(command2,12,(err,rows,fields) => {
      if(!err){
            var strRows = JSON.stringify(rows);
            console.log(rows);
      }
      else{
            console.log(JSON.stringify(err));
      }
});

console.log("delete 12 data");

var command2 = "DELETE from employees where ID =?";

con.query(command2,12,(err,rows,fields) => {
      if(!err){
            var strRows = JSON.stringify(rows);
            console.log(rows);
      }
      else{
            console.log(JSON.stringify(err));
      }
});