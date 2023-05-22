process.stdin.setEncoding("utf-8");

const readFromStdin = (onData) => {
	const readData = () => {
		const data = process.stdin.read();
		onData(data, intervalId);
	};

	const intervalId = setInterval(readData, +process.argv[3]);
};

exports.readFromStdin = readFromStdin;
