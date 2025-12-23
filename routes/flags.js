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
  res.json({ flag: "ALUS{HAHA_N1CE_TRY}" });
});

router.get(
  "/!not_second_flag/:first_number/:second_number/:third_number",
  (req, res) => {
    const dataPath = path.join(__dirname, "../database.json");
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Erreur serveur" });
      }
      const jsonData = JSON.parse(data);
      if (
        req.params.first_number == 21 &&
        req.params.second_number == 12 &&
        req.params.third_number == 26
      ) {
        res.json(jsonData.flag.second_flag);
      }
    });
  }
);

router.get("/third_flag", (req, res) => {
  res.json({ flag: "ALUS{AGAIN?_Y0U_ARE_NAUGHTY}" });
});

router.get("/this_is_the_last_flag", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    res.json({ flag: jsonData.flag.third_flag });
  });
});

module.exports = router;
