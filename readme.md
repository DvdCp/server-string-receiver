# TCP Server for Forwarding Data to a Python Web Service

This is a simple Node.js application that creates a TCP server to listen for incoming data from clients and forwards that data to a Python web service via HTTP POST requests using Axios.

## Prerequisites

Before you begin, make sure you have the following dependencies installed:

- Node.js
- Axios

You also need a Python web service running at `http://python-web-service:5000/submitString` to receive and process the data forwarded by this server.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DvdCp/server-string-reciever.git
   ```

## Usage with Docker

1. Navigate to `server-string-receiver` folder and run:

   ```bash
   docker build . --tag server-string-receiver
   ```

   This will build the desired image startin from `Dockerfile`.

2. Connect your clients to the TCP server. When a client sends data, the server will log the received data and forward it to the Python web service via an HTTP POST request.

   ```bash
   docker run --name server-string-receiver --network myNet server-string-receiver
   ```

   This will start the TCP server listening on port 3000 in a Docker container using `myNet` as shared network.

## Configuration

You can configure the following options in the `server.js` file:

- `serverPort`: The port on which the TCP server listens for incoming connections. By default, it's set to 3000.

- The URL of the Python web service in the Axios `axios.post()` function. Update this URL to match the endpoint where your Python web service is running.

## Handling Errors

The server will log any errors that occur during the connection or data transfer process. You can customize the error handling in the `socket.on("error", (err) => {...}` block in the code.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions, enhancements, or bug fixes.

## Acknowledgments

This project was inspired by the need to forward data from TCP clients to a Python web service. Thanks to the Node.js and Axios communities for their excellent libraries and resources.

---

**Note:** Make sure to replace `"http://python-web-service:5000/submitString"` with the actual URL of your Python web service, and customize the project details as needed.
