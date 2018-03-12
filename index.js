const express = require("express");

express()
  .use(express.static(`${__dirname}/build`))
  .listen(process.env.PORT, () =>
    console.log("__SERVER_RUNNING__", process.env.PORT)
  );

