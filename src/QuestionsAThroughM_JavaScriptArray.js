
//Question a and b
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var boysNGirls = boys.concat(girls);

console.log(boysNGirls);
console.log(boys);
console.log(girls);
//This does not mutate the original arrays, just creates a new concatenated version

//Question c
console.log(boysNGirls.join(","));
console.log(boysNGirls.join("-"));

//Question d an e
boysNGirls.push("Lone", "Gitte");
boysNGirls.unshift("Hans", "Kurt");
console.log(boysNGirls);

//Questions f and g
boysNGirls.shift();
boysNGirls.pop();
console.log(boysNGirls);

//Question h
boysNGirls.splice(3,2);
console.log(boysNGirls);

//Question i
console.log("Reversed: " + boysNGirls.reverse());

//Question j
console.log("Sorted by sort method" + boysNGirls.sort());
//Question k
console.log("Sorted by name: " + boysNGirls.sort((a,b) => a.localeCompare(b)));

//Question l

let d = boysNGirls.map(function(x){
    return x.toUpperCase();
})
console.log(d);

//Question m
    let startWith = d.filter((name)=> name.startsWith("L"|| "I"));
let startsWith = d.map(function (y){
    return d.filter((name)=> name.startsWith("L"|| "I"));
})
    console.log(startsWith);