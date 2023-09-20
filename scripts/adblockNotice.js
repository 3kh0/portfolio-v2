// Idea source:
// https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/

function closeNotice() {
  var notice = document.getElementById('ftf-dma-note');
  notice.style.animation = 'slide-down 0.5s ease-out'; // Add slide-up animation
  setTimeout(function () {
    notice.style.display = 'none';
  }, 500); // Hide notice after animation completes (300ms)
}
// TODO: store this to localstorage so it doesn't show again if the user clicks on close