const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(bodyParser.json()); // Use bodyParser.json() instead of bodyParser.urlencoded()
app.use(cors());

app.post("/api/cards", async (req, res) => {
  const term = req.body.term;
  const url = `https://pixabay.com/api/?key=${process.env.api_key}&q=${term}&image_type=photo&pretty=true`; // Use process.env.PIXABAY_API_KEY directly

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data); //
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
