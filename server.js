const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// 🔥 runtime variable (changeable)
let dialogText = "hacker.";

// -------------------------------
// ROOT
// -------------------------------
app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: "dialog-text-server",
    endpoint: "/api/dialog-text"
  });
});

// -------------------------------
// GET TEXT
// -------------------------------
app.get("/api/dialog-text", (_req, res) => {
  res.json({
    text: dialogText
  });
});

// -------------------------------
// 🔥 SET TEXT (browser se change)
// -------------------------------
app.get("/set-text", (req, res) => {
  const value = req.query.value;

  if (!value) {
    return res.send("Usage: /set-text?value=YOUR_TEXT");
  }

  dialogText = value;

  console.log("Dialog updated:", dialogText);

  res.send("Updated: " + dialogText);
});

// -------------------------------
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
