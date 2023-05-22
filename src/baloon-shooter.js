const SHOOTER = "🚀";
const ALIEN = "👾";
const BOOM = "💥";

const displayShooter = (shooterPosition) => {
  const shooterRange = new Array(8).fill("  ");
  shooterRange[shooterPosition] = SHOOTER;
  console.log(`\n${shooterRange.join(" ")}`);
}

const displayGrid = (grid) => {
  console.clear();
  console.log(grid.map((line) => line.join(" ")).join("\n"));
};

const display = (shooterPosition, grid) => {
  displayGrid(grid);
  displayShooter(shooterPosition)
}

const generateRandomDigit = () => {
  return Math.floor(Math.random() * 5);
};


const getTargetLoon = (x, y, grid) => {
  if (x === 0) return [0, y];
  if (grid[x][y] !== "  ") return [x, y];
  return getTargetLoon(x - 1, y, grid);
}

const boom = (x, y, grid) => {
  grid[x][y] = BOOM;
  display(y, grid);
  grid[x][y] = "  ";
  setTimeout(() => display(y, grid), 300);
};

const main = () => {
  const loons = new Array(5).fill(" ");
  const grid = loons.map(row => new Array(5).fill(ALIEN))
  const x = 4;

  const popLoon = () => {
    const y = generateRandomDigit();
    const targetLoon = getTargetLoon(x, y, grid);
    boom(...targetLoon, grid);
    if (!grid.flat().includes(ALIEN)) {
      clearInterval(gameTimer);
    }
  }

  const gameTimer = setInterval(popLoon, 700);
}

main();