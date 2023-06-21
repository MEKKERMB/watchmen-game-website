const buttons = document.querySelectorAll('.combo-button');
const videoPlayer = document.getElementById('combo-video');
let isVideoPlaying = false;
let isDelayActive = false;

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    if (isDelayActive) return; // Ignore hover if delay is active

    const videoUrl = button.dataset.videoUrl;

    if (videoPlayer.src !== videoUrl) {
      videoPlayer.src = videoUrl;
      videoPlayer.load();
    }

    videoPlayer.play();
    isVideoPlaying = true;
    videoPlayer.parentNode.classList.add('show-video');
  });

  button.addEventListener('mouseout', () => {
    isVideoPlaying = false;
    videoPlayer.parentNode.classList.remove('show-video');

    // Set delay before allowing hover in again
    isDelayActive = true;
    setTimeout(() => {
      isDelayActive = false;
    }, 300); // 0.3 seconds delay
  });
});
