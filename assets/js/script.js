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

    const categoryNav = document.querySelector('.category-nav-item');
    if(categoryNav){
      categoryNav.addEventListener('click', ()=>{
        const parent = event.currentTarget.parentNode;
        if(parent){
          parent.classList.toggle('open');
        }

      });
    }

    window.addEventListener('scroll', ()=>{
      const header = document.querySelector('.header-section');
      if(window.pageYOffset >= header.clientHeight){
         header.classList.add('sticky-header');
      }else{
        header.classList.remove('sticky-header');
      }
    });

    const toggleSocialBar = document.querySelector('.social-share-inner');
    if(toggleSocialBar){
      toggleSocialBar.addEventListener('click', ()=>{
        const parent = toggleSocialBar.closest('.toggle-share');
        if(parent.classList.contains('open')){
          parent.classList.remove('open');
        }else{
          parent.classList.add('open');
        }
      })
    }

    const subscribeBtn = document.querySelector('.subscribe .subs-btn');
    if(subscribeBtn){
      subscribeBtn.addEventListener('click', ()=>{
        const subscribeModal = document.querySelector('.subscribe-modal');
        if(window.innerWidth < 767 && headerToggleBar){
          headerToggleBar.click();
        }
        if(subscribeModal){
          if(subscribeModal.classList.contains('open')){
            subscribeModal.classList.remove('open');
          }else{
            subscribeModal.classList.add('open');
          }
        }
      });
    }

    const subscribeClose = document.querySelector('.subscribe-close');
    if(subscribeClose){
      const subscribeModal = document.querySelector('.subscribe-modal');
      subscribeClose.addEventListener('click',()=>{
        if(subscribeModal){
          if(subscribeModal.classList.contains('open')){
            subscribeModal.classList.remove('open');
          }
        }
      });
    }
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



