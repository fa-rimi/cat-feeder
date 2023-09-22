const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require("dotenv").config();
require("./config/database");

const app = express();
const PORT = process.env.PORT || 3001;

// -- middleware --

app.use(logger("dev"));
//this is so we can receive data
app.use(express.json());
//check for a token and create an req.user prop in request
app.use(require("./config/checkToken"));
console.log("__dirname:", __dirname);

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "..", "client", "dist", "vite.svg")));
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

//put API Routes here, before 'catch all' route
//mounting this routes that handles everything that comes to api/users
app.use("/api/users", require("./routes/api/users"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client", "dist"));
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
