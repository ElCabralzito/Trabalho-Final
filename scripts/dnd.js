function dndReload() {
	const cards = document.querySelectorAll(".card");

	console.log(cards);

	const dropzones = document.querySelectorAll(".trash");

	cards.forEach((card) => {
		card.addEventListener("dragstart", dragstart);
		card.addEventListener("drag", drag);
		card.addEventListener("dragend", dragend);
	});

	// Add Dropzone efect on drag any itens
	function dragstart(params) {
		dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
		this.classList.add("is-dragging");
	}

	function drag(params) {}

	function dragend(params) {
		dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
		this.classList.remove("is-dragging");
	}

	dropzones.forEach((dropzone) => {
		dropzone.addEventListener("dragenter", dragenter);
		dropzone.addEventListener("dragover", dragover);
		dropzone.addEventListener("dragleave", dragleave);
		dropzone.addEventListener("drop", drop);
	});

	function dragenter(event) {
		this.classList.add("over");
	}

	function dragover(params) {
		event.preventDefault();
		cards.forEach((card) => {
			if (card.classList.contains("is-dragging")) {
				card.classList.add("dropable");
			}
		});
	}

	function dragleave(event) {
		this.classList.remove("over");

		cards.forEach((card) => card.classList.remove("dropable"));
	}

	function drop(params) {
		try {
			let drop = document.querySelector(".dropable > h2").innerHTML;
			deleteData(drop);
			cards.forEach((card) => card.classList.remove("dropable"));
			cards.forEach((card) => card.classList.remove("is-dragging"));
		} catch {
			return;
		}
	}

	return;
}
