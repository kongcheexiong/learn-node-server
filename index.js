require("dotenv").config();
const bodyParser = require('body-parser')
const express = require("express");
const app = express();

const cors = require("cors");
const dbConnect = require("./src/db");

const route = require("./src/routes/index.route");
const { json } = require("express");

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

const startServer = async () => {
  //connect database
  await dbConnect();

  // use route middleware
  await app.use("/api", route);

  await app.listen(port, () => console.log(`server running at ${port}`));
};

// start server 
startServer()
