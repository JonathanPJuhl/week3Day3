function add(n1, n2){
    return n1 +n2;
}
var sub = function(n1,n2){
    return n1 - n2
}

var cb = function(n1,n2, callback){
    if(typeof !n1==="number"){
        throw Error;
    } if(typeof !n2==="number") {
            throw Error;

        }
    if (typeof !callback==="function"){
throw Error;

    } else
    return "Result from the two numbers: "+n1+"&"+n2+"="+callback(n1,n2);
};

/*
1. answer = 3
2. the reference to the function since there are no ()
3. answer 3, last nr ignored
4. Returns NAN since it's only gotten one nr and a null value
5. Result from the two numbers: "3"+"3"="+6;
6. Result from the two numbers: "4"-"3"="1;
7. the () at the end indicate that it's a function being called, here we just wanted the reference
8. result = 3hh
 */
//console.log( add(1) );
//console.log(cb(3,3,add()));

//Question 3

try{
    console.log(cb(3,a,add()));
} catch (e){
    console.error( e.name + ': '+ e.message );
}

//Question 4
var mul = function(n1,n2){
    return n1*n2;
}
console.log(cb(2,6, mul));

//Question 5
console.log(cb(4,2, function(x,y){
    return x/y;
}))