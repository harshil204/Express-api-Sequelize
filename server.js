const express = require("express");
const dotenv = require("dotenv").config();
const sequelize = require("./config/dbConnection");
const User = require("./models/User");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json())
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is successfully running on port ${port}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
