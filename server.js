const config = require("./config");
const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use((error, req, res, next) => {
  throw new Error(error.message);
});

app.listen(config.port, () => {
  console.log(`back-end server listening on ${config.port}`);
});
