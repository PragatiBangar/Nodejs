const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');

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

var app = express();

app.use(bodyparser.json());

app.get("/api/employees",
               (req,res) =>{
                    var command = "SELECT * from employees";
                    con.query(command,(err,rows,fields) => {
                                                    if(!err){
                                                        res.send(rows);
                                                    }
                                                    else{
                                                        console.log(JSON.stringify(err));
                                                    }

                });
});

app.get("/api/employees/:id",(req,res) =>{
        var id = req.params.id;
                    var command = "SELECT * from employees where ID =?";
                    con.query(command,(err,rows,fields) => {
                                                    if(!err){
                                                        res.send(rows);
                                                    }
                                                    else{
                                                        console.log(JSON.stringify(err));
                                                    }

                });
});

app.delete("/api/employees/:id",(req,res) =>{
        var id = req.params.id;
                    var command = "DELETE from employees where ID =?";
                    con.query(command,(err,rows,fields) => {
                                                    if(!err){
                                                        res.send("Record deleted successfully");
                                                    }
                                                    else{
                                                        console.log(JSON.stringify(err));
                                                    }

                });
});


app.listen(3000,() => {
    console.log("server is listening on port 3000");
});