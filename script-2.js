//PITTLER//

const pittler = document.querySelector("#pittler")
const url13 = "http://127.0.0.1:5500/4-start-maquina.html"

function openPittler() {

    for (i = 0; pittler.options.length; i++)
        if (pittler.value == "13") {
            window.location.href = url13
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
            window.location.href = url33
        }
        else if (QG.value == "34") {
            window.location.href = url34
        }
}

QG.addEventListener("change", openQG)
