const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/first_flag", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    res.json({ flag: jsonData.flag.first_flag });
  });
});

router.get("/second_flag", (req, res) => {
  res.json({ flag: "WIOB{HAHA_N1CE_TRY}" });
});

router.get("/!not_second_flag", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    res.json({ flag: jsonData.flag.second_flag });
  });
});

router.get("/third_flag", (req, res) => {
  res.json({ flag: "WIOB{AGA1N?_YOU_ARE_NAUGHTY}" });
});

router.get("/this_is_the_third_flag", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    res.json({ flag: jsonData.flag.third_flag });
  });
});

router.get("/fourth_flag", (req, res) => {
  res.json({ flag: "WIOB{SANTA_W1LL_NEVER_FORGIVE_YOU!}" });
});

router.get("/the_final_flag", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    res.json({ flag: jsonData.flag.fourth_flag });
  });
});
module.exports = router;
