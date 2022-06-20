const getNotes = (req, res) => {
  res.json("responding to your req");
};

const deleteNotes = (req, res) => {
  res.json("delete");
};

module.exports = { getNotes, deleteNotes };
