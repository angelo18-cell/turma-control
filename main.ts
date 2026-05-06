const tela = require("readline-sync")
const cadastrar = require("./src/cadastro_aluno.ts")

function main() {
     let loop = true

       while(loop) {
       	
	  console.log("1 - Cadastrar aluno\n2 - adicionar notas\n3 - listar\n0 - sair")
	const opcao:string = tela.question("Dejesa continuar") 
	if(opcao === "0") loop = false
	switch(opcao){ 
         case"0":
		 loop = false // puxar para loop
	 break
	 case "1":
		 cadastrar.telaCadastro()
      }
       } 
}
main()
