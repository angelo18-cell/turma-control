// Limpa a tela mantenha as informações no topo
function limpartela(){
	console.clear()
}

// função responsável popular o sinal na tela 
function linha(simbolo:string = "=") {
	console.log(simbolo.repeat(process.stdout.columns))
}

// constroi um cabeçalho da janela atual
function titulo(texto:string) {
	const largura = process.stdout.columns

	// padStart popula no inicio da linha
	// padEnd popula no final da linha
	const textoCentralizado = texto.padStart(
		(largura + texto.lenght)/2
	).padEnd(largura)


	limparTela()
	linha()
	console.log(textoCentralizado)
	linha()
}

export = {
	limparTela,
	linha,
	titulo
} 
