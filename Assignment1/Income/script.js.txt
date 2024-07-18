let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per";

document.getElementById("display1").innerHTML = text;

let array = text.split(" ");
document.getElementById("display2").innerHTML = "Splited strings: "+ array;

let num1 = array[2];
let num2 = array[8];
let num3 = array[12];

document.getElementById("display3").innerHTML = "Numbers: "+ num1 + ", " + num2 + ", " + num3


let n1 = parseInt(num1);
let n2 = parseInt(num2);
let n3 = parseInt(num3);

let total_annual_income = (n1 * 12) + n2 + (n3 * 12);

document.getElementById("display4").innerHTML = "Total annual income = "+ total_annual_income;

