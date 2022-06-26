const fs = require("fs");
const path = require("path");

const readFromFile = (fileName) => {
  const filePath = path.join(__dirname, `../../db/${fileName}.json`);
  const fetchedData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fetchedData);
};

const writeToFile = (fileName, data) => {
  const filePath = path.join(__dirname, `../../db/${fileName}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = { readFromFile, writeToFile };
