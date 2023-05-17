const chunk = function (list, size, overlap) {
  if (list.length === 0) return list;

  const currentChunk = list.slice(0, size);
  const remaining = list.slice(size);
  return [currentChunk].concat(chunk(remaining, size));
};

const displayGrid = () => {
  console.clear();
  console.log(grid.map((line) => line.join(" ")).join("\n"));
};

const generateRandomDigit = () => {
  return Math.floor(Math.random() * 10);
};

const loons = new Array(100).fill("🎈");
const grid = chunk(loons, 10);
displayGrid();

const getTargetLoon = (x, y, grid) => {
  if (x === 0) return [0, y];
  if (grid[x][y] !== "  ") return [x, y];
  return getTargetLoon(x - 1, y, grid);
}

const boom = ([x, y], grid) => {
  grid[x][y] = "💥";
  displayGrid();
  grid[x][y] = "  ";
  setTimeout(displayGrid, 300);
};

const main = () => {
  const x = 9;

  const popLoon = () => {
    const y = generateRandomDigit();
    const targetLoon = getTargetLoon(x, y, grid);
    boom(targetLoon, grid);
    if(!grid.flat().includes("🎈")) {
      clearInterval(gameTimer);
    }
  }
  const gameTimer = setInterval(popLoon, 350);
}

main();