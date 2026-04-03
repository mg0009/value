const express = require("express");
const app = express();

let SMID = "B53e1f1b8-5e3b-4c6d-9a41-b8f2d6e4c822";

app.get("/get-smid", (req, res) => {
  res.send(SMID);
});

app.get("/set-smid", (req, res) => {
  const newValue = req.query.value;
  if (newValue) {
    SMID = newValue;
    res.send("Updated: " + SMID);
  } else {
    res.send("No value");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
