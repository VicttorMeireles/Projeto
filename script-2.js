//GEHRING//

const gehring = document.querySelector("#gehring")
const url12 = "http://127.0.0.1:5500/1-alarmes.html"

function openGehring(){

    for(i = 0; i < gehring.options.length; i++)
        if (gehring.value == "12"){
            window.location.href = url12
        }
}

gehring.addEventListener("change", openGehring)

const pittler = document.querySelector("#pittler")
const url13 = "http://127.0.0.1:5500/OP.60A-Pittler/start-m%C3%A1quina/start-maquina.html"
const url15 = "http://127.0.0.1:5500/4-ajuste-de-medidas-pittler.html"
const url16 = "http://127.0.0.1:5500/OP.60A-Pittler/troca-de-ferramentas/4-troca-de-ferramentas.html"

function openPittler() {

    for (i = 0; i < pittler.options.length; i++)
        if (pittler.value == "13") {
            window.location.href = url13
        }
    if (pittler.value == "15") {
        window.location.href = url15
    }
    if (pittler.value == "16"){
        window.location.href = url16
    }
}

pittler.addEventListener("change", openPittler)


//NILES//

const niles = document.querySelector("#niles")
const url19 = "http://127.0.0.1:5500/5-ajuste-medidas-niles.html"
const url21 = "http://127.0.0.1:5500/5-setup.html"
const url25 = "http://127.0.0.1:5500/5-alarmes.html"

function openNiles() {

    for (i = 0; i < niles.options.length; i++)
        if (niles.value == "19") {
            window.location.href = url19
        }
    if (niles.value == "21") {
        window.location.href = url21
    }
    if (niles.value == "25") {
        window.location.href = url25
    }
}

niles.addEventListener("change", openNiles)


//QUALITY GATE//

const QG = document.querySelector("#QG")
const url33 = "http://127.0.0.1:5500/8-Inspecaodepecas.html"
const url34 = "http://127.0.0.1:5500/8-rugosidade.html"

function openQG() {

    for (i = 0; i < QG.options.length; i++)
        if (QG.value == "33") {
            window.location.href = "http://127.0.0.1:5500/8-Inspecaodepecas.html"
        }
    if (QG.value == "34") {
        window.location.href = "http://127.0.0.1:5500/8-rugosidade.html"
    }
}

QG.addEventListener("change", openQG)