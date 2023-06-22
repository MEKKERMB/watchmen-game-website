const buttons = document.querySelectorAll('.combo-button');
const videoPlayer = document.getElementById('combo-video');
let isVideoPlaying = false;

buttons.forEach((button) => {
  button.addEventListener('click', () => {

    const videoUrl = button.dataset.videoUrl;

    if (videoPlayer.src !== videoUrl) {
      videoPlayer.src = videoUrl;
      videoPlayer.load();
    }

    videoPlayer.play();
    isVideoPlaying = true;
    videoPlayer.parentNode.classList.add('show-video');
  });
});
