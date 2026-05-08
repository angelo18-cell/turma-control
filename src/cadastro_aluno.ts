const tela = require("readline-sync")
const { título } = require("./utius.ts")

let alunos:string[] = []
let nascimento:string[] = []
let contatos:string[] = [] 

function telaCadastro() {

	título("CADASTRO DE ALUNO")
	const nomeAluno:string = tela.question("Nome do aluno: ")
	const datanascimento:string = tela.question("Data Nascimento:")
	const contato:string = tela.question("Número de contato:")
	
	const aluno = `${nomeAluno};${datanascimento};${contato}`
	
	alunos.push(aluno)

	console.log(alunos)
}

function telaListaAlunos() {
  for(let i = 0; i < alunos.length; i++) {
    console.log(`${i + i}. ${alunos[i]}`)
   }
 }

export = { telaCadastro,telaListaAlunos } 
