const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const db = require("./util/database");
const allRoutes = require("./routes/all-routes.router");
const clientRouter = require("./routes/clientRouter");
const partRouter = require("./routes/part.router");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Get, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", allRoutes);

app.use("/client", clientRouter);
app.use("/part", partRouter);

db.execute("SELECT * FROM  car")
  .then((result) => {
    console.log("CONNECTED");
    console.log(result[0]);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000);
