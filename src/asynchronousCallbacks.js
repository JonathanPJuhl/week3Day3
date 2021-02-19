var msgPrinter = function(msg,delay){
    setTimeout(function(){
        console.log(msg);
    },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
//Answer without executing : 1: aaaaaaaa 2: ddddddd 3: ffffffff: 4: eeeeeee 5: bbbbbbb
//That was indeed correct


