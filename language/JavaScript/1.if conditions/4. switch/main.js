/**
 * switch (expression) {
 * case y :
 *    // code block
 * break
 * case x :
 *    // code block
 * break
 * default :
 *    // code block
 * }
 */


let day;
let date = new Date().getDay();

switch (date) {
    case 0 :
        day = "minggu";
        break

    case 1 :
        day = "senin";
        break

    case 2 :
        day = "selasa"
        break

    case 3 :
        day = "rabu";
        break

    case 4 :
        day = "khamis";
        break

    case 5 :
        day = "jumat";
        break

    case 6 :
        day = "sabtu";
        break

    default :
    "nothing"

}
document.getElementById("satu").innerHTML = "hari ini adalah hari " + day


let hari;
switch (date) {
    case 4 :
    case 5 :
        hari = "bentar lagi weekend";
        break

    case 0 : 
    case 6 :
        hari = "horeee weekend";
        break

    default :
        hari = "weekend udah lewat mas wokaokaok"
}
document.getElementById("dua").innerHTML = hari

let text;
let x = "0";
switch (x) {
    case 0 :
        text = "of"
        break

    case 1 :
        text = "on"
        break

    default :
    text = "there is nothin you search"
}
document.getElementById("tiga").innerHTML = text

/**
 * 22:15
 * 07 / 11 / 2026
 */