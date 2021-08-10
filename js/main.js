(() => {
//identify the nodes of interest in the DOM
const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropContainer = document.querySelector(".puzzle-board"),
			dragImages = document.querySelectorAll(".puzzle-image"),
			dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
function swapImages() {
	dropContainer.style.backroundImage = `url(images/dd/backGround${this.dataset.imageref}.jpg)`;
}

	function startDrag(event) {
		console.log('dragging' + this.id);
//save a reference to the element the user is dragging
//so that we can retrieve the element later and put it in a drop zone
		event.dataTransfer.setData ("dragTarget", this.id); //MDN drag and drop reference
		//debugger;
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragging over drop zone elements');
	}

	function dropped(event) {
		// allow a drop to happen
		event.preventDefault();

		//if we already dropped and appended into a drop zone, then it should't happen again
		//the return statement is a code-killer - nothing will execute past this line/statement
		if (this.children.length > 0) {return;}
		// get the reference to the dragged image - saved in the drag function using setData
		let targetImage = document.querySelector(`#${event.dataTransfer.getData ("dragTarget")}`);
		// add it to the zone we dropped the image on
		this.appendChild(targetImage);

		//debugger;
	}

	// event handling at the bottom
dragImages.forEach(piece => piece.addEventListener('dragstart', startDrag));


dropZones.forEach(zone => {
	zone.addEventListener('drop',dropped);
	zone.addEventListener('dragover',draggedOver);
});

puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
})();
