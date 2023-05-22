const fs = require("fs");

process.stdin.setEncoding("utf-8");

const getInput = (timeoutId) => {
	const intervalId = setInterval(() => {
		const data = process.stdin.read();
		if (data) {
			if (data.trim() === "END") {
				clearInterval(intervalId);
			}
      fs.appendFileSync("./resources/input-data.txt", data)
		}
	}, 200);

};

const demo = () => {
  const timeoutId = setTimeout(getInput, 100000);
  console.log("hello")
}

demo()
console.log("hello again");
