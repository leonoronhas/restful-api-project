const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

require("dotenv/config");

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// Routes '/' = default route
app.get("/", (request, response) => {
  response.send("Hello from home!");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(3000);
