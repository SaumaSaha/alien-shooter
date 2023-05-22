process.stdin.setEncoding("utf-8");
setInterval(() => {
  const data = process.stdin.read()
  if(data) console.log(data);
}, 1)