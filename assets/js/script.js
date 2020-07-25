(() => {

  const bindEvents = () => {
    const headerToggleBar = document.querySelector(".toggle-bar");
    const toggleContainer = document.querySelector(".toggle-container");
    if (headerToggleBar && toggleContainer) {
      headerToggleBar.addEventListener("click", () => {
        if (toggleContainer.classList.contains("open")) {
          toggleContainer.classList.remove("open");
          headerToggleBar.classList.remove("menu-close");
        } else {
          toggleContainer.classList.add("open");
          headerToggleBar.classList.add("menu-close");
        }
      });
    }

    window.addEventListener('scroll', ()=>{
      const header = document.querySelector('.header-section');
      if(window.pageYOffset > header.clientHeight){
         header.classList.add('sticky-header');
      }else{
        header.classList.remove('sticky-header');
      }
    });
  }

  const loadEvents = () => {
    if (document.querySelector("#disqus_thread")) {
      var disqusObserver = new IntersectionObserver(
        function(entries) {
          if (entries[0].isIntersecting) {
            var disqus_config = function() {
              this.page.url = document.location.href;
              this.page.identifier = document.location.pathname;
            };
            (function() {
              var d = document,
                s = d.createElement("script");
              s.src = "https://techylane.disqus.com/embed.js";
              s.setAttribute("data-timestamp", +new Date());
              (d.head || d.body).appendChild(s);
            })();
    
            disqusObserver.disconnect();
          }
        },
        { threshold: [0] }
      );
      disqusObserver.observe(document.querySelector("#disqus_thread"));
    }
  }

  const init = () => {
    bindEvents();
    loadEvents();
  };

  init();
})();



