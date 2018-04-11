window.onload = function () {
   var gamburger = document.querySelector('.gamburger');
   var visible = document.querySelector('.ul_min');
   gamburger.onclick = function () {
       visible.classList.toggle('visible');
   };

   var gps_hover = document.querySelector('.gps_hover');
   var gps = document.querySelector('.gps');
   gps_hover.onmouseover = function () {
       gps.classList.toggle('visiblee');
   }
   gps_hover.onmouseout = function () {
       gps.classList.remove('visiblee');
   }
};