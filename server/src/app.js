const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");
const dirPath = path.join(__dirname, "uploads");
const files = fs.readdirSync(dirPath).map((name) => {
  return {
    name: path.basename(name, ".pdf"),
    url: `/pdfs/${name}`,
  };
});
app.set("view engine", "ejs");
app.get("/uploads", (req, res) => {
  res.render("index", { files });
});

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(
  express.static("uploads", {
    setHeaders: (res, filepath) =>
      res.attachment(`pdf-express-${path.basename(filepath)}`),
  })
);
//app.use("/static", express.static(path.join(__dirname, "uploads")));
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
