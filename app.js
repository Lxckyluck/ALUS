const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const usersRouter = require("./routes/users");
const flagsRouter = require("./routes/flags");
const tomeRouter = require("./routes/tome");
const listRouter = require("./routes/list");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/flags", flagsRouter);
app.use("/users", usersRouter);
app.use("/tome", tomeRouter);
app.use("/list", listRouter);

module.exports = app;
