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
			prompt(`Qual o ano de publicação desse jogo?`)
		);
		if (dataToAppend.year === null) {
			return;
		}

		dataToAppend.author = prompt(`Qual o nome do Diretor do jogo?`);
		if (dataToAppend.author === null) {
			return;
		}

		dataToAppend.rate = parseFloat(
			prompt("Qual sua nota para o Jogo? (defina 0 caso não tenha Jogado)", 0.0)
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
			`Qual o nome da compania do Jogo? Isso não é obrigatorio.`
		);
	}

	// If identifica o tipo de item que deseja dicionar, ele é um parametro da função
	if (type === "movie") {
		dataToAppend.name = prompt(
			`Qual o nome do Filme que você quer adicionar? Isso é obrigatorio.`
		);
		if (dataToAppend.name === null || dataToAppend.name === "") {
			return;
		}

		dataToAppend.year = parseInt(
			prompt(`Qual o ano de publicação desse filme?`)
		);
		if (dataToAppend.year === null) {
			return;
		}

		dataToAppend.author = prompt(`Qual o nome do Autor do Filme?`);
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
			`Qual o nome da Editora do Filme? Isso não é obrigatorio.`
		);
	}

	let storedData = JSON.parse(localStorage.getItem("data")) || [];

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
function updateData(event) {
	let dta = JSON.parse(localStorage.getItem("data"));

	for (let i in dta) {
		let obj = dta[i];

		for (let k in obj) {
			try {
				let name = obj[k].name;
				if (name == event) {
					let cd = obj[k];

					console.log(dta[i][k]);
					// If identifica o tipo de item que deseja dicionar, ele é um parametro da função
					if (i === "books") {
						cd.name = prompt(
							`Qual o nome do Livro que você quer adicionar? Isso é obrigatorio.`,
							cd.name
						);

						if (cd.name === null) {
							return;
						}

						cd.year = parseInt(
							prompt(`Qual o ano de publicação desse livro?`, cd.year)
						);
						if (cd.year === null) {
							return;
						}

						cd.author = prompt(`Qual o nome do Autor do livro?`, cd.author);
						if (cd.author === null) {
							return;
						}

						cd.rate = parseFloat(
							prompt(
								"Qual sua nota para o filme? Isso não é obrigatorio.",
								cd.rate
							)
						);
						if (cd.rate === null) {
							cd.rate = 0.0;
						}

						cd.tumb = prompt(
							"Se quiser pode inserir o link de uma imagem... Isso não é obrigatorio.",
							cd.tumb
						);
						if (cd.rate === null) {
							cd.tumb = "https://via.placeholder.com/230x200";
						}

						cd.description = prompt(
							"Você tambem pode adicionar uma descrição... Isso não é obrigatorio.",
							cd.description
						);
						cd.company = prompt(
							`Qual o nome da Editora do livro? Isso não é obrigatorio.`,
							cd.company
						);
					}

					// If identifica o tipo de item que deseja dicionar, ele é um parametro da função
					if (i === "games") {
						cd.name = prompt(
							`Qual o nome do Jogo que você quer adicionar? Isso é obrigatorio.`,
							cd.name
						);

						if (cd.name === null) {
							return;
						}

						cd.year = parseInt(
							prompt(`Qual o ano de publicação desse jogo?`, cd.year)
						);
						if (cd.year === null) {
							return;
						}

						cd.author = prompt(`Qual o nome do Diretor do Jogo?`, cd.author);
						if (cd.author === null) {
							return;
						}

						cd.rate = parseFloat(
							prompt(
								"Qual sua nota para o filme?",
								cd.rate
							)
						);
						if (cd.rate === null) {
							cd.rate = 0.0;
						}

						cd.tumb = prompt(
							"Se quiser pode inserir o link de uma imagem...",
							cd.tumb
						);
						if (cd.rate === null) {
							cd.tumb = "https://via.placeholder.com/230x200";
						}

						cd.description = prompt(
							"Você tambem pode adicionar uma descrição...",
							cd.description
						);
						cd.company = prompt(
							`Qual o nome da Compania do jogo?`,
							cd.company
						);
					} // If identifica o tipo de item que deseja dicionar, ele é um parametro da função
					if (i === "movies") {
						cd.name = prompt(
							`Qual o nome do Filme que você quer adicionar? Isso é obrigatorio.`,
							cd.name
						);

						if (cd.name === null) {
							return;
						}

						cd.year = parseInt(
							prompt(`Qual o ano de publicação desse filme?`, cd.year)
						);
						if (cd.year === null) {
							return;
						}

						cd.author = prompt(`Qual o nome dodiretor do filme?`, cd.author);
						if (cd.author === null) {
							return;
						}

						cd.rate = parseFloat(
							prompt(
								"Qual sua nota para o filme? Isso não é obrigatorio.",
								cd.rate
							)
						);
						if (cd.rate === null) {
							cd.rate = 0.0;
						}

						cd.tumb = prompt(
							"Se quiser pode inserir o link de uma imagem... Isso não é obrigatorio.",
							cd.tumb
						);
						if (cd.rate === null) {
							cd.tumb = "https://via.placeholder.com/230x200";
						}

						cd.description = prompt(
							"Você tambem pode adicionar uma descrição... Isso não é obrigatorio.",
							cd.description
						);
						cd.company = prompt(
							`Qual o nome da compania do filme? Isso não é obrigatorio.`,
							cd.company
						);
					}

					dta[i][k] = cd;
				}
			} catch {}
		}
	}

	localStorage.setItem("data", JSON.stringify(dta));
	renderGrid("all");
	dndReload();
}

