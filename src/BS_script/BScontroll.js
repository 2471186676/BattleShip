import { gameBoard } from "./shipConstruct";

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
			let size = getSize();

			let locX = getDir()
				? inAdditional(x, size)
				: inConsistence(x, size);
			let locY = getDir()
				? inConsistence(y, size)
				: inAdditional(y, size);

			block.addEventListener("click", (event) => {
				if (getPlace()) {
					gameBoard.addShip(size, getDir, locX, locY);
				} else if (getRemove()) {
					let getLocation = event.target.id;
					gameBoard.removeShip(getLocation);
				} else if (getHit()) {
					let getLocation = event.target.id;
					gameBoard.hit(getLocation);
				}

				updateGameBoard(gameBoard);
			});

			block.addEventListener("mouseover", (event) => {
				if (getPlace()) {
					let parentBoard = document.getElementById(gameBoard.belong);

					for (let i = 0; i < locX.length; i++) {
						let target = parentBoard.querySelector(
							"[id='" + locX[i] + "-" + locY[i] + "']"
						);
						if (target != null) target.style.opacity = "0.5";
					}

					block.addEventListener("mouseleave", (event) => {
						for (let i = 0; i < locX.length; i++) {
							let target = parentBoard.querySelector(
								"[id='" + locX[i] + "-" + locY[i] + "']"
							);
							if (target != null) target.style.opacity = "1";
						}
					});
				}
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
				let target = gameBoard.board[x][y];
				if (target.reveal == true) {
					block.style.backgroundColor = "yellow";
				} else if (target.hit == true) {
					block.style.backgroundColor = "blue";
				} else {
					block.style.backgroundColor = "red";
				}
			} else {
				block.style.backgroundColor = "";
			}
		}
	}
};

const inAdditional = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) {
		array.push(Number(num) + i);
	}
	return array;
};

const inConsistence = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) {
		array.push(Number(num));
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
	return document.getElementById("action").value == "remove";
};

const getPlace = () => {
	return document.getElementById("action").value == "place";
};

const getHit = () => {
	return document.getElementById("action").value == "hit";
};

let gameBoard1 = gameBoard(10, "as");
let gameBoard2 = gameBoard(10, "ss");
document.body.appendChild(createPlayerBoard(gameBoard1));
document.body.appendChild(createPlayerBoard(gameBoard2));
