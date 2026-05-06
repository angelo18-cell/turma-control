const tela = require("readline-sync")
function main() { 	
     let loop = true

       while(loop) {
       	
	  console.log("1 - Cadastrar aluno\n2 - adicionar notas\n3 - listar\n0 - sair")
	const opcao:string = tela.question("Dejesa continuar") 
	if(opcao === "0") loop = false
  }
}

main()
