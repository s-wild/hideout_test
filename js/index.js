// A $( document ).ready() block.
$( document ).ready(function() {
  // Search box.
  $("#siteSearchAfter").hide();
  $("#siteSearch").click(function() {
    $("#siteSearchAfter").show();
    $("#siteSearch").hide();
  });
  // Masonry
  // external js: masonry.pkgd.js, imagesloaded.pkgd.js

  // init Masonry after all images have loaded
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
  });
});
