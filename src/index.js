// src/index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hello = require("./routes/hello");

app.use("/api", hello);

app.get("/", (req, res) => res.send("Hello from sample-app!"));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
