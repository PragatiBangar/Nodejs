var fs = require('fs');

var onFileAppend = function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("file appended successfully");
    }
};

fs.appendFile('test.txt',
              'Welcome to transflower learning',
              onFileAppend);