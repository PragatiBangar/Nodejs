//requiring module
const assert = require('assert');
const mathengine = require('../mathengine');
//Define multiple test as on block
//describe : to define mocha test

describe("Simple Calculation",() =>{
    before(()=> {
    //Pre arrangement
        console.log("Performing certain initialization for building test environment");
        console.log("This part executes once before all test");
    });
        
    //post arrangement
    after(()=>{
        console.log("Performing certain initialization for building test environment");
        console.log("This part executes once before all test");
    });

// define unit test

describe("Test1",()=>{
    beforeEach(()=>{
        Console.log("some initial setup for Test1");
    });

    it("test case 1 : addition",()=>{
        var input1 = 67;
        var input2 = 3;
        var expectedResult = 70;
        var actualResult = mathengine.addition(input1,input2);
        assert.equal(actualResult,expectedResult);
    })

    it("test case 2 : multiplication",()=>{
        var input1 = 6 ;
        var input2 = 6 ;
        var expectedResult = 36 ;
        var actualResult = mathengine.multiplication(input1,input2);
        assert.equal(actualResult,expectedResult);
    })
})


describe("Test2",()=>{
    beforeEach(()=>{
        console.log("some initial setup for Test2");
    });

    it("test case 3 : substraction", ()=>{
        var input1 = 6;
        var input2 = 6;
        var expectedResult = 0;
        var actualResult = mathengine.substraction(input1,input2);
        assert.equal(actualResult, expectedResult);
    })

    it("test case 4 : division", ()=>{
        var input1 = 5;
        var input2 = 5;
        var expectedResult = 1;
        var actualResult = mathengine.division(input1,input2);
        assert.equal(actualResult, expectedResult);
    })
})
});


