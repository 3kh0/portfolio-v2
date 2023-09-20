// Idea source:
// https://stefanbohacek.com/project/detect-missing-adblocker-wordpress-plugin/

function shouldDisplayNotice() {
  return localStorage.getItem('noticeClosed') !== 'true';
}

if (shouldDisplayNotice()) {
  document.getElementById('ftf-dma-note').style.display = 'block';
} else {
  document.getElementById('ftf-dma-note').style.display = 'none';
}

// close notice and store
function closeNotice() {
  var notice = document.getElementById('ftf-dma-note');
  notice.style.animation = 'slide-down 0.5s ease-out'; // slides out of dms
  setTimeout(function () {
    notice.style.display = 'none';
    localStorage.setItem('noticeClosed', 'true'); // store it
  }, 500);
}