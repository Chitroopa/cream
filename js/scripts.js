$(document).ready(function() {
  $("h1").click(function() {
    var flavors = ["Coconut", "Chocolate-chip", "Vanilla", "Kit-kat"];

    flavors.forEach(function(flavor) {
     $("ul").append("<li>" + flavor + "</li>");

    });
  });
});
