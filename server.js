const express = require("express");
const app = express();

// current value (yahi tum control karoge)
let SMID = "B53e1f1b8-5e3b-4c6d-9a41-b8f2d9e4c122";

// GET → app isko call karegi
app.get("/get-smid", (req, res) => {
  res.send(SMID);
});

// OPTIONAL: browser se value change karne ke liye
app.get("/set-smid", (req, res) => {
  const newValue = req.query.value;
  if (newValue) {
    SMID = newValue;
    res.send("Updated: " + SMID);
  } else {
    res.send("No value provided");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
