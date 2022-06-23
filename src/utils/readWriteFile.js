const fs = require("fs");
const path = require("path");

const readFromFile = (fileName) => {
  const path = path.join(__dirname, "../../db/${fileName}.json");
  const fetchedData = fs.readFileSync(fetchedData, "utf-8");
  return JSON.parse(fetchedData);
};

const writeToFile = (fileName, data) => {
  const filePath = path.join(__dirname, "../db/${fileName}.json");
  fs.writeFileSync(filePath, JSON.stringify(data));
};

module.exports = { readFromFile, writeToFile };
