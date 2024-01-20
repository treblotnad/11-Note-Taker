const api = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile, readAndAppend, writeToFile } = require("../db/dbHelper");

api.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/", (req, res) => {
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully`);
  } else {
    res.error("Error in adding Note");
  }
});

api.delete("/:id", (req, res) => {
  noteId = req.params.id;
  console.log(noteId);
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((jsonData) => {
      const result = jsonData.filter((note) => note.id !== noteId);
      writeToFile("./db/db.json", result);
      res.json(`Note ${noteId} has been deleted!`);
    });
});

module.exports = api;
