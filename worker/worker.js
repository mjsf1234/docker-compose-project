const express = require("express");
const client = require("./client");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors);

client.on("error", (err) => console.log("Redis Server Error", err));
client.on("connect", () => console.log("Redis connected"));

app.post("/calculate", async (req, res) => {
  const input = req.body.input;
  console.log(input);
  await client.connect();
  const result = await client.get(input);
  if (result !== null) {
    res.status(200).send({ result: result });
  } else {
    await client.set(input, calculateFibonacci(input));
    res.status(200).send({ result: calculateFibonacci(input) });
  }
  await client.disconnect();
});

const calculateFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

app.listen(port, () => {
  console.log(`Worker is running on port ${port}`);
});
