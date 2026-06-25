const express = require("express");
const request = require("request");

const app = express();

const STREAM_URL = "http://gazalone.life:8080/live/omar777/01103978590/460864.ts";

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "video/mp2t"); // 👈 مهم جدًا

  request({
    url: STREAM_URL,
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "http://google.com"
    }
  }).pipe(res);
});

app.get("/", (req, res) => {
  res.send("IPTV Server Running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running");
});
