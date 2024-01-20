const api = require("express").Router();
const { v4: uuid4 } = require("uuid");
const { readFromFile } = require("../db/dbHelper");

api.get("/", (req, res) => {
  readFromFile("./db").then((data) => res.json(JSON.parse(data)));
});

api.post("/", (req, res) => {
  res.json("post API/NOTES Endpoint");
  console.log(req.body);
});

module.exports = api;
