const playButton = document.getElementById("stall-play-button");
const pauseButton = document.getElementById("stall-pause-button");
const videoElement = document.getElementById("stall-video");
const videoPlaceholder = document.getElementById("stall-placeholder");
const stallOverlay = document.getElementById("stall-overlay");

let isPlaying = false;
playButton.addEventListener("click", function () {
  const videoSource =
    "https://hpcl.parmarketing.agency/videos/hpcl/pragati_prangan/pragati_prangan_stall.mp4";
  videoElement.querySelector("source").src = videoSource;

  videoElement.load();

  videoPlaceholder.style.display = "none";
  videoElement.style.display = "block";

  isPlaying = true;
  videoElement.play();
  playButton.style.display = "none";
  stallOverlay.classList.add("hide");

  pauseButton.classList.remove("d-none");
});

pauseButton.addEventListener("click", function () {
  videoPlaceholder.style.display = "block";
  videoElement.style.display = "none";

  isPlaying = false;
  videoElement.pause();
  playButton.style.display = "block";
  stallOverlay.classList.remove("hide");

  pauseButton.classList.add("d-none");
});
