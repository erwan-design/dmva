
/*==================== PLAY VIDEO ====================*/
  
  window.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myBannerVideo');
    var fallbackImage = document.getElementById('myFallbackImage');
  
    video.addEventListener('loadeddata', function() {
      fallbackImage.style.display = 'none';
      video.style.display = 'block';
      video.play(); // Autoplay the video
    });
  
    video.addEventListener('error', function() {
      setTimeout(function() {
        fallbackImage.style.display = 'block';
        video.style.display = 'none';
      }, 3000);
    });
  });