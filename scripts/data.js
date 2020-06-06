/**=========================
 *  Side data estructure
 ==========================*/

const defaultData = {
	books: [
		{
			name: "Dom Quixote",
			year: 1912,
			author: "Miguel de Cervantes",
			company: "Penguin",
			rate: 4.5,
			tumb: "https://m.media-amazon.com/images/I/51XULadddlL.jpg",
			description:
				"The Ingenious Gentleman Don Quixote of La Mancha, or just Don Quixote, is a Spanish novel by Miguel de Cervantes. Published in two parts, in 1605 and 1615, Don Quixote is the most influential work of literature from the Spanish Golden Age and the entire Spanish literary canon.",
		},
	],
	movies: [
		{
			name: "Um Sonho de Liberdade",
			year: 1994,
			director: "Frank Darabont",
			stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
			rate: 4.5,
			tumb:
				"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
		},
	],
	games: [
		{
			name: "Overwatch",
			type: "Arcade game",
			year: 2015,
			director: "Frank Darabont",
			developers: "Blizzard Entertainment",
			tags: ["Multiplayer", "FPS", "Arcade"],
			rate: 4.5,
			tumb: "https://i.ytimg.com/vi/o2iDO-a8JIw/maxresdefault.jpg",
		},
	],
};

function addData(type) {
	let dataToAppend = {};

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
