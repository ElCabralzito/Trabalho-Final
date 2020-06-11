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
			<div class="card book" draggable="true">
			<img
				src="${data.tumb}"
				alt="${data.name}"
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
			</div>
		</div>
			`
			);
			Cards.appendChild(element);
		});

		dndReload()
	}
}
