// app.js

const express = require("express");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/order");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("ehhe");
  res.send("Response aagya:");
});
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
