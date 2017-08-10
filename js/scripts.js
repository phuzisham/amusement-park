$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#person1").val());

    if (height <= 4) {
      $("#one").addClass("green");
      $("#two").addClass("red");
      $("#three").addClass("red");
      $("#four").addClass("red");
    } else if (height > 4 && height <7) {
      $("#one").addClass("red");
      $("#two").addClass("green");
      $("#three").addClass("green");
      $("#four").addClass("green");
    } else if (height >=7) {
      $("#one").addClass("red");
      $("#two").addClass("green");
      $("#three").addClass("green");
      $("#four").addClass("red");
    }
  });
});
