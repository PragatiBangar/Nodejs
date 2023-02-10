var show = function(){
    console.log("show implemented data");
}


exports.Display = function(){

    var product = {
        "id" : 56,
        "name" : "Gerbera",
        "Description" : "Wedding flower",
        "Quantity" : 45,
        "UnitPrice" : 5666
    };
    console.log("this is a logic for display");
    console.log(product);
};