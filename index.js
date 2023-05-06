const gTTS = require("gtts");

let speech =
  "Welcome to Julieth, you can do almost anything related to tech with this platform";
const gtts = new gTTS(speech, (lang = "es"), (tld = "es"), (slow = true));

gtts.save("Voice.mp3", function (err, result) {
  if (err) {
    throw new Error(err);
  }
  console.log("Text to speech converted!");
});
