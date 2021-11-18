const prompt = require("prompt-sync")();
const a = parseInt(prompt("Enter first num: "));
const b = parseInt(prompt("Enter Second num: "));
const c = parseInt(prompt("Enter Third num: "));
console.log("NUM's are: ",a,b,c);
//check maximum value
if(a > b && a > c)
    console.log("maximum value is a :"+ a);
if(b > a && b > c)
    console.log("maximum value is b :"+ b);
else
    console.log("maximum value is c :"+ c);

//check maximum value
if(a < b && a < c)
    console.log("minimum value is a :"+ a);
if(b < a && b < c)
    console.log("minimum value is b :"+ b);
else
    console.log("minimum value is c :"+ c);