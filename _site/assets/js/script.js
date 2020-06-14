var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
$(window).scroll(navbarCollapse);

$(document).ready(function(){
navbarCollapse();
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
