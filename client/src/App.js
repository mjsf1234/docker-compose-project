import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [fibonacci, setFibonacci] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/calculate", { input }) // Replace 'http://localhost:3001' with your server's URL
      .then((response) => {
        setFibonacci(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={input} onChange={handleInputChange} />
        <button type="submit">Calculate Fibonacci</button>
      </form>
      <div>Fibonacci number: {fibonacci}</div>
    </div>
  );
};

export default App;
