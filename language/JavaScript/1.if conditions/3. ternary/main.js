let age = 20
let final = (age < 18) ? "Minor" : "adult";
document.getElementById("satu").innerHTML = final

let price = 30
let isMember = true
let discount = isMember ? 0.2 : 0;
let total = 30 - (price * discount);
document.getElementById("dua").innerHTML = total + ".000"

let harga = 30
let member = false
let diskon = member ? 0.2 : 0;
let hasil = 30 - (harga * diskon);
document.getElementById("tiga").innerHTML = hasil + ".000"