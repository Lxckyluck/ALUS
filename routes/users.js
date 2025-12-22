const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/loginv2", (req, res) => {
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    res.json({
      user: jsonData.user,
      password: jsonData.password,
    });
  });
});

router.post("/login", (req, res) => {
  const { user, password } = req.body;
  const dataPath = path.join(__dirname, "../database.json");
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Erreur serveur" });
    }
    const jsonData = JSON.parse(data);
    if (user === jsonData.user && password === jsonData.password) {
      res.json({ token: jsonData.token });
    } else {
      res.status(401).json({ error: "Identifiants incorrects" });
    }
  });
});

module.exports = router;
