// Import UUID
const { v4: uuidv4 } = require("uuid");
// Import read/write file
const { readFromFile, writeToFile } = require("../../utils/readWriteFile");

const getNotes = (req, res) => {
  console.log("getNotes");
  console.log(req.body);
  const data = readFromFile("db");
  console.log(data);

  res.json(data);
};

const deleteNotes = (req, res) => {
  const { id } = req.params;

  console.log("id is:");
  console.log(id);

  // get all items from file
  const data = readFromFile("db");
  console.log("data to delete");
  console.log(data);

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
  console.log(req.body);
  // get title and text
  const { title, text } = req.body;
  // store in an object

  const data = { id: uuidv4(), title, text };

  // get data from file
  const readData = readFromFile("db");
  console.log(readData);
  // add recent not to array
  readData.push(data);
  // write data

  writeToFile("db", readData);

  res.json("created");
};
module.exports = { getNotes, deleteNotes, createNotes };
