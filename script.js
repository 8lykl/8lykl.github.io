function displayoverlay(name) {
  document.getElementById(name).style.display="block"
  document.getElementById(name).style.animation="1s ease fadein"
}

function removeoverlay(name) {
  document.getElementById(name).style.animation="1s ease fadeout";
  setTimeout(function() {
  document.getElementById(name).style.display="none"
  }, 900);
}
