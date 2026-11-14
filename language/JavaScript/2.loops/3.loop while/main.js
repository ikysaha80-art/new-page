/** WHILE LOOPS
 * While loops execute a block of code as long as a specified condition is true.
 * 
 * JavaScript punya 2 tipe while loop
 * - while loop
 * - do while loop
 */


// while loop
// syntax 
/**
 * while (condition) {
 *   // code block to be executed
 * } 
 * 
 */

// example || contoh

var text = "";
var i = 1;

while (i < 10) {
    text += "end of number is " + i + "<br>";
    i++;
}
document.getElementById("satu").innerHTML = text


// do while loop
// syntax
/**
 * do{
 *  // code block to be executed
 * } 
 * while (condition)
 * 
 */

// example || contoh

var text = "";
var i = 0;

do {
    text += "number is " + i + "<br>"
    i++
}
while (i < 10)
document.getElementById("dua").innerHTML = text


// comparing for and while || membandingkan for dan while

// gunakan for untuk mengambil nama nama dari array
// use a for to collect names from array

// for

const car = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i = 0;

for (;car[i];) {
    text += car[i] + "<br>";
    i++;
}
document.getElementById("tiga").innerHTML = text

// while 
const fruit = ["Banana", "Grape", "Strawberry", "Lemon"];
var text = "";
var i = 0;

while (fruit[i]) {
    text += fruit[i] + "<br>";
    i++
}
document.getElementById("empat").innerHTML = text

/**
 * 22:20
 * 13 / 11 / 2026
 */