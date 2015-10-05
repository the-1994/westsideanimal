app.nav = function() {
	$("li").click(function() {
  // remove classes from all
  $("li").removeClass("active");
  // add class to the one we clicked
  $(this).addClass("active");
  // stop the page from jumping to the top
  return false;
});
};