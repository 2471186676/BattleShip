const shipPart = (x,y) => {
	let hit = false;
	let reveal = false;
	return { hit, reveal, x, y };
};


const ship = (size, direction, x, y) => {
	let body = [];
	for (let i = 0; i < size; i++) {
		body.push(shipPart(x[i],y[i]));
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


const gameBoard = (size, belong) => {
	let board = new Array(size);
	let ships = [];

	const createBoard = () => {
		for (var i = 0; i < board.length; i++) {
			board[i] = new Array(size);
		}

		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				board[x][y] = undefined;
			}
		}
	};

	const addShip = (size, direction, x, y) => {
		let newShip = ship(size, direction, x, y);
		ships.push(newShip);
	}

	return { board, belong, createBoard, size, addShip, ships};
};






export { gameBoard, ship };
