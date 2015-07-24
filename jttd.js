$(document).ready(function() {
  $('input').bind("copy paste", function(e) {
          	e.preventDefault();
              alert("You cannot paste into this text field.");
          $('input').bind("contextmenu", function(e) {
              e.preventDefault();
          	});
      	});
});
