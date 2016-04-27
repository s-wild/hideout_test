// A $( document ).ready() block.
$( document ).ready(function() {
  // Hide search box on load.
  $("#siteSearchAfter").hide();
  $("#siteSearch").click(function() {
    $("#siteSearchAfter").show();
    $("#siteSearch").hide();
  });
});
