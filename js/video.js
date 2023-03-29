
// Page load - Initialize the video element and turn off autoplay and turn off looping.

var video = document.getElementById("player1");
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	autoplay = "false"; //video.autoplay?
	looping = "false";
});

// Play Button - play the video and update the volume information.  

var playButton = document.querySelector("#play");
playButton.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
  });

// Pause Button - Pause the video.

var pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
  });

// Slow Down - Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.  

var slowerButton = document.querySelector("#slower");
slowerButton.addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate -= 0.1;
	console.log("New Speed: " + video.playbackRate);
  });

// Speed Up - Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.

var fasterButton = document.querySelector("#faster");
fasterButton.addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate += (video.playbackRate * 0.1);
	console.log("New Speed: " + video.playbackRate);
  });

// Skip Ahead - Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.

var skipButton = document.querySelector("#skip");
skipButton.addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 10 < video.duration) {
	  video.currentTime += 10;
	} else {
	  video.currentTime = 0;
	}
	console.log("Current Time: " + video.currentTime);
  });

// Mute - Mute/unmute the video and update the text in the button.

var muteButton = document.querySelector("#mute");
muteButton.addEventListener("click", function() {
	if (video.muted) {
	  video.muted = false;
	  document.querySelector("#mute").textContent = "Mute";
	} else {
	  video.muted = true;
	  document.querySelector("#mute").textContent = "Unmute";
	}
  });

// Volume Slider - Change the volume based on the slider and update the volume information.

var slider = document.querySelector("#slider");
var volumeDisplay = document.querySelector("#volume");
slider.addEventListener("input", function() {
	video.volume = this.value / 100;
	volumeDisplay.textContent = this.value + "%";
  });

// Styled - Utilize the existing oldSchool class on the video element

var vintageButton = document.querySelector("#vintage");
vintageButton.addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
  });

// Original - Remove the oldSchool class from the video.

var originalButton = document.querySelector("#orig");
originalButton.addEventListener("click", function() {
  console.log("Original");
  video.classList.remove("oldSchool");
});











