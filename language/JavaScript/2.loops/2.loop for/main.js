/** for loop
 *   for (exp 1; exp 2; exp 3) {
 * // code block to be executed
 * }
 */


// for loop 
var text = "";
for (let i = 0; i < 10; i++) {  // i++ menandakan [i] yang akan terus di ulang sampai mencapai target
    text += "number " + i + "<br>";
}
document.getElementById("satu").innerHTML = text 

const car = ["BMW", "Saab", "Volvo", "Ford", "Toyota"];
let len = car.length; // length adalah properti yang menunjukkan jumlah elemen atau karakter dari suatu objek
var text = ""
for (let i = 0; i < len; i++){
    text += car[i] + "<br>"    
}
document.getElementById("dua").innerHTML = text

let i = 0;
var text = "";
for (; i < len;) {
    text += car[i] + "<br>";
    i++
}
document.getElementById("tiga").innerHTML = text

/**
 * 13:49
 * 10 / 11 / 2026
 */