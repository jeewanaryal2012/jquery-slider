$(document).ready(function() {

  var sliderCount = $(".slide").length;
  $(".slider").width(sliderCount*200);
  var l = 0;
  var slideWidth = $(".slide").width();
  var cnt = 0;

  $(document).on("click", "#btn-prev", function() {
    if(cnt > 0) {
      l = l + slideWidth;
      $(".slider").animate({
        "margin-left": l+"px"
      }, 500, function() {});
      cnt = cnt-1;
    }
  });

  $(document).on("click", "#btn-next", function() {
    if(cnt < $(".slide").length-1) {
      l = l - slideWidth;
      $(".slider").animate({
        "margin-left": l+"px"
      }, 500, function() {});
      cnt = cnt+1;
    }
  });
  
});
