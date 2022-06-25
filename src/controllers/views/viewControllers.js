const path = require("path");
const homePage = (req, res) => {
  // const filePath = path.join(__dirname, "../");
  res.sendFile(path.join(__dirname, "../../../public/index.html"));
  console.log("homepage");
};

const notePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/notes.html"));
  // res.send("notepagee");
};

module.exports = {
  homePage,
  notePage,
};
