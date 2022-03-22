const path = require("path");
const router = require("express").Router();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

module.exports = router;
