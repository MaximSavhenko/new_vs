function toggleMobileMenu() {
    var btnMenu = document.querySelector(".header__btn-menu")
  
  
    btnMenu.onclick = function () {
      document.body.classList.toggle("overflow");
      btnMenu.classList.toggle("animationClose");
    };
  }
  
toggleMobileMenu();
  
  
let t;
function up() {
  let top = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  if (top > 0) {
    window.scrollBy(0, (top + 100) / -10);
    t = setTimeout("up()", 10);
  } else clearTimeout(t);
  return false;
}
  
  function openSubLang() {
    var spanBtn = document.getElementById("openSettingLang")
      
  
    spanBtn.onclick = function () {
      spanBtn.classList.toggle("transformArrow");
    };
  }
  
  openSubLang();

  function openArrow() {
    let arrow = document.querySelectorAll(".topMenu__hiddenMenu-item");
        arrowSub = document.querySelectorAll(".topMenu__hiddenMenu-sub-item");
        
      for (let elem of arrow) {
        elem.onclick = function () {
        elem.classList.toggle('activeArrow')
        }
      }
      for (let elem of arrowSub) {
        elem.onclick = function () {
        elem.classList.toggle('activeArrowSub')
        }
      }
      
    }
    
  
  openArrow();





