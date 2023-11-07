/**const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "admin" && password === "password"){
        return true
    }else{
        return false
    }
} */

const form = document.querySelector("form")

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;


function validateForm() {
    //var status = false;


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
