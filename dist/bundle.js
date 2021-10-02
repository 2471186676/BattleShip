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
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
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

	return { body, direction, getHealth, getHit, x , y };
};





/***/ }),

/***/ "./src/BS_script/grid.js":
/*!*******************************!*\
  !*** ./src/BS_script/grid.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTs7QUFFQSxrQkFBa0IsVUFBVTtBQUM1QixtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLFVBQVU7QUFDVjs7O0FBR21COzs7Ozs7Ozs7Ozs7Ozs7QUM5Q25CO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZUFBZTtBQUNoQyxrQkFBa0IsZUFBZTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRXFCOzs7Ozs7O1VDZnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9CU19zY3JpcHQvZmFjdG9yeUNvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0JTX3NjcmlwdC9ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2FtZUJvYXJkID0gKHNpemUsIGJlbG9uZykgPT4ge1xuXHRsZXQgYm9hcmQgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cblx0Y29uc3QgY3JlYXRlID0gKCkgPT4ge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGJvYXJkW2ldID0gbmV3IEFycmF5KHNpemUpO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCsrKSB7XG5cdFx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IHNpemU7IHkrKykge1xuXHRcdFx0XHRib2FyZFt4XVt5XSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHsgYm9hcmQsIGJlbG9uZywgY3JlYXRlLCBzaXplIH07XG59O1xuXG5jb25zdCBzaGlwUGFydCA9ICgpID0+IHtcblx0bGV0IGhpdCA9IGZhbHNlO1xuXHRsZXQgcmV2ZWFsID0gZmFsc2U7XG5cdHJldHVybiB7IGhpdCwgcmV2ZWFsIH07XG59O1xuXG5jb25zdCBzaGlwID0gKHNpemUsIGRpcmVjdGlvbiwgeCwgeSkgPT4ge1xuXHRsZXQgYm9keSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuXHRcdGJvZHkucHVzaChzaGlwUGFydCgpKTtcblx0fVxuXG5cdGNvbnN0IGdldEhpdCA9IChsb2MpID0+IHtcblx0XHRib2R5W2xvY10uaGl0ID0gdHJ1ZTtcblx0fTtcblxuXHRjb25zdCBnZXRIZWFsdGggPSAoKSA9PiB7XG5cdFx0bGV0IGhlYWx0aCA9IDA7XG5cdFx0Ym9keS5mb3JFYWNoKChib2R5KSA9PiB7XG5cdFx0XHRpZiAoYm9keS5oaXQgPT0gZmFsc2UpIGhlYWx0aCsrO1xuXHRcdH0pO1xuXHRcdHJldHVybiBoZWFsdGg7XG5cdH07XG5cblx0cmV0dXJuIHsgYm9keSwgZGlyZWN0aW9uLCBnZXRIZWFsdGgsIGdldEhpdCwgeCAsIHkgfTtcbn07XG5cblxuZXhwb3J0IHtnYW1lQm9hcmR9O1xuIiwiY29uc3QgY3JlYXRlQm9hcmQgPSAoZ3JpZCkgPT4ge1xuXHRsZXQgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRib2FyZC5pZCA9IFwiYm9hcmRcIjtcblxuXHRmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWQuc2l6ZTsgeCsrKSB7XG5cdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCBncmlkLnNpemU7IHkrKykge1xuXHRcdFx0bGV0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGJsb2NrLmNsYXNzTmFtZSA9IFwiYmxvY2tcIjtcblx0XHRcdGJsb2NrLmlkID0geCArIFwiLVwiICsgeTtcblxuXHRcdFx0Ym9hcmQuYXBwZW5kQ2hpbGQoYmxvY2spO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtjcmVhdGVCb2FyZH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUJvYXJkIH0gZnJvbSBcIi4vQlNfc2NyaXB0L2dyaWRcIjtcbmltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gXCIuL0JTX3NjcmlwdC9mYWN0b3J5Q29uc3RydWN0XCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9