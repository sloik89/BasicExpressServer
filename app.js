require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// import middleware
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/error-handler");
// use of middleware
app.use(express.json());

//  routes
app.get("/", (req, res) => {
  res.send(
    "<h1 style='display:flex; flex-direction:column;'>Example App <a href='/api/products/value'>value </a> <a href='/api/products/login'>login </a> </h1>"
  );
});

app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port, async () => {
      console.log(`server working on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
