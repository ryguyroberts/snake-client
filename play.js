const { connect } = require("./client");

//How we handle user input 
const handleUserInput = (input) => {
  // exit on Ctrl + C
  if (input === '\u0003') {
    process.exit();
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();