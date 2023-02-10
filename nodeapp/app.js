//app.js act like consumer

var handler = require("./handler")
var ioHandler = require("./io")

console.log("hello world");
var status = true;
console.log("Status = " + status) ;
handler.Display();

ioHandler.writeToFile("readme.txt", "This is a sampledata.....");