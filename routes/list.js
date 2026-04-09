const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.post("/content", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    const actions = jsonData.merits.map((item) => item.action);
    if (req.body.userKey === jsonData.flag.first_flag) {
      res.json(actions);
    }
  });
});

module.exports = router;
