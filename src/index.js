// import express
const express = require("express");

// import routes
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

// create express instance
const app = express();

// middleware
app.use(express.json());
app.use(routes);

// bind and listen server on PORT
app.listen(PORT, () => {
  console.log("server is responding");
});
