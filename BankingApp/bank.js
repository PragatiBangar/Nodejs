var events = require('events');
var emitter = new events.EventEmitter();
var listeners = require('./listener');

var Account = function(amount){
    var balance = amount;
    
    var monitor = function(){
        if(balance <= 10000)
            emitter.emit("underbalance");
        else if(balance >= 250000){
            emitter.emit("overbalance"); 
        }
    }
    var getBalance = function(){
        return balance;
    }

    var deposit = function(amount){
        balance = balance + amount;
        monitor();
    }

    var withdraw = function(amount){
        balance = balance - amount;
        monitor();
    }

    return{
        getBalance : getBalance,
        deposit : deposit,
        withdraw : withdraw
    }
};

console.log("Welcome to HDFC bank");
console.log("bank account processing...");

console.log("event registration.....");
emitter.on("underbalance",listeners.blockAccount);
emitter.on("underbalance",listeners.SendEmail);
emitter.on("overbalance", listeners.payIncomeTax);

emitter.on("underbalance",
        () => {
                console.log("account opertation transaction history is updated.....")
        });

console.log("Banking operation started...");
var acct123 = new Account(15000);
var acct124 = new Account(200000);

console.log("First account instance balance = " +acct123.getBalance());
acct123.withdraw(5000);
console.log("current balance = " +acct123.getBalance());

console.log("second account instance balance = " +acct124.getBalance());
acct124.deposit(100000);
console.log("current balance = " +acct124.getBalance());
