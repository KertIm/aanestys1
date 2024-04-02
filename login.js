function validateForm() {
   
const form = document.querySelector("form")

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {  //admin
        window.location.href = "admin.html"
        return true
    } else {
        return false
    }

}
function KUlos() {
    window.location.href = "index.html"
}
function kirjaudu() {
    window.location.href = "kirjautuminen.html"
}