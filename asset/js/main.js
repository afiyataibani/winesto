$(document).ready(function(){
  // top-button
var $backToTop = $("#button");
$backToTop.hide();

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function (e) {
  $("html, body").animate({ scrollTop: 0},500);
});
});