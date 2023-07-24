const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors);

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/calculate", async (req, res) => {
  const { input } = req.body;
  console.log("hit");
  try {
    const response = await axios.post("http://worker:3002/calculate", {
      input,
    });
    const result = response.data.result;

    // Store the result in Redis or do any other required processing

    res.status(200).json({ result });
  } catch (error) {
    console.error("Error fetching result from worker:", error);
    res.status(500).json({ error: "Failed to fetch result from worker" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
