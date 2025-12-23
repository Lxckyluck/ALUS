const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/tome_content", (req, res) => {
  res.json(
    "Ces satanés lutins ! Ils ont planqué le grimoire quelque part, impossible de le retrouver."
  );
});

router.post("/tome_content", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    const actions = jsonData.tome_action.map((item) => item.action);
    res.json(actions);
  });
});

router.get("/tome_opening", (req, res) => {
  res.json(
    "Oh ça alors, vous avez retrouvez ma combinaison secrète ? Vous méritez une récompense. J'ai trouvé ceci dans un des tiroirs poussiéreux "
  );
});

module.exports = router;
