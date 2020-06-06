function main() {
	if (localStorage.getItem("data") === null) {
		localStorage.setItem("data", JSON.stringify(defaultData));
	}

	renderGrid("all");

	dndReload()
}

window.onload = main;
