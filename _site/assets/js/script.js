var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
$(window).scroll(navbarCollapse);
var loadNavigation=function(){
    $('#navigation').load('/template/navigation.html',function() {
  navbarCollapse();
});
}
var loadFooter=function(){
  $('#footer').load('/template/footer.html');
}
$(document).ready(function(){
loadNavigation();
loadFooter();
})
