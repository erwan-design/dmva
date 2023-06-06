
/*==================== PLAY VIDEO ====================*/

  window.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('myBannerVideo');
  var fallbackImage = document.getElementById('myFallbackImage');

  // Event listener for when the video's data is loaded and can be played
  video.addEventListener('loadeddata', function() {
    video.style.display = 'block';
    video.play(); // Autoplay the video
  });

  // Event listener for video loading errors
  video.addEventListener('error', function() {
    video.style.display = 'none';
    fallbackImage.style.display = 'block';
  });

  // Event listener for when the video playback has started
  video.addEventListener('play', function() {
    fallbackImage.style.display = 'none';
  });
});