
const express = require("express");
const app = express();

// IMPORTANT: body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Server is Running 🚀");
});

app.post("/chat", (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "message field missing"
      });
    }

    return res.json({
      reply: "You said: " + message
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal error in /chat"
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
