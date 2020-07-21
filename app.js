const express = require("express");
const mongoose = require("mongoose");
const { response } = require("express");
const app = express();

require("dotenv/config");

// Import Routes
const postsRoute = require('./routes/posts');

// Middlewares
app.use('/posts', postsRoute);

// Routes '/' = default route
app.get('/', (request, response) => {
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
