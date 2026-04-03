const express = require("express");
const app = express();

// Default fallback value
let SMID = "B53e1f1b8-5e3b-4c6d-9a41-b8f2d6e4c822";

// Root route (for testing)
app.get("/", (req, res) => {
  res.send("SERVER WORKING");
});

// Get SMID (app will call this)
app.get("/get-smid", (req, res) => {
  res.send(SMID);
});

// Change SMID from browser
app.get("/set-smid", (req, res) => {
  const newValue = req.query.value;

  if (newValue && newValue.trim() !== "") {
    SMID = newValue.trim();
    console.log("Updated SMID:", SMID);
    res.send("Updated: " + SMID);
  } else {
    res.send("No value provided");
  }
});

// Port (Render uses dynamic port)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
