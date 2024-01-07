function validateForm() {
    //var status = false;
const form = document.querySelector("form")

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {  //admin
        window.location.href = "alotussivu.html"
        return true
    } else {
        return false
    } /**else if (username === "k" && password === "password") {  //normaali käyttäjä
        return true
    } else {
        return false
    } */

    //return status;

}