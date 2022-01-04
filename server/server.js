const express = require('express')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const roomsRoute= require('./routes/roomsRoute');
const userRouter = require('./routes/usersRoute');

const app = express();
const port = process.env.PORT || 8000;

require("dotenv").config();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.use('/api/rooms',roomsRoute)
app.use('/api/user',userRouter)

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`server running in port ${port}✔️`));

