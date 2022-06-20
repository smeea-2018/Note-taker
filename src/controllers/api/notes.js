const getNotes = (req, res) => {
  res.json("responding to your req");
};

const deleteNotes = (req, res) => {
  res.json("delete");
};

const createNotes = (req, res) => {
  res.json("created");
};
module.exports = { getNotes, deleteNotes, createNotes };
