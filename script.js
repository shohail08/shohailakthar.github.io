document.getElementById('year').textContent = new Date().getFullYear();

// Robust background video playback.
// Some mobile browsers block autoplay even when muted until a user gesture,
// and if the video file 404s we fall back gracefully to the poster image.
const bgVideo = document.getElementById('bgVideo');
if (bgVideo) {
  const tryPlay = () => bgVideo.play().catch(() => {});
  tryPlay();
  window.addEventListener('load', tryPlay);
  document.addEventListener('click', tryPlay, { once: true });
  document.addEventListener('touchstart', tryPlay, { once: true });

  bgVideo.addEventListener('error', () => {
    console.warn('Background video failed to load — check that assets/bg.mp4 was uploaded to the repo.');
  });
}
