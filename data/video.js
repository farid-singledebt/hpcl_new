const playButton = document.getElementById("stall-play-button");
const pauseButton = document.getElementById("stall-pause-button");
const videoElement = document.getElementById("stall-video");
const videoPlaceholder = document.getElementById("stall-placeholder");
const stallOverlay = document.getElementById("stall-overlay");
let isStallPlaying = false;
let isVideoLoaded = false;
playButton.addEventListener("click", function () {
  if (!isVideoLoaded) {
    const videoSource =
      "https://hpcl.parmarketing.agency/videos/hpcl/pragati_prangan/pragati_prangan_stall.mp4";
    videoElement.querySelector("source").src = videoSource;
    videoElement.load();
    isVideoLoaded = true;
  }
  videoPlaceholder.style.display = "none";
  videoElement.style.display = "block";
  isStallPlaying = true;
  videoElement.play();
  playButton.style.display = "none";
  stallOverlay.classList.add("hide");
  pauseButton.classList.remove("d-none");
});
pauseButton.addEventListener("click", function () {
  isStallPlaying = false;
  videoElement.pause();
  playButton.style.display = "block";
  stallOverlay.classList.remove("hide");
  pauseButton.classList.add("d-none");
});

//
// Event Video Elements
const eventVideoPlayButton = document.getElementById("event-video-play-button");
const eventVideoPauseButton = document.getElementById(
  "event-video-pause-button"
);
const eventVideoElement = document.getElementById("event-video");
const eventVideoPlaceholder = document.getElementById(
  "event-video-placeholder"
);
const eventVideoOverlay = document.getElementById("event-video-overlay");

let isEventVideoPlaying = false;
let lastEventVideoTime = 0; // Variable to keep track of the last play time
let isEventVideoLoaded = false; // Flag to track if the video source is loaded

// Event Video Play Function
eventVideoPlayButton.addEventListener("click", function () {
  if (!isEventVideoLoaded) {
    const videoSource =
      "https://hpcl.parmarketing.agency/videos/hpcl/event_special/main_video.mp4";
    eventVideoElement.querySelector("source").src = videoSource;
    eventVideoElement.load();
    isEventVideoLoaded = true; // Set the flag to true after loading the video
  }

  // Resume from the last saved time
  eventVideoElement.currentTime = lastEventVideoTime;

  eventVideoPlaceholder.style.display = "none";
  eventVideoElement.style.display = "block";

  isEventVideoPlaying = true;
  eventVideoElement.play();
  eventVideoPlayButton.style.display = "none";
  eventVideoOverlay.classList.add("hide");

  eventVideoPauseButton.classList.remove("d-none");
});

// Event Video Pause Function
eventVideoPauseButton.addEventListener("click", function () {
  // Save the current playback time
  lastEventVideoTime = eventVideoElement.currentTime;

  isEventVideoPlaying = false;
  eventVideoElement.pause();

  eventVideoPlayButton.style.display = "block";
  eventVideoOverlay.classList.remove("hide");

  eventVideoPauseButton.classList.add("d-none");
});

// Event Video Ended Event
eventVideoElement.addEventListener("ended", function () {
  isEventVideoPlaying = false;
  lastEventVideoTime = 0; // Reset the last play time to the beginning
  eventVideoPlayButton.style.display = "block";
  eventVideoPauseButton.classList.add("d-none");
  eventVideoOverlay.classList.remove("hide");
});
