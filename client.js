const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //On connect we did it!
  conn.on("connect", () => {
    console.log("Successfully connected");
  });

  //Set name
  conn.on("connect", () => {
    conn.write("Name: RDR");
  });

  // On data console log it
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
};