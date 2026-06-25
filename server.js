const express = require("express");
const { spawn } = require("child_process");

const app = express();

const STREAM_URL = "http://gazalone.life:8080/live/omar777/01103978590/460864.ts";

app.get("/stream.m3u8", (req, res) => {
  const ffmpeg = spawn("ffmpeg", [
    "-i", STREAM_URL,
    "-c:v", "copy",
    "-c:a", "copy",
    "-f", "hls",
    "-hls_time", "3",
    "-hls_list_size", "3",
    "-hls_flags", "delete_segments",
    "pipe:1"
  ]);

  res.setHeader("Content-Type", "application/vnd.apple.mpegurl");

  ffmpeg.stdout.pipe(res);

  ffmpeg.stderr.on("data", (data) => {
    console.log("FFmpeg:", data.toString());
  });
});

app.get("/", (req, res) => {
  res.send("IPTV FFmpeg Server Running 🚀");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running");
});