// import express
const Router = require("express");

// import views.js
const viewRoutes = require("./viewRoutes");
const apiRoutes = require("./api/api");

// create router instance

const router = Router();

// register routes

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
