// import express
const { Router, application } = require("express");
const { homePage, notePage } = require("../controllers/views/viewControllers");

// create router instance
const router = Router();

router.get("/notes", notePage);
router.get("/", homePage);

module.exports = router;
