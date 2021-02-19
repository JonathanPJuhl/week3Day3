//Question 1
const name = ["Lars", "Jan", "Bo", "Peter", "Mogens"];

let namesFiltered = name.filter(item => item.length<=3);
//const map2 = name.map(name.filter(x=> x.length>4)
console.log(namesFiltered);

name.forEach(item => console.log(item));
namesFiltered.forEach(item => console.log("Filtered  " + item));

//Question 2
let mapped = name.map(function (x){
    return x.toUpperCase();
})
console.log(mapped);

//Question 3
function makeUl(name){
    const list = name.map(function (names){
        return `<li> ${names} </li>`
    })
    const joinedResult = list.join("");
    const result= `<ul>${joinedResult}</ul>`
    return result;
}
const result = makeUl(name);
console.log(result)

//Question 4a
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
let carsNewerThan99 = cars.filter(function (e){
    return e.year>1997;
})
console.log("carsNewerThan99: ")
console.log(carsNewerThan99);
let allVolvos = cars.filter(function (e){
    return e.make==='Volvo';
})
console.log("All volvos: ")
console.log(allVolvos);
let carsUnder5000 = cars.filter(function (e){
    return e.price<5000;
})
console.log("cars under 5000: ")
console.log(carsUnder5000);
//Question 4b
let sqlCars = cars.map(function(x){
    return "INSERT INTO cars (id,year,make,model,pice) VALUES ("+x.id+","+x.year+","+x.make+","+x.model+","+x.price+");";
})
let sqlCarsReadyForSQL = sqlCars.join(" ");
console.log(sqlCarsReadyForSQL);