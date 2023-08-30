const net = require("net");
const axios = require("axios");

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    const receivedString = data.toString();
    console.log(`Received from client: ${receivedString}`);

    // Send received string to a endpoint through POST
    axios.post("http://python-web-service:5000/submitString", receivedString, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.error(`Socket error: ${err.message}`);
  });
});

const serverPort = 3000;

server.listen(serverPort, () => {
  console.log(`Server listening on port ${serverPort}`);
});
