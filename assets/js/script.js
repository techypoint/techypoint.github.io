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

if(document.querySelector("#disqus_thread")){

var disqusObserver=new IntersectionObserver(function(entries){

  if(entries[0].isIntersecting){
    var disqus_config = function () {
      this.page.url = document.location.href;
      this.page.identifier = document.location.pathname;
    };
    (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://techylane.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

    disqusObserver.disconnect();
  }
},{threshold:[0]});
disqusObserver.observe(document.querySelector("#disqus_thread"));

}
