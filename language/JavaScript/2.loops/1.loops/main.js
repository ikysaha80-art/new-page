/**
 * Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
 */

/**
 * You can write:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
*/

// example
// for loop
var text = ""
for (let i = 1; i < 6; i++) {
    text += "the number is " + i + "<br>";
}
document.getElementById("satu").innerHTML = text // outputnya 1 => 5



// loop scope
/**
* let i = 5;

for (i = 0; i < 10; i++) {
  // some code
}

// Here i is 10
*/

//example
// loop scope
var i = 5;
for (i = 0; i < 10; i++) {
    // some statements
}
document.getElementById("dua").innerHTML = i // 10


// with let before i
var i = 5;
for (let i = 0; i < 10; i++){
    // some statements
}
document.getElementById("tiga").innerHTML = i // 5


/** Syntax while
 *  while (condition) {
 *   some statements
 * }
 */

var i = 0;
var text = ""
while (i < 10) {
    text += "the number is " + i + "<br>";
    i++
}
document.getElementById("empat").innerHTML = text

/** Syntax do while
 * do {
// code block to be executed
}
  while (condition);
 */

var text = "";
var i = 0;
do {
    text += "the number is " + i + "<br>"
    i++
} while (i < 10)
document.getElementById("lima").innerHTML = text