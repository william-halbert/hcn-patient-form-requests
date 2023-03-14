//also, let user upload a pdf

const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const formulaAndFoodRouter = require("./routers/formulaAndFood");
const cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(formulaAndFoodRouter);

module.exports = app;
