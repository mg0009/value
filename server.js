const express = require("express");
const app = express();

// default value
let VALUE = "hello";

// test route
app.get("/", (req, res) => {
  res.send("SERVER OK");
});

// app yahan se value lega
app.get("/get-smid", (req, res) => {
  res.send(VALUE);
});

// browser se change karne ke liye
app.get("/set-smid", (req, res) => {
  const v = req.query.value;

  if (v && v.trim() !== "") {
    VALUE = v.trim();
    console.log("Updated:", VALUE);
    res.send("Updated: " + VALUE);
  } else {
    res.send("No value");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
