
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
  
  let scrollpos = window.scrollY
  const header = document.querySelector("header")
  const header_height = header.offsetHeight
  
  const add_class_on_scroll = () => header.classList.add("header__shadow")
  const remove_class_on_scroll = () => header.classList.remove("header__shadow")
  
  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
  
    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
  
    console.log(scrollpos)
  })
  
  
  
  
  /*==================== HIDE MENU ON SCROLL ====================*/
  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  
      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
          document.getElementById("header").style.top = "0%";
  
      } else {
          document.getElementById("header").style.top = "-30%";
      }
  
      prevScrollpos = currentScrollpos;
  }
  