const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conObject = connect();
setupInput(conObject);