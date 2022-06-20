const Router = require("express");

// import views.js
const { getNotes, deleteNotes } = require("../controllers/api/notes");
// create router instance

const router = Router();

// register routes
router.get("/", getNotes);
router.delete("/:id", deleteNotes);

module.exports = router;
