window.onload = function () {
   var gamburger = document.querySelector('.gamburger');
   var visible = document.querySelector('.ul_min');
   gamburger.onclick = function () {
       visible.classList.toggle('visible');
   }
};