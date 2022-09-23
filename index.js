require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const cors = require("cors");

const routes = require("./src/routes/index.route");
const { json } = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./src/db");
const verifyToken = require("./src/middlewares/verifyToken.middleware");
const connectDb = dbConnect();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

// use route middleware
app.use("/api", routes);


const startServer = async () => {
  //connect database
   connectDb.connect();
   app.listen(port, () => console.log(`server running at ${port}`));
};
// start server
startServer();
