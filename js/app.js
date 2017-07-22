var navToggle = document.getElementById('navigation-toggle');
var navList = document.getElementById('navigation-list');

navToggle.addEventListener('click', function(e){
  e.preventDefault();
  navList.classList.toggle('visible');
}, false)
