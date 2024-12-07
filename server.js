// Import the http module to create a server
const http = require('http');

// Import the Express app (app.js)
const app = require('./app');

// Set the port from environment variable or default to 9000
const port = process.env.PORT || 9000;

// Log the port to the console (for debugging purposes)
console.log(port);

// Create the HTTP server using the Express app
const server = http.createServer(app);

// Start the server and have it listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
