var request = require("request");
let url = "http://localhost:3000/api/employees/";

request.get(url,
            (error, response, body)=>{
                if(error){
                    return error;
                }
                console.log(JSON.parse(body));
            });