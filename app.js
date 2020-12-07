const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.status(200).json({
    message: 'Hello Express',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
