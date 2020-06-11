// Função que adiciona novo conteudo aos Dados armazenados.
// Esta parciamente funcionando
// O parametro da função é o tipo de dado que sera criado. ("book", "movie" ou "game")
function addData(type) {
	let dataToAppend = {};

    // If identifica o tipo de item que deseja dicionar, ele é um parametro da função
	if (type === "book") {
		dataToAppend.name = prompt(
			`Qual o nome do Livro que você quer adicionar? Isso é obrigatorio.`
		);
		if (dataToAppend.name === null || dataToAppend.name === "") {
			return;
		}

		dataToAppend.year = parseInt(
			prompt(`Qual o ano de publicação desse livro?`)
		);
		if (dataToAppend.year === null) {
			return;
		}

		dataToAppend.author = prompt(`Qual o nome do Autor do livro?`);
		if (dataToAppend.author === null) {
			return;
		}

		dataToAppend.rate = parseFloat(
			prompt("Qual sua nota para o filme? Isso não é obrigatorio.", 0.0)
		);
		if (dataToAppend.rate === null) {
			dataToAppend.rate = 0.0;
		}

		dataToAppend.tumb = prompt(
			"Se quiser pode inserir o link de uma imagem... Isso não é obrigatorio.",
			"https://via.placeholder.com/230x200"
		);
		if (dataToAppend.rate === null) {
			dataToAppend.tumb = "https://via.placeholder.com/230x200";
		}

		dataToAppend.description = prompt(
			"Você tambem pode adicionar uma descrição... Isso não é obrigatorio."
		);
		dataToAppend.company = prompt(
			`Qual o nome da Editora do livro? Isso não é obrigatorio.`
		);
	}

    // If identifica o tipo de item que deseja dicionar, ele é um parametro da função
	if (type === "game") {
		dataToAppend.name = prompt(
			`Qual o nome do Jogo que você quer adicionar? Isso é obrigatorio.`
		);
		if (dataToAppend.name === null || dataToAppend.name === "") {
			return;
		}

		dataToAppend.year = parseInt(
			prompt(`Qual o ano de publicação desse Jogo?`)
		);
		if (dataToAppend.year === null) {
			return;
		}

		dataToAppend.author = prompt(`Qual o tipo do jogo?`);
		if (dataToAppend.author === null) {
			return;
		}

		dataToAppend.rate = parseFloat(
			prompt("Qual sua nota para o Jogo? Isso não é obrigatorio.", 0.0)
		);
		if (dataToAppend.rate === null) {
			dataToAppend.rate = 0.1;
		}

		dataToAppend.tumb = prompt(
			"Se quiser pode inserir o link de uma imagem... Isso não é obrigatorio.",
			"https://via.placeholder.com/230x200"
		);
		if (dataToAppend.rate === null) {
			dataToAppend.tumb = "https://via.placeholder.com/230x200";
		}

		dataToAppend.description = prompt(
			"Você tambem pode adicionar uma descrição... Isso não é obrigatorio."
		);
		dataToAppend.company = prompt(
			`Qual o nome da Editora do livro? Isso não é obrigatorio.`
		);
	}

	let storedData = JSON.parse(localStorage.getItem("data")) || [];

	console.log(storedData);

	if (type === "book") {
		storedData.books.push(dataToAppend);
	}
	if (type === "game") {
		storedData.games.push(dataToAppend);
	}
	if (type === "movie") {
		storedData.movies.push(dataToAppend);
	}

	localStorage.setItem("data", JSON.stringify(storedData));
	renderGrid("all");
	sidebarContent("close");
	dndReload();
}

// Função que procura e remove dos dados um item.
// Esta funcionando.
// O parametro para deletear um item é o "name" dele.
function deleteData(event) {
	let dta = JSON.parse(localStorage.getItem("data"));

	let books = dta["books"];
	let games = dta["games"];
	let movies = dta["movies"];

	for (let i in dta) {
		let obj = dta[i];
		for (let k in obj) {
			try {
				if (obj[k].name == event) {
					delete obj[k];
					dta[i] = obj;
				}
			} catch (error) {
				continue;
			}
		}
	}

	localStorage.setItem("data", JSON.stringify(dta));
	renderGrid("all");
	dndReload();
}

// Função que edita dados de um item
// Ainda não funciona ;-;
function updateData(){

    let dta = JSON.parse(localStorage.getItem("data"));

	let books = dta["books"];
	let games = dta["games"];
	let movies = dta["movies"];

	for (let i in dta) {
		let obj = dta[i];
		for (let k in obj) {
			try {
				if (obj[k].name == event) {
					console.log("to aqui")                    
				}
			} catch (error) {
				continue;
			}
		}
    }
    
    localStorage.setItem("data", JSON.stringify(dta));
	renderGrid("all");
	dndReload();
}


// Esta função remove todos os dados antigos e utiliza o template como novo.
// Ja esta funcionando
function resetData(){
	let authorization = confirm("Realmente deseja resetar os seus Dados?");

	if (authorization){
		localStorage.setItem("data", JSON.stringify(defaultData));
	}

	renderGrid("all");
	sidebarContent("close");
	dndReload();
}
