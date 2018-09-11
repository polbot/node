let prompt = require("prompt-sync")();
let valor = prompt("Digite um valor maior 0: ");

if (valor >= 0) {
    if (valor <= 20) {
        console.log("OK")
    }else if (valor <= 40) {
        console.log("Medio")
    }else if (valor <= 60) {
        console.log("Alto")
    }else if (valor <= 80) {
        console.log("Alerta")
    }else if (valor <= 100) {
        console.log("Critico")
    }
}else console.log("ERROR")