const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectDB } = require("./config/db");
const dotenv = require("dotenv").config();

connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalroutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server Started on port ${port}`));
