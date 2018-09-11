
let prompt = require("prompt-sync")();
let valor = prompt("Digite um status (Ok,Medio,Alto,Alerta e Critico) ");


switch(valor){
	case "Ok":
		console.log("O range esta entre 0 e 20");
		
		break;
	case "Medio":
		console.log("O range esta entre 21 e 40");
        break;
    case "Alto":
		console.log("O range esta entre 41 e 60");
        break;
    case "Alerta":
		console.log("O range esta entre 61 e 80");
        break;
    case "Critico":
        console.log("O range esta entre 81 e 100")
	default:
		console.log("invalido");
 }