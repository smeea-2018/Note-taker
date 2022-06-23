const Router = require("express");

// import views.js
const {
  getNotes,
  deleteNotes,
  createNotes,
} = require("../../controllers/api/notes");
// create router instance

const router = Router();

// register routes
router.get("/", getNotes);
router.delete("/:id", deleteNotes);
router.post("/", createNotes);
module.exports = router;
