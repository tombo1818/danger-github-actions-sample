const express = require("express");
const route = require("./route");

const app = express();
const port = 8080;

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
