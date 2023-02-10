
var show = function(){
    console.log("showing details.....");
};

//show();          //direct call

/*for(i=0; i<100 ; i++){                 //blocking call
    show()
}
*/

//show function is getting invoked indirectly
//non blocking call
setInterval(show,2000);
console.log("Terminating node js app....");