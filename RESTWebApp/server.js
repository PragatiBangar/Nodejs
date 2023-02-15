var express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

var flowers =[
             {"id":1, "title":"gerbera", "description":"wedding flower", "unitprice":34, "quantity": 1000},
             {"id":2, "title":"rose", "description":"valentine flower", "unitprice":26, "quantity": 2000},
             {"id":3, "title":"lily", "description":"beautiful flower", "unitprice":56, "quantity": 3000},
             {"id":4, "title":"aster", "description":"delicate flower", "unitprice":63, "quantity": 4000},
             {"id":5, "title":"marigold", "description":"festival flower", "unitprice":31, "quantity": 5000}

];

app.get("/api/flowers",(request,response) =>{
    console.log("sending all flowers available");
    response.send(flowers);
});

app.post("/api/flowers",(request,response) =>{
    var newFlower = request.body;
    flowers.push(newFlower);
    console.log("Adding new flower to collection...");
    response.status(200).send("pushed object successfully");
});

app.put("/api/flowers/:id",(request,response) =>{
    var idOfFlower = request.params.id;
    var updatedFlower = request.body;
    //update the flower whose id = mentioned id;
    console.log("updating existing flower from collection with another flower..." +idOfFlower);
    response.status(200).send("flower is updated from status" +idOfFlower);
});

app.delete("/api/flowers/:id",(request,response) =>{
    var idOfFlower = request.params.id;
    //removing existing flower whose id s matching collection
    console.log("deleting existing flower from collection" + idOfFlower);
    response.status(200).send("flower is deleted from collection" + idOfFlower);
});

app.listen(9000,()=>{
    console.log("api server is listening on port 9000");
});