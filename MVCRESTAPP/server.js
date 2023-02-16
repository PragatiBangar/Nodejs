const express = require('require');
const mysql = require('mysql');
var bodyParser = require('body-parser');

//connection configuration
const mc = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'actsdb'
});

app = express();
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

var routes = require('/routes/appRoutes');
routes(app);

app.listen(3000);
console.log("server is listening on port 3000");