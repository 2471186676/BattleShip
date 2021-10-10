import { gameBoard, ship, board } from "./factoryConstruct";

const createPlayerBoard = (gameBoard) => {
	let board = document.createElement("div");
	board.className = "board";
	board.id = gameBoard.belong;
	let boardSize = gameBoard.size;

	for (let y = 0; y < boardSize; y++) {
		for (let x = 0; x < boardSize; x++) {
			let block = document.createElement("div");
			block.className = "block";
			block.id = x + "-" + y;

			block.addEventListener("click", (event) => {
				if (!getRemove()) {
					let shipSize = getSize();

					let locX = getDir() ? inAdditional(x, shipSize) : inConsistence(x, shipSize);
					let locY = getDir() ? inConsistence(y, shipSize) : inAdditional(y, shipSize);
				
					gameBoard.addShip(shipSize, getDir, locX, locY);
				}

				if (getRemove()) {
					let getLocation = event.target.id;

					gameBoard.removeShip(getLocation);
				}

				updateGameBoard(gameBoard);
			});

			board.appendChild(block);
		}
	}

	return board;
};

const updateGameBoard = (gameBoard) => {
	const boardUI = document.getElementById(gameBoard.belong);

	let boardSize = gameBoard.size;
	for (let x = 0; x < boardSize; x++) {
		for (let y = 0; y < boardSize; y++) {
			let block = boardUI.querySelector("[id='" + x + "-" + y + "']");
			if (gameBoard.board[x][y] != null) {
				block.style.backgroundColor = "red";
			} else {
				block.style.backgroundColor = "";
			}
		}
	}
};

const inAdditional = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) {
		array.push(Number(num + i));
	}
	return array;
};

const inConsistence = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) {
		array.push(num);
	}
	return array;
};

const getDir = () => {
	return document.getElementById("dir").checked;
};

const getSize = () => {
	return document.querySelector("input[name='type']:checked").value;
};

const getRemove = () => {
	return document.getElementById("remove").checked;
};

let gameBoard1 = gameBoard(10, "as");
let gameBoard2 = gameBoard(10, "ss");
document.body.appendChild(createPlayerBoard(gameBoard1));
document.body.appendChild(createPlayerBoard(gameBoard2));
