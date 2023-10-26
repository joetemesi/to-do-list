// Import required modules
const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 3000;

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
