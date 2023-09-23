// hide loader when everything is loaded
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
    //console.log("Page loaded!")
  }
});