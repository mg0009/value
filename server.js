const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const defaultText = "hacker.";

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: "dialog-text-server",
    endpoint: "/api/dialog-text"
  });
});

app.get("/api/dialog-text", (_req, res) => {
  const text = process.env.DIALOG_TEXT || defaultText;

  res.json({
    text
  });
});

app.listen(port, () => {
  console.log(`Dialog text server listening on port ${port}`);
});
