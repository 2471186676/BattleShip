/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BS_script/factoryConstruct.js":
/*!*******************************************!*\
  !*** ./src/BS_script/factoryConstruct.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard),
/* harmony export */   "ship": () => (/* binding */ ship),
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard)
/* harmony export */ });
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




/***/ }),

/***/ "./src/BS_script/grid.js":
/*!*******************************!*\
  !*** ./src/BS_script/grid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "createSampleShip": () => (/* binding */ createSampleShip),
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard)
/* harmony export */ });
/* harmony import */ var _factoryConstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factoryConstruct */ "./src/BS_script/factoryConstruct.js");


let info = {
	size: 0,
	dir: "",
	loc: "1-2",
	x: 1,
	y: 2,
};

const createButton = () => {
	//create input
};

let board1 = undefined;
const createGameBoard = () => {
	board1 = (0,_factoryConstruct__WEBPACK_IMPORTED_MODULE_0__.gameBoard)(10, "as");
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

			block.addEventListener("click", async function (event) {
				addRealShip(event.target);
			});

			board.appendChild(block);
		}
	}

	return board;
};

const addRealShip = (TargetBlock) => {
	updateInfo(TargetBlock);
	let x = info.x
	let y = info.y

	// return selected block in array
	if (getDir) {
		x = inAdditional(x, info.size); // 1,2,3,4,5
		y = inConsistance(y, info.size); // 3,3,3,3,3
	} else {
		x = inConsistance(x, info.size);
		y = inAdditional(y, info.size);
	}
};

const addGhostShip = (block) => {
	// get info needed
	undateInfo(block);
	let x = info.x
	let y = info.y
	
	// return selected block in array
	if (info.dir) {
		x = inAdditional(x, info.size); // 1,2,3,4,5
		y = inConsistance(y, info.size); // 3,3,3,3,3
	} else {
		x = inConsistance(x, info.size);
		y = inAdditional(y, info.size);
	}

	// create ghost
	for (let i = 0; i < info.size; i++) {
		let getBlock = document.getElementById(x[i] + "-" + y[i]);
		if (getBlock != null) {
			getBlock.style.opacity = 0.8;
			// add event to remove ghost
			removeGhostShip(getBlock, info.size, x, y);
		}
	}
};

const removeGhostShip = (getBlock, size, x, y) => {
	getBlock.addEventListener("mouseout", function (event) {
		for (let i = 0; i < size; i++) {
			let removeColour = document.getElementById(x[i] + "-" + y[i]);
			if (removeColour != null) {
				removeColour.style.opacity = 1;
			}
		}
	});
};

const createSampleShip = (size, direction) => {
	let ship = document.getElementById("dragShip");

	//create div to store ship
	if (ship == null) {
		//create dragShip
		ship = document.createElement("div");
		ship.id = "dragShip";
	} else {
		ship.innerHTML = "";
	}

	ship.style.display = "flex";
	ship.style.flexDirection = direction;
	for (let i = 0; i < size; i++) {
		let block = document.createElement("div");
		block.className = "block";
		ship.appendChild(block);
	}

	return ship;
};



const inAdditional = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) {
		array.push(num + i);
	}
	return array;
};
const inConsistance = (num, size) => {
	let array = [];
	for (let i = 0; i < size; i++) {
		array.push(num);
	}
	return array;
};
const undateInfo = (target) => {
	info.size = document.querySelector('input[name="type"]:checked').value;
	info.dir = document.getElementById("dir").checked;
	info.loc = target.id.split("-");
	info.x = Number(info.loc[0]);
	info.y = Number(info.loc[1]);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BS_script_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BS_script/grid */ "./src/BS_script/grid.js");
/* harmony import */ var _BS_script_factoryConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BS_script/factoryConstruct */ "./src/BS_script/factoryConstruct.js");



(0,_BS_script_grid__WEBPACK_IMPORTED_MODULE_0__.createGameBoard)();

const sampleShip = () => {
	const location = document.getElementById("header");
	const getSize = document.querySelectorAll('input[name="type"]');
	const getDir = document.getElementById("dir");

	getSize.forEach((element) => {
		element.addEventListener("change", () => {
			change();
		});
	});

	getDir.addEventListener("change", () => {
		change();
	});


	const change = () => {
		let unit = document.querySelector("input[name='type']:checked");
		let direction = document.getElementById("dir").checked;

		if (direction) {
			location.appendChild((0,_BS_script_grid__WEBPACK_IMPORTED_MODULE_0__.createSampleShip)(unit.value, "column"));
		} else {
			location.appendChild((0,_BS_script_grid__WEBPACK_IMPORTED_MODULE_0__.createSampleShip)(unit.value, "row"));
		}
	};
};

