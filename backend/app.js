const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/user-routes");
const blogRouter = require("./routes/blog-routes");

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
app.get("/", (req, res) => {
  res.json("Server Started!");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => app.listen(PORT, console.log(`Server running on ${PORT}`)))
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));
