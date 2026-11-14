/**
 * if (condition) {
 * // block of code
 * } else {
 * // block of code
 * }
 */

var greeting = ""
if (new Date().getHours() < 23) {
    greeting = "Good night!"
} else {
    greeting = "Good evening!"
}
document.getElementById("satu").innerHTML = greeting


let time = new Date().getHours();
var greeting = ""
var write = ""

if (time < 9){
    write = "Jika di bawah jam 9, maka sistem menulis";
    greeting = "Selamat pagi";
} else if (time < 15) {
    write = "Jika di bawah jam 3 sore, maka sistem menulis";
    greeting = "Selamat siang";
} else if (time < 18) {
    write = "Jika di bawah jam 6, maka sistem menulis";
    greeting = "Selamat sore";
} else  if (time > 18) {
    write = "Jika sudah lewat jam 6, maka sistem menulis"
    greeting = "Selamat malam"
} else {
    write = "tes"
    greeting = "tess"
}
document.getElementById("dua").innerHTML = write + "<br>" + greeting


let random = "";

if (Math.random() < 0.5) {
    random = "<a href='www.youtube.com'>Visit Youtube</a> "
} else {
    random = "<a href='www.facebook.com'>Visit Facebook</a>"
}
document.getElementById("tiga").innerHTML = random


/**
 * 21:31
 * 06 / 11 / 2026
 */