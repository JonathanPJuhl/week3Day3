//Question 1
var people = {
    firstname: "James",
    lastName: "Bond",
    birthday: "13/02-1997",
    age: 24
}
for(prop in people){
    console.log(prop, people[prop]);
}
delete people.birthday;
people.nationality="Danish";
console.log("Without birthday and with nationality: ")
for(prop in people){
    console.log(prop, people[prop]);
}

//Question 2
function People(firstName, lastName, age){
    this.firstname=firstName;
    this.lastName=lastName;
    this.age=age;
    console.log(this.firstname, this.lastName, this.age);
}
var p = new People("Jesper", "Kaspersen", 24);

//var getPeople=