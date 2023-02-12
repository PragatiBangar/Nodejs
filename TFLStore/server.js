var express = require('express');
var path =require('path');

const app = express();

//http handler get http://localhost:9000/
//http request mapped with respective http handler
var staticMiddleware = express.static(path.join(_dirname,"public"));
var urlEncodedMiddleware = express.urlencoded({extended : true});
var jsonParsingMiddleware = express.json();

app.use(staticMiddleware);
app.use(urlEncodedMiddleware);
app.use(jsonParsingMiddleware);

app.get("/",(request,response) =>{
    console.log("default http handler is called at server");
    //Response.status(200).send("<h1> Welcome to transflower store<h2>");
    response.sendFile(path.join("/index.html"));
});

app.post("/login",(request,Response) =>{
    var credential = request.body;
    console.log(credential);
    if(credential.email === "ravi.tambade@transflower.in" && credential.password === "seed123"){
        console.log("validation successful");
        Response.redirect("/order.html");
    }
    else{
        console.log("Invalid User");
    }
});

app.listen(9000);
console.log("HTTP server listening on port 9000");