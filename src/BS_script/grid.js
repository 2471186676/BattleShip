import { gameBoard, ship, updateBoard } from "./factoryConstruct";

const createButton = () => {
	//create input
};

let board1 = undefined;
const createGameBoard = () => {
	board1 = gameBoard(10, "as");
	const gameBoard1 = document.getElementById("gameBoard1");
	gameBoard1.appendChild(createBoard(board1));
};

const createBoard = (grid) => {
	let board = document.createElement("div");
	board.id = "board";

	for (let x = 0; x < grid.size; x++) {
		for (let y = 0; y < grid.size; y++) {
			let block = document.createElement("div");

			block.className = "block";
			block.id = x + "-" + y;
			block.addEventListener("mouseover", async function (event) {
				addGhostShip(event.target);
			});

			board.appendChild(block);
		}
	}

	return board;
};

const addGhostShip = (block) => {
	const getSize = document.querySelector('input[name="type"]:checked').value
	const getDir = document.getElementById("dir").checked;
	const getLoc = block.id.split("-");
	let x = Number(getLoc[0]);
	let y = Number(getLoc[1]);

	if(getDir){
		x = inAdditional(x, getSize);
		y = inConsistance(y, getSize);
	} else {
		x = inConsistance(x, getSize);
		y = inAdditional(y, getSize);
	}

	// console.log(x + "-" + y);

	for (let i = 0; i < getSize; i++) {
		let getBlock = document.getElementById(x[i] + "-" + y[i]);

		if (getBlock != null) {
			getBlock.style.opacity = 0.8;
			removeGhostShip(getBlock, getSize, x, y);
		}
	}
};

const removeGhostShip = (getBlock, getSize, x, y) => {
	getBlock.addEventListener("mouseout", function (event) {
		for (let i = 0; i < getSize; i++) {
			let removeColour = document.getElementById(x[i] + "-" + y[i]);
			if (removeColour != null) {
				removeColour.style.opacity = 1;
			}
		}
	});
};

const createDragableShip = (size, direction) => {
	let ship = document.getElementById("dragShip");

	//create div to store ship
	if (ship == null) {
		//create dragShip
		ship = document.createElement("div");
		ship.id = "dragShip";
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

export { createBoard, createDragableShip, createGameBoard };


const inAdditional = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) { array.push(num + i); }
	return array;
};
const inConsistance = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) { array.push(num); }
	return array;
};

