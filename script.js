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

const wrappers = document.getElementsByClassName('wrapper');

function scalePage() {
  const scale = window.innerWidth / 625; 
  for (let i = 0; i < wrappers.length; i++) {
    wrappers[i].style.transform = `scale(${scale})`;
    wrappers[i].style.transformOrigin = 'top left';
  }
}

window.addEventListener('resize', scalePage);
scalePage();
