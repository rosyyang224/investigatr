// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require materialize-sprockets
//= require materialize-form
//= require_tree .



// Flash fade
// $(function() {
//    $('.alert-box').fadeIn('normal', function() {
//       $(this).delay(3700).fadeOut();
//    });
// });


// Search submit on enter
// $(document).ready(function() {
//   function submitForm() {
//     document.getElementById("search").submit();
//   }
//   document.onkeydown = function () {
//     if (window.event.keyCode == '13') {
//         submitForm();
//     }
//   }
// });

// $('.dropdown-trigger').dropdown();
// $(document).ready(function(){
//   $('.timepicker').timepicker();
// });

document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  });

// function toggleMobileMenu() {
//     var menu = document.getElementById("mobileNavLinks");
//     if (!menu) return;
//     if (menu.style.display === "flex") {
//       menu.style.display = "none";
//     } else {
//       menu.style.display = "flex";
//     }
//   }
  
document.addEventListener('DOMContentLoaded', function(){
    var toggleBtn = document.getElementById('mobile-toggle');
    var links     = document.getElementById('mobile-links');
    if (!toggleBtn || !links) return;
  
    links.style.display = 'none';
  
    toggleBtn.addEventListener('click', function(e){
      e.preventDefault();
      if (links.style.display === 'flex') {
        links.style.display = 'none';
      } else {
        links.style.display = 'flex';
      }
    });
  });
  