const express = require("express");
const app = express();

const STREAM_URL = "http://gazalone.life:8080/live/omar777/01103978590/460864.ts";

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "video/mp2t");
  res.setHeader("Access-Control-Allow-Origin", "*");

  fetch(STREAM_URL)
    .then(response => {
      response.body.pipe(res);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("Stream error");
    });
});

app.get("/", (req, res) => {
  res.send("IPTV Proxy Running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running");
});