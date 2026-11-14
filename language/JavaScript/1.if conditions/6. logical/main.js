let x = 6
let y = 8
var z = (x < 9 && y > 4) // && akan mengharuskan kedua kode benar, jika salah satu  aja maka  outputnya jadi false
document.getElementById("satu").innerHTML = z

let a = 7
let b = 3
let c = (a > 6 || b < 4) // || berkebalikan dengan &&, hanya perlu salah satu kode benar, maka outputnya true
document.getElementById("dua").innerHTML = c 

let d = 9
let e = 4
let f = !(d === e) // ! menandakan tidak
document.getElementById("tiga").innerHTML = f

let owner = "budi";
let hasil1 = owner ?? "member" // jika yang kanan kosong, maka yang kiri akan di ambil
document.getElementById("empat").innerHTML = hasil1

let tamu = null
let pemilikRumah = "jamal"
let hasil2 = tamu ?? pemilikRumah // jika yang kiri kosong, maka yang kanan akan di ambil
document.getElementById("lima").innerHTML = hasil2

/**
 * 22:42
 * 08 / 11 / 2026
 */