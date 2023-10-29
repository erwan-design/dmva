
/*==================== SHOW MENU ====================*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('nav__display')
        })
    }
  }
  showMenu('navToggle','navMenu')
  
  
  
  /*==================== REMOVE MENU MOBILE ====================*/

  const navLink = document.querySelectorAll('.nav__link')
  
  function linkAction(){
      const navMenu = document.getElementById('navMenu')
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('nav__display')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  
  
  
  /*==================== SHADOW MENU ====================*/
  
  var element = document.querySelector('header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 1) {
      element.classList.add('header__shadow');
    } else {
      element.classList.remove('header__shadow');
    }
  });
  
  
  
  
  /*==================== HIDE MENU ON SCROLL ====================*/
  
  let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
      } else {
        document.querySelector("header").style.top = "-200px";
      }

      prevScrollPos = currentScrollPos;
    }