const createBoard = (grid) => {
	let board = document.createElement("div");
	board.id = "board";

	for (let x = 0; x < grid.size; x++) {
		for (let y = 0; y < grid.size; y++) {
			let block = document.createElement("div");
			block.className = "block";
			block.id = x + "-" + y;

			board.appendChild(block);
		}
	}

    document.body.appendChild(board);
};

export {createBoard};
