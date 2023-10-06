
if (typeof navLinks === 'undefined') {
  const navLinks = document.querySelectorAll(".nav-link");
  const path = window.location.pathname;

  navLinks.forEach(navLink => {
    const linkPath = new URL(navLink.href).pathname;
    if (path === linkPath) {
      navLink.classList.add('active');
    }
  });

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', function() {
      // Add the "loading" class to the clicked nav-link
      this.classList.add('loading');
    });
  });

}

var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}


