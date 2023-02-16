async function work(){
    console.log("Working on task...");

    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("I do !")},4000);
    });
    let result ="Inprogress";
    result = await promise;

    console.log(result);
};

console.log("Start of node js app execution..");
work().then(()=>{
                console.log("I am happy.very very happy.promise has been kept.");
});

//work().then(console.log("promise is delivered. and it is fulfilled"));

console.log("Last line of node js app execution..");