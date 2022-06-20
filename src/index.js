// import express
const express = require("express");

// import routes
const apiRoutes = require("./routes/api");
const viewRouter = require("./routes/views");

const PORT = process.env.PORT || 4000;

// create express instance
const app = express();

// middleware
// app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", viewRouter);

// bind and listen server on PORT
app.listen(PORT, () => {
  console.log("server is responding");
});
