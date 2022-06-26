// import express
const Router = require("express");

// import views.js
const notesRouter = require("./notes");

// create router instance

const router = Router();

// register routes
router.use("/notes", notesRouter);

module.exports = router;
