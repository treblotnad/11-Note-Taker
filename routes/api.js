const api = require("express").Router();
const { v4: uuid4 } = require("uuid");

const db = require("../db/db.json");

api.get("/", (req, res) => {
  res.json(db);
});

api.post("/", (req, res) => {
  res.json("post API/NOTES Endpoint");
  console.log(req.body);
});

module.exports = api;
