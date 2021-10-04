const gameBoard = (size, belong) => {
	let board = new Array(size);

	const create = () => {
		for (var i = 0; i < board.length; i++) {
			board[i] = new Array(size);
		}

		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				board[x][y] = undefined;
			}
		}
	};

	return { board, belong, create, size };
};

const shipPart = () => {
	let hit = false;
	let reveal = false;
	return { hit, reveal };
};

const ship = (size, direction, x, y) => {
	let body = [];
	for (let i = 0; i < size; i++) {
		body.push(shipPart());
	}

	const getHit = (loc) => {
		body[loc].hit = true;
	};

	const getHealth = () => {
		let health = 0;
		body.forEach((body) => {
			if (body.hit == false) health++;
		});
		return health;
	};

	return { body, direction, getHealth, getHit, x, y };
};

const updateBoard = (gameBoard, ship) =>{
	let x = ship.x;
	let y = ship.y
	let direction = ship.direction;
	let body = ship.body;

	switch(direction){
		case "row":
			for(let i = 0; i < body.length; i++){
				gameBoard.board[x-i][y] = body.length;
			}
			break;
		case "column":
			for(let i = 0; i < body.length; i++){
				gameBoard.board[x][y-1] = body.length;
			}
			break;
	}
}

export { gameBoard, ship, updateBoard };
