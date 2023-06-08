  /* loader */
  const delay = 1300;
      window.addEventListener("load", function () {
        const currentTime = new Date().getTime();
        const loadTime = window.performance.timing.domContentLoadedEventEnd;
        const timeToWait = delay - (currentTime - loadTime);

        if (timeToWait > 0) {
          setTimeout(showPage, timeToWait);
        } else {
          showPage();
        }
      });
      function showPage() {
        const loader = document.getElementById("loader");
        loader.style.opacity = 0;
        setTimeout(function () {
          loader.style.display = "none";
        }, 300);

        const content = document.getElementById("content");
        content.classList.remove("hidden");
      }


      /* зміна теми */
      let container = $(".container")
      let switchButton = $(".switch-input")
      
      switchButton.on( "click", myfunction );
        function myfunction(){
              container.toggleClass(`light-theme`);
              container.toggleClass(`dark-theme`);
      }
      
    /* стрілка в гору */
  let upButton = document.querySelector(`.up-button`)
      window.onscroll = function(){
          if(window.pageYOffset > 900){
              upButton.classList.remove(`visually-hidden`)
              upButton.classList.add(`shown`)
          }
          else{
              upButton.classList.add(`visually-hidden`)
              upButton.classList.remove(`shown`)  
          }
      }
      upButton.onclick = function(){
          window.scrollTo(0, 0)
      } 

      /* приховані елементи */
      let hiddens = document.querySelectorAll(`.project-hidden`)
      let button = document.querySelector(`.button-all`)
      for(let hidden of hiddens){
        button.addEventListener(`click`, function(){
            hidden.classList.toggle(`visually-hidden`)
            
        })} 
       /*  індетифікатор позиції */
       var images = ["img/view.png", "img/hidden.png"];
    var texts = ["View All", "Hide some"];
    var index = 0;

    function changecontain() {
      var button = document.getElementById("mybutton");
      var nowimage = button.getElementsByTagName("img")[0];
      var nowtext = button.getElementsByTagName("span")[0];
      
      index = (index + 1) % images.length;
      
      nowimage.src = images[index];
     nowtext.textContent = texts[index];
    }

    function checkEmail() {
      var emailInput = document.getElementById("emailInput");
      var email = emailInput.value;
    }


    /* активне меню */
    const li  = document.querySelectorAll(`.links`)
    const sec = document.querySelectorAll(`section`)
    function activeMenu(){
      let len =sec.length
      while(--len && window.scrollY + 100 < sec[len].offsetTop ){
      li.forEach(ltx => ltx.classList.remove("active"))
      li[len].classList.add("active")
      }
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu)
    
    





