const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Routes '/' = default route
app.get("/", (request, response) => {
  response.send("Hello from home!");
});

// Connect to DB
mongoose.connect(
  "mongodb+srv://dbUser:Gentegrande88@cluster0.dtwta.mongodb.net/restfulDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => {
      console.log('Connected to DB finally!')
  }
);

app.listen(3000);
