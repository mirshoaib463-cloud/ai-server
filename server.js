const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// 👇 ADD THIS
app.use(express.static(__dirname));

app.post("/chat", (req, res) => {
  const msg = req.body.message;
  res.json({ reply: "You said: " + msg });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
