// import express
const { Router } = require("express");
const { viewNotes } = require("../controllers/views/view");

// create router instance
const router = Router();

router.get("/", viewNotes);

module.exports = router;