// Esta função remove todos os dados antigos e utiliza o template como novo.
// Ja esta funcionando
function resetData() {
	let authorization = confirm("Realmente deseja resetar os seus Dados?");

	if (authorization) {
		localStorage.setItem("data", JSON.stringify(defaultData));
	}

	renderGrid("all");
	sidebarContent("close");
	dndReload();
}

// Função usada para renderizar os componentes na pagina
// Ele tem 4 possiveis parametros, eles são usados para criar um filtro a rederizar os itens na pagina
// Params: "books", "games", "movies" ou "all"
// Ela é chamada pelos botões do Sidebar
function renderGrid(param) {
	// get local data storage
	let data = JSON.parse(localStorage.getItem("data"));
	let Cards = document.querySelector(".cards");

	let toRender = [];

	switch (param) {
		case "all":
			toRender.push(data.books);
			toRender.push(data.games);
			toRender.push(data.movies);
			break;
		case "books":
			toRender.push(data.books);
			break;
		case "games":
			toRender.push(data.games);
			break;
		case "movies":
			toRender.push(data.movies);
			break;
		default:
			return;
	}

	// To clear old cards
	Cards.innerHTML = "";

	// This for chage page title
	document.querySelector(".mainTitle").innerHTML = param
		? param.toUpperCase()
		: "ALL";

	// this for render components
	for (let i = 0; i < toRender.length; i++) {
		let index = toRender[i];

		index.map((data) => {
			var element = document.createElement("div");
			if (data === null) return;
			element.insertAdjacentHTML(
				"beforeend",
				`
			<div class="${
				data.visto === true ? "card book visto" : "card book"
			}" onClick="updateData('${data.name}')" draggable="true">
			<img
				src="${data.tumb}"
				alt="${data.name}"
				onClick="updateData('${data.name}')"
			/>
			<h2>${data.name}</h2>
			<span class="author">${data.author}</span>
			<span class="year">${data.year}</span>
	
			<span class="company">${data.company}</span>
	
			<span class="description">
			${data.description}
			</span>
	
			<div class="rate">
				${
					data.rate > 0
						? '<span class="fa fa-star checked"></span>'
						: '<span class="fa fa-star"></span>'
				}
				${
					data.rate > 1
						? '<span class="fa fa-star checked"></span>'
						: '<span class="fa fa-star"></span>'
				}${
					data.rate > 2
						? '<span class="fa fa-star checked"></span>'
						: '<span class="fa fa-star"></span>'
				}${
					data.rate > 3
						? '<span class="fa fa-star checked"></span>'
						: '<span class="fa fa-star"></span>'
				}${
					data.rate > 4
						? '<span class="fa fa-star checked"></span>'
						: '<span class="fa fa-star"></span>'
				}
				${data.rate == 0 ? "<span>→ Ainda não foi visto</span>" : ""}
			</div>
		</div>
			`
			);
			Cards.appendChild(element);
		});

		dndReload();
	}
}

function goToAbout() {
	window.location.href = "about.html";
}
