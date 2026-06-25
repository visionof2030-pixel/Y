const express = require("express");
const request = require("request");

const app = express();

// حط رابط القناة هنا
const STREAM_URL = "http://gazalone.life:8080/live/omar777/01103978590/460864.ts";

app.get("/stream", (req, res) => {
  req.pipe(request(STREAM_URL)).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
