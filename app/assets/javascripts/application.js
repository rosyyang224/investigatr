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

M.Dropdown.init(elems, {
  constrainWidth: false,
  coverTrigger: false,
  alignment: 'right',  // This should align it to the right
  container: document.body  // This helps with positioning
});

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, looking for dropdown triggers...');
  var elems = document.querySelectorAll('.dropdown-trigger');
  console.log('Found dropdown triggers:', elems.length);
  
  // Check if the dropdown content exists
  var dropdownContent = document.getElementById('user-dropdown');
  console.log('Dropdown content found:', dropdownContent);
  
  if (elems.length > 0) {
    console.log('Initializing dropdowns...');
    var instances = M.Dropdown.init(elems, {
      constrainWidth: false,
      coverTrigger: false,
      alignment: 'right'
    });
    console.log('Dropdown instances created:', instances);
    
    // Test if we can manually open it
    setTimeout(() => {
      console.log('Trying to manually open dropdown...');
      instances[0].open();
    }, 2000);
  }
});
