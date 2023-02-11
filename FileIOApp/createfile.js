//File IO operation

var fs = require('fs');
fs.writeFile('test.txt',
             'Hello World',
             (err)=> {
                if(err){
                    console.log("error in file writing");
                }
                else
                      console.log("file writting completed successfully");
            })