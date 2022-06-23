// import express
const express = require("express");
const path = require("path");
// import routes
const routes = require("./routes");

const PORT = process.env.PORT || 4000;

// create express instance
const app = express();

// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

// bind and listen server on PORT
app.listen(PORT, () => {
  console.log("http://localhost:4000/");
});
