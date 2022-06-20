// import express
const { Router } = require("express");
const { homePage, notePage } = require("../controllers/views/viewControllers");

// create router instance
const router = Router();

router.get("/", homePage);
router.get("/notes", notePage);
module.exports = router;
