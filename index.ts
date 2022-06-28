const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
app.use(cors());

//Connect to databse
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connected.");
});

//Middleware
app.use(express.json());
app.use(bodyParser.json());


app.listen(process.env.PORT || 4000, () => {
  console.log("Running...");
});