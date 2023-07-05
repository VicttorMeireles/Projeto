let inputLogin = document.querySelector("#input-email-login")
let inputPassword = document.querySelector("#input-password-login")
const buttonLogin = document.querySelector("#button-login")
const url = "http://127.0.0.1:5500/opera%C3%A7%C3%B5es.html"

const users = [
    { name: "admin", password:"admin" },
    { name: "operador", password:"admin" }
]


function accessPage() {
    for (i = 0; i < users.length; i++) {
        if(inputLogin.value === users[i].name & inputPassword.value === users[i].password) {
            window.location.href = url
        }if (inputLogin.value != users[i].name & inputPassword.value != users[i].password){
            alert ("Senha ou usuário estão incorretos!")
        }
       
    }
}

buttonLogin.addEventListener("click", accessPage)


//OPERAÇÕES//
//QUALITY GATE//
