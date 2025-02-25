const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 4001;

app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro on geting data" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server on port http://backend:${PORT}`);
});