sampleShip();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBOztBQUVBLGtCQUFrQixVQUFVO0FBQzVCLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRTBCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsNERBQVM7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTtBQUNoQyxrQkFBa0IsZUFBZTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUUwRDs7QUFFMUQ7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMvSUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkY7QUFDNUI7O0FBRS9ELGdFQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsaUVBQWdCO0FBQ3hDLElBQUk7QUFDSix3QkFBd0IsaUVBQWdCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvQlNfc2NyaXB0L2ZhY3RvcnlDb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9CU19zY3JpcHQvZ3JpZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdhbWVCb2FyZCA9IChzaXplLCBiZWxvbmcpID0+IHtcblx0bGV0IGJvYXJkID0gbmV3IEFycmF5KHNpemUpO1xuXG5cdGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRib2FyZFtpXSA9IG5ldyBBcnJheShzaXplKTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHNpemU7IHgrKykge1xuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcblx0XHRcdFx0Ym9hcmRbeF1beV0gPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7IGJvYXJkLCBiZWxvbmcsIGNyZWF0ZSwgc2l6ZSB9O1xufTtcblxuY29uc3Qgc2hpcFBhcnQgPSAoKSA9PiB7XG5cdGxldCBoaXQgPSBmYWxzZTtcblx0bGV0IHJldmVhbCA9IGZhbHNlO1xuXHRyZXR1cm4geyBoaXQsIHJldmVhbCB9O1xufTtcblxuY29uc3Qgc2hpcCA9IChzaXplLCBkaXJlY3Rpb24sIHgsIHkpID0+IHtcblx0bGV0IGJvZHkgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblx0XHRib2R5LnB1c2goc2hpcFBhcnQoKSk7XG5cdH1cblxuXHRjb25zdCBnZXRIaXQgPSAobG9jKSA9PiB7XG5cdFx0Ym9keVtsb2NdLmhpdCA9IHRydWU7XG5cdH07XG5cblx0Y29uc3QgZ2V0SGVhbHRoID0gKCkgPT4ge1xuXHRcdGxldCBoZWFsdGggPSAwO1xuXHRcdGJvZHkuZm9yRWFjaCgoYm9keSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkuaGl0ID09IGZhbHNlKSBoZWFsdGgrKztcblx0XHR9KTtcblx0XHRyZXR1cm4gaGVhbHRoO1xuXHR9O1xuXG5cdHJldHVybiB7IGJvZHksIGRpcmVjdGlvbiwgZ2V0SGVhbHRoLCBnZXRIaXQsIHgsIHkgfTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGdhbWVCb2FyZCwgc2hpcCkgPT57XG5cdGxldCB4ID0gc2hpcC54O1xuXHRsZXQgeSA9IHNoaXAueVxuXHRsZXQgZGlyZWN0aW9uID0gc2hpcC5kaXJlY3Rpb247XG5cdGxldCBib2R5ID0gc2hpcC5ib2R5O1xuXG5cdHN3aXRjaChkaXJlY3Rpb24pe1xuXHRcdGNhc2UgXCJyb3dcIjpcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Z2FtZUJvYXJkLmJvYXJkW3gtaV1beV0gPSBib2R5Lmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgXCJjb2x1bW5cIjpcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBib2R5Lmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0Z2FtZUJvYXJkLmJvYXJkW3hdW3ktMV0gPSBib2R5Lmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHR9XG59XG5cbmV4cG9ydCB7IGdhbWVCb2FyZCwgc2hpcCwgdXBkYXRlQm9hcmQgfTtcbiIsImltcG9ydCB7IGdhbWVCb2FyZCwgc2hpcCwgdXBkYXRlQm9hcmQgfSBmcm9tIFwiLi9mYWN0b3J5Q29uc3RydWN0XCI7XG5cbmxldCBpbmZvID0ge1xuXHRzaXplOiAwLFxuXHRkaXI6IFwiXCIsXG5cdGxvYzogXCIxLTJcIixcblx0eDogMSxcblx0eTogMixcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICgpID0+IHtcblx0Ly9jcmVhdGUgaW5wdXRcbn07XG5cbmxldCBib2FyZDEgPSB1bmRlZmluZWQ7XG5jb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoKSA9PiB7XG5cdGJvYXJkMSA9IGdhbWVCb2FyZCgxMCwgXCJhc1wiKTtcblx0Y29uc3QgZ2FtZUJvYXJkMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUJvYXJkMVwiKTtcblx0Z2FtZUJvYXJkMS5hcHBlbmRDaGlsZChjcmVhdGVCb2FyZChib2FyZDEpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKGdyaWQpID0+IHtcblx0bGV0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Ym9hcmQuaWQgPSBcImJvYXJkXCI7XG5cblx0Zm9yIChsZXQgeCA9IDA7IHggPCBncmlkLnNpemU7IHgrKykge1xuXHRcdGZvciAobGV0IHkgPSAwOyB5IDwgZ3JpZC5zaXplOyB5KyspIHtcblx0XHRcdGxldCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0XHRcdGJsb2NrLmNsYXNzTmFtZSA9IFwiYmxvY2tcIjtcblx0XHRcdGJsb2NrLmlkID0geCArIFwiLVwiICsgeTtcblx0XHRcdGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGFkZEdob3N0U2hpcChldmVudC50YXJnZXQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0YWRkUmVhbFNoaXAoZXZlbnQudGFyZ2V0KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRib2FyZC5hcHBlbmRDaGlsZChibG9jayk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGJvYXJkO1xufTtcblxuY29uc3QgYWRkUmVhbFNoaXAgPSAoVGFyZ2V0QmxvY2spID0+IHtcblx0dXBkYXRlSW5mbyhUYXJnZXRCbG9jayk7XG5cdGxldCB4ID0gaW5mby54XG5cdGxldCB5ID0gaW5mby55XG5cblx0Ly8gcmV0dXJuIHNlbGVjdGVkIGJsb2NrIGluIGFycmF5XG5cdGlmIChnZXREaXIpIHtcblx0XHR4ID0gaW5BZGRpdGlvbmFsKHgsIGluZm8uc2l6ZSk7IC8vIDEsMiwzLDQsNVxuXHRcdHkgPSBpbkNvbnNpc3RhbmNlKHksIGluZm8uc2l6ZSk7IC8vIDMsMywzLDMsM1xuXHR9IGVsc2Uge1xuXHRcdHggPSBpbkNvbnNpc3RhbmNlKHgsIGluZm8uc2l6ZSk7XG5cdFx0eSA9IGluQWRkaXRpb25hbCh5LCBpbmZvLnNpemUpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRHaG9zdFNoaXAgPSAoYmxvY2spID0+IHtcblx0Ly8gZ2V0IGluZm8gbmVlZGVkXG5cdHVuZGF0ZUluZm8oYmxvY2spO1xuXHRsZXQgeCA9IGluZm8ueFxuXHRsZXQgeSA9IGluZm8ueVxuXHRcblx0Ly8gcmV0dXJuIHNlbGVjdGVkIGJsb2NrIGluIGFycmF5XG5cdGlmIChpbmZvLmRpcikge1xuXHRcdHggPSBpbkFkZGl0aW9uYWwoeCwgaW5mby5zaXplKTsgLy8gMSwyLDMsNCw1XG5cdFx0eSA9IGluQ29uc2lzdGFuY2UoeSwgaW5mby5zaXplKTsgLy8gMywzLDMsMywzXG5cdH0gZWxzZSB7XG5cdFx0eCA9IGluQ29uc2lzdGFuY2UoeCwgaW5mby5zaXplKTtcblx0XHR5ID0gaW5BZGRpdGlvbmFsKHksIGluZm8uc2l6ZSk7XG5cdH1cblxuXHQvLyBjcmVhdGUgZ2hvc3Rcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvLnNpemU7IGkrKykge1xuXHRcdGxldCBnZXRCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHhbaV0gKyBcIi1cIiArIHlbaV0pO1xuXHRcdGlmIChnZXRCbG9jayAhPSBudWxsKSB7XG5cdFx0XHRnZXRCbG9jay5zdHlsZS5vcGFjaXR5ID0gMC44O1xuXHRcdFx0Ly8gYWRkIGV2ZW50IHRvIHJlbW92ZSBnaG9zdFxuXHRcdFx0cmVtb3ZlR2hvc3RTaGlwKGdldEJsb2NrLCBpbmZvLnNpemUsIHgsIHkpO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgcmVtb3ZlR2hvc3RTaGlwID0gKGdldEJsb2NrLCBzaXplLCB4LCB5KSA9PiB7XG5cdGdldEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuXHRcdFx0bGV0IHJlbW92ZUNvbG91ciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHhbaV0gKyBcIi1cIiArIHlbaV0pO1xuXHRcdFx0aWYgKHJlbW92ZUNvbG91ciAhPSBudWxsKSB7XG5cdFx0XHRcdHJlbW92ZUNvbG91ci5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xufTtcblxuY29uc3QgY3JlYXRlU2FtcGxlU2hpcCA9IChzaXplLCBkaXJlY3Rpb24pID0+IHtcblx0bGV0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYWdTaGlwXCIpO1xuXG5cdC8vY3JlYXRlIGRpdiB0byBzdG9yZSBzaGlwXG5cdGlmIChzaGlwID09IG51bGwpIHtcblx0XHQvL2NyZWF0ZSBkcmFnU2hpcFxuXHRcdHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdHNoaXAuaWQgPSBcImRyYWdTaGlwXCI7XG5cdH0gZWxzZSB7XG5cdFx0c2hpcC5pbm5lckhUTUwgPSBcIlwiO1xuXHR9XG5cblx0c2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cdHNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblx0XHRsZXQgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGJsb2NrLmNsYXNzTmFtZSA9IFwiYmxvY2tcIjtcblx0XHRzaGlwLmFwcGVuZENoaWxkKGJsb2NrKTtcblx0fVxuXG5cdHJldHVybiBzaGlwO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQm9hcmQsIGNyZWF0ZVNhbXBsZVNoaXAsIGNyZWF0ZUdhbWVCb2FyZCB9O1xuXG5jb25zdCBpbkFkZGl0aW9uYWwgPSAobnVtLCBzaXplKSA9PiB7XG5cdGxldCBhcnJheSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuXHRcdGFycmF5LnB1c2gobnVtICsgaSk7XG5cdH1cblx0cmV0dXJuIGFycmF5O1xufTtcbmNvbnN0IGluQ29uc2lzdGFuY2UgPSAobnVtLCBzaXplKSA9PiB7XG5cdGxldCBhcnJheSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuXHRcdGFycmF5LnB1c2gobnVtKTtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59O1xuY29uc3QgdW5kYXRlSW5mbyA9ICh0YXJnZXQpID0+IHtcblx0aW5mby5zaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInR5cGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXHRpbmZvLmRpciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyXCIpLmNoZWNrZWQ7XG5cdGluZm8ubG9jID0gdGFyZ2V0LmlkLnNwbGl0KFwiLVwiKTtcblx0aW5mby54ID0gTnVtYmVyKGluZm8ubG9jWzBdKTtcblx0aW5mby55ID0gTnVtYmVyKGluZm8ubG9jWzFdKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUJvYXJkLCBjcmVhdGVTYW1wbGVTaGlwLCBhZGRTaGlwICwgY3JlYXRlR2FtZUJvYXJkfSBmcm9tIFwiLi9CU19zY3JpcHQvZ3JpZFwiO1xuaW1wb3J0IHsgZ2FtZUJvYXJkLCBzaGlwIH0gZnJvbSBcIi4vQlNfc2NyaXB0L2ZhY3RvcnlDb25zdHJ1Y3RcIjtcblxuY3JlYXRlR2FtZUJvYXJkKCk7XG5cbmNvbnN0IHNhbXBsZVNoaXAgPSAoKSA9PiB7XG5cdGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IGdldFNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwidHlwZVwiXScpO1xuXHRjb25zdCBnZXREaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpclwiKTtcblxuXHRnZXRTaXplLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRcdFx0Y2hhbmdlKCk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGdldERpci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblx0XHRjaGFuZ2UoKTtcblx0fSk7XG5cblxuXHRjb25zdCBjaGFuZ2UgPSAoKSA9PiB7XG5cdFx0bGV0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ndHlwZSddOmNoZWNrZWRcIik7XG5cdFx0bGV0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlyXCIpLmNoZWNrZWQ7XG5cblx0XHRpZiAoZGlyZWN0aW9uKSB7XG5cdFx0XHRsb2NhdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVTYW1wbGVTaGlwKHVuaXQudmFsdWUsIFwiY29sdW1uXCIpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYXRpb24uYXBwZW5kQ2hpbGQoY3JlYXRlU2FtcGxlU2hpcCh1bml0LnZhbHVlLCBcInJvd1wiKSk7XG5cdFx0fVxuXHR9O1xufTtcblxuc2FtcGxlU2hpcCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=