const slcQG = document.querySelector("#QG")
const url = "http://127.0.0.1:5500/qualitygate.html"
const url2 = "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwj83s-arM7_AhVslZUCHdjZBM4QPAgI"

function openOptions(){

    for(i = 0; i < slcQG.options.length; i++)
    if (slcQG.value == "1" ){
        window.location.href = url
    }
    else if (slcQG.value == "2"){
        window.location.href = url2
    }
}

slcQG.addEventListener("change", openOptions)
