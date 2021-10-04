import { gameBoard, ship } from "./factoryConstruct";


const createButton = () =>{
	//create input
}

const createBoard = (grid) => {
	let board = document.createElement("div");
	board.id = "board";

	for (let x = 0; x < grid.size; x++) {
		for (let y = 0; y < grid.size; y++) {
			let block = document.createElement("div");

			block.className = "block";
			block.id = x + "-" + y;
			block.ondrop = function (event) {
				event.preventDefault();
				let target = event.target;
				
				let size = document.querySelector("input[name='type']:checked");
				let direction = document.getElementById("dir").checked ? "row" : "column";
				let location = target.id.split("-");
				let x = location[0];
				let y = location[1];

				let curShip = ship(size, direction, x, y);
				console.log(curShip);
			};

			block.ondragover = function (event) {
				event.preventDefault();
			};

			board.appendChild(block);
		}
	}

	return board;
};

const createDragableShip = (size, direction) => {
	let ship = document.getElementById("dragShip");

	//create div to store ship
	if (ship == null) {
		//create dragShip
		ship = document.createElement("div");
		ship.id = "dragShip";
		ship.draggable = true;
		ship.ondragstart = function (event) {
			event.dataTransfer.setData("Text", event.target.id);
		};
		ship.style.display = "flex";
	} else {
		ship.innerHTML = "";
	}

	ship.style.flexDirection = direction;
	for (let i = 0; i < size; i++) {
		let block = document.createElement("div");
		block.className = "block";
		ship.appendChild(block);
	}

	return ship;
};




export { createBoard, createDragableShip, addShip };
