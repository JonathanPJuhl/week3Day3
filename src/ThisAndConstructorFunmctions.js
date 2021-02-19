//Questions 1-3
function Person(name){ //this is capitalized which makes it possible to be used in conjunction with the "new" keyword
    this.name = name;
    var self = this;
    console.log("Name: "+ this.name);
    setTimeout(function(){
        console.log("Hi  "+self.name);  //this refers to the name given to the outer function and is therefore not reachable from the inner - should just be name without "this" if we wanted it displayed
    }.bind(this),2000);
}

Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: "+ name);  //The name has been set after the functioncall so until reset it will be Kurt


var p = new Person("Kurt Wonnegutten");  //Create an instance using the constructor function
console.log("I'm global: "+ p.name); //this is still coming from the call up top, not from the new instance - if we want the instance we should use the variable p


//Question 4

var greeter = function(){
    console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
