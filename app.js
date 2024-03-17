const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const URI =
  "mongodb+srv://stevish45:<password>@littleroad.jligexa.mongodb.net/?retryWrites=true&w=majority&appName=LittleRoad";

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log(`Something went wrong ${error}`);
}

app.listen(5000, () => {
  console.log("Server is Listening");
});
