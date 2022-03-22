const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../db/db.json", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    })
  );
});

router.post("/api/notes", (req, res) => {
  const newNote = req.body;

  fs.readFile(
    path.join(__dirname, "../db/db.json"),
    (err,
    (data) => {
      if (err) throw err;

      const allNotes = JSON.parse(data);

      newNote.id = allNotes.length.toString();
      allNotes.push(newNote);

      fs.writeFile(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(allNotes),
        () => {
          console.log("Success!");
          res.json(newNote);
        }
      );
    })
  );
});

router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;

  fs.readFile(path.join(__dirname, "../db/db.json"), (err, data) => {
    if (err) throw err;
    const currentNotes = JSON.parse(data);
    const currentNotesArray = currentNotes.fiter((item) => {
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
