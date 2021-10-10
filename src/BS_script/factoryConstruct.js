const shipPart = (x, y) => {
	let hit = false;
	let reveal = false;
	x = Number(x);
	y = Number(y);

	let asString = Number(x) + "-" + Number(y);
	return { hit, reveal, x, y, asString };
};

const ship = (size, direction, x, y) => {
	let body = [];
	for (let i = 0; i < size; i++) {
		body.push(shipPart(x[i], y[i], ship));
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

	for (var i = 0; i < board.length; i++) {
		board[i] = new Array(size);
	}

	const resetBoard = () => {
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				board[x][y] = undefined;
			}
		}
	};

	const addShip = (size, direction, x, y) => {
		// x & y is an array and length == size
		let isEmpty = true;
		for (let i = 0; i < size; i++) {
			if (board[x[i]][y[i]] != undefined) {
				isEmpty = false;
				i = size + 2;
			}
		}
		if (isEmpty) {
			let newShip = ship(size, direction, x, y);
			ships.push(newShip);
		} else {
			alert("not Empty");
		}

		resetBoard();
		updateBoard();
	};

	const updateBoard = () => {
		ships.forEach((ship) => {
			ship.body.forEach((part) => {
				// console.log(ship);
				let x = part.x;
				let y = part.y;
				board[x][y] = part;
			});
		});
	};

	const removeShip = (location) => {
		// sort through every ships part location
		for (let curShip = 0; curShip < ships.length; curShip++) {
			ships[curShip].body.forEach((part) => {
				if (part.asString == location) {
					ships.splice(curShip, 1);
				}
			});
		}

		resetBoard();
		updateBoard();
	};

	return { board, belong, size, addShip, resetBoard, removeShip };
};

export { gameBoard, ship };
