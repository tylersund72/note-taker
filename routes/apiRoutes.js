const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    const allNotes = JSON.parse(data);

    res.json(allNotes);
  });
});

router.post("/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;

    const allNotes = JSON.parse(data);
    const newNote = req.body;

    newNote.id = uuidv4();
    allNotes.push(newNote);

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(allNotes),
      (err) => {
        if (err) throw err;
      }
    );
    res.json(newNote);
  });
});

router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;

  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    const currentNotes = JSON.parse(data);
    const currentNotesArray = currentNotes.filter((item) => {
      return item.id !== noteId;
    });

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(currentNotesArray),
      () => {
        console.log("Successfully deleted note.");
        res.json(currentNotesArray);
      }
    );
  });
});

module.exports = router;
