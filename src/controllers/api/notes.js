// Import UUID
const { v4: uuidv4 } = require("uuid");
// Import read/write file
const { readFromFile, writeToFile } = require("../../utils/readWriteFile");

const getNotes = (req, res) => {
  const data = readFromFile("db");

  res.json(data);
};

const deleteNotes = (req, res) => {
  const { id } = req.params;

  // get all items from file
  const data = readFromFile("db");

  // remove item from file
  const filteredItems = data.filter((note) => note.id !== id);

  writeToFile("db", filteredItems);

  // send response
  return res.json({
    message: "Successfully deleted",
  });
  // res.json("delete");
};

const createNotes = (req, res) => {
  // get title and text
  const { title, text } = req.body;
  // store in an object

  const data = { id: uuidv4(), title, text };

  // get data from file
  const readData = readFromFile("db");
  // add recent not to array
  readData.push(data);
  // write data

  writeToFile("db", readData);

  res.json("created");
};
module.exports = { getNotes, deleteNotes, createNotes };
