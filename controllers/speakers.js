const express = require("express");
const router = express.Router();
let data = require("../data/data.json");

router.get("/speakers", (req, res) => {
  //all speakers
  let pagePhotos = [];
  data.speakers.forEach(speakerObj => {
    pagePhotos = pagePhotos.concat(speakerObj.artwork);
  });
  res.render("speakers", {
    pageTitle: "Speaker List",
    artistName: "",
    artwork: pagePhotos,
    allSpeakers: data.speakers,
    pageID: "speakerList"
  });
});

router.get("/speakers/:speakerid", (req, res) => {
  res.render("speakers");
});

module.exports = router;
