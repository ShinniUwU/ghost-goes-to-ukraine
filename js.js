window.onload = function() {
  // Get the video element
  var video = document.getElementById("myVideo");

  // Set up the flag colors
  const BLACK = "#000000";
  const YELLOW = "#FFD500";
  const BLUE = "#005BBB";
  const RED = "#D10000";

  // Handle cases where the video element or the document.body element is null
  if (video === null) {
    console.error("Unable to find video element with ID 'myVideo'");
    return;
  }
  if (document.body === null) {
    console.error("Unable to find body element");
    return;
  }

  // Set the initial background color of the flag to black
  document.body.style.backgroundColor = BLACK;

  // Add an event listener for the "play" event on the video element
  video.addEventListener("play", function() {
    // Set up the breathing effect interval
    var interval = setInterval(function() {
      // Fade the background color to yellow using a CSS transition
      document.body.style.transition = "background-color 1s ease-in-out";
      document.body.style.backgroundColor = YELLOW;
      // Wait 1 second
      setTimeout(function() {
        // Fade the background color to blue using a CSS transition
        document.body.style.transition = "background-color 1s ease-in-out";
        document.body.style.backgroundColor = BLUE;
      }, 1000);
    }, 2000);
  });

  // Add an event listener for the "pause" event on the video element
  video.addEventListener("pause", function() {
    // Clear the breathing effect interval
    clearInterval(interval);
    // Fade the background color to black using a CSS
  });
}
