const inputLogin = document.querySelector("#input-email-login")
const inputPassword = document.querySelector("#input-password-login")
const buttonLogin = document.querySelector("#button-login")

function clickButton (event){
    const inputLogin = document.querySelector("#input-email-login").value
    const inputPassword = document.querySelector("#input-password-login").value

    console.log(inputLogin, inputPassword)
}

buttonLogin.addEventListener ("click", clickButton)