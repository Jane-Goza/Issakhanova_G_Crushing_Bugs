// wrap everything in an IIFE / module
// a module is a JavaScript 'pattern' - a programming convention
// this keeps your code private - kinda like a 'black box' - which is a best prac

(() => {
	//identify the nodes of interest in the DOM
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function swapImages() {
				//swap out the draggable thumbnail dragImages
				// update the background image of the drop zone dropContainer
				// 1. get the imageref attribute from the element we're clicking on

				//let imageIndex = this.dataset.imageref;
						//newImagePath = "images/backGround" + imageIndex;
						//newImagePath = `url(images/backGround${imageIndex}.jpg)`;

						//2. set the background image of the dropcontainer
						dropContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
						topLeft.style.backgroundImage = `url(images/topLeft${this.dataset.imageref}.jpg)`;
						bottomLeft.style.backgroundImage = `url(images/bottomLeft${this.dataset.imageref}.jpg)`;
						topRight.style.backgroundImage = `url(images/topRight${this.dataset.imageref}.jpg)`;
						bottomRight.style.backgroundImage = `url(images/bottomRight${this.dataset.imageref}.jpg)`;
						//debugger;
}

	function startDrag(event) {
				console.log('dragging' + this.id);

				//save a reference to the element the user is dragging
				//so that we can retrieve the element later and put it in a drop zone
				event.dataTransfer.setData ("dragTarget", event.target.id); //MDN drag and drop reference
				debugger;
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
				if (this.children.length > 0) { return; }
				// get the reference to the dragged image - saved in the drag function using setData
				let targetImage = document.querySelector(`#${event.dataTransfer.getData("dragTarget")}`);
				// add it to the zone we dropped the image on
				this.appendChild(targetImage);
				debugger;



        var buttons = document.getElementsById('');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].drop = function() {
                dragImages.width = dragImages.naturalWidth * "100%";
                dragImages.height = dragImages.naturalHeight * "100%";}
}


	}

	// event handling at the bottom
dragImages.forEach(piece => piece.addEventListener('dragstart', startDrag));

dropZones.forEach(zone => {
	zone.addEventListener('drop',dropped);
	zone.addEventListener('dragover',draggedOver);
});

puzzleSelectors.forEach(button => button.addEventListener("click", swapImages));
})();
