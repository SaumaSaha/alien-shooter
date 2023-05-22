const { readFromStdin } = require("./reader.js");
const { Shooter } = require("./shooter.js");

const ALIEN = "👾";
const BOOM = "💥";

const displayGrid = (grid) => {
	console.clear();
	console.log(grid.map((line) => line.join(" ")).join("\n")+"\n");
};

const display = (grid, shooter) => {
	displayGrid(grid);
	shooter.display();
};

const getTargetLoon = (y, x, grid) => {
	if (y === 0) return [0, x];
	if (grid[y][x] !== "  ") return [y, x];
	return getTargetLoon(y - 1, x, grid);
};

const boom = (y, x, grid, shooter) => {
	grid[y][x] = BOOM;
	display(grid, shooter);
	grid[y][x] = "  ";
	setTimeout(() => display(grid, shooter), 200);
};

const main = () => {
	const gridSize = +process.argv[2];
	const loons = new Array(gridSize).fill(" ");
	const shooter = new Shooter("🚀", gridSize);
	const grid = loons.map((row) => new Array(gridSize).fill(ALIEN));
	const y = gridSize - 1;

	const updateShooterPosition = (data) => {
		if (data === "a\n") shooter.moveLeft();
		if (data === "d\n") shooter.moveRight();
	};

	const popLoon = (data, intervalId) => {
		updateShooterPosition(data);
		const shooterPosition = shooter.position;
		const targetLoon = getTargetLoon(y, shooterPosition, grid);
		boom(...targetLoon, grid, shooter);
		if (!grid.flat().includes(ALIEN)) {
			clearInterval(intervalId);
		}
	};

	readFromStdin(popLoon);
};

main();
