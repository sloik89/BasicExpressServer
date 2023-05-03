const express = require("express");
require("dotenv").config();
require("express-async-errors");
const app = express();
const productsRouter = require("./routes/products");
// middleware
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/error-handler");
// use of middleware
app.use(express.json());
// products routes

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  console.log(`server working on port: ${port}`);
});
app.use("/api/products", productsRouter);
app.get("/", (req, res) => {
  res.send(
    "<h1 style='display:flex; flex-direction:column;'>Example App <a href='/api/products/value'>value </a> <a href='/api/products/login'>login </a> </h1>"
  );
});
app.use(notFound);
app.use(errorHandler);
