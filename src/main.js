import { createBoard, createDragableShip, addShip , createGameBoard} from "./BS_script/grid";
import { gameBoard, ship } from "./BS_script/factoryConstruct";

createGameBoard();

const block = () => {
	const blocks = document.getElementsByClassName("block");

	for (let i = 0; i < blocks.length; i++) {
		blocks[i].addEventListener("click", (event) => {
			console.log(event);
		});
	}
};

const DragableShip = () => {
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
			location.appendChild(createDragableShip(unit.value, "column"));
		} else {
			location.appendChild(createDragableShip(unit.value, "row"));
		}
	};
};

DragableShip();

block();
