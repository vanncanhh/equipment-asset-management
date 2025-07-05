const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

//Định tuyến router
app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD !!!</h1>");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
