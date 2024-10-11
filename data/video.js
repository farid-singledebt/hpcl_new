const playButton = document.getElementById("stall-play-button");
const pauseButton = document.getElementById("stall-pause-button");
const videoElement = document.getElementById("stall-video");
const videoPlaceholder = document.getElementById("stall-placeholder");
const stallOverlay = document.getElementById("stall-overlay");

let isStallPlaying = false;
playButton.addEventListener("click", function () {
  const videoSource =
    "https://hpcl.parmarketing.agency/videos/hpcl/pragati_prangan/pragati_prangan_stall.mp4";
  videoElement.querySelector("source").src = videoSource;

  videoElement.load();

  videoPlaceholder.style.display = "none";
  videoElement.style.display = "block";

  isStallPlaying = true;
  videoElement.play();
  playButton.style.display = "none";
  stallOverlay.classList.add("hide");

  pauseButton.classList.remove("d-none");
});

pauseButton.addEventListener("click", function () {
  videoPlaceholder.style.display = "block";
  videoElement.style.display = "none";

  isStallPlaying = false;
  videoElement.pause();
  playButton.style.display = "block";
  stallOverlay.classList.remove("hide");

  pauseButton.classList.add("d-none");
});

//
const eventVideoPlayButton = document.getElementById("event-video-play-button");
const eventVideoPauseButton = document.getElementById(
  "event-video-pause-button"
);
const eventVideoElement = document.getElementById("event-video");
const eventVideoPlaceholder = document.getElementById(
  "event-video-placeholder"
);
const EventVideoOverlay = document.getElementById("event-video-overlay");

let isEventVideoPlaying = false;
eventVideoPlayButton.addEventListener("click", function () {
  const videoSource =
    "https://hpcl.parmarketing.agency/videos/hpcl/event_special/main_video.mp4";
  eventVideoElement.querySelector("source").src = videoSource;

  eventVideoElement.load();

  eventVideoPlaceholder.style.display = "none";
  eventVideoElement.style.display = "block";

  isEventVideoPlaying = true;
  eventVideoElement.play();
  eventVideoPlayButton.style.display = "none";
  EventVideoOverlay.classList.add("hide");

  eventVideoPauseButton.classList.remove("d-none");
});

eventVideoPauseButton.addEventListener("click", function () {
  eventVideoPlaceholder.style.display = "block";
  eventVideoElement.style.display = "none";

  isEventVideoPlaying = false;
  eventVideoElement.pause();
  eventVideoPlayButton.style.display = "block";
  EventVideoOverlay.classList.remove("hide");

  eventVideoPauseButton.classList.add("d-none");
});
