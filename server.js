const express = require("express");
const axios = require("axios");

const app = express();

const STREAM_URL = "http://gazalone.life:8080/live/omar777/01103978590/460864.ts";

app.get("/stream", async (req, res) => {
  try {
    const response = await axios({
      method: "get",
      url: STREAM_URL,
      responseType: "stream",
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    res.setHeader("Content-Type", "video/mp2t");

    response.data.pipe(res);

  } catch (err) {
    console.log(err.message);
    res.status(500).send("stream error");
  }
});

app.get("/", (req, res) => {
  res.send("IPTV running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running");
});