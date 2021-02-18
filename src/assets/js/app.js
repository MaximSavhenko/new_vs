function toggleMobileMenu() {
  var btnMenu = document.querySelector(".header__btn-menu");

  btnMenu.onclick = function () {
    document.body.classList.toggle("overflow");
    btnMenu.classList.toggle("animationClose");
  };
}

toggleMobileMenu();

function openArrow() {
  let arrow = document.querySelectorAll(".topMenu__hiddenMenu-item");
  arrowSub = document.querySelectorAll(".topMenu__hiddenMenu-sub-item");

  for (let elem of arrow) {
    elem.onclick = function () {
      elem.classList.toggle("activeArrow");
    };
  }
  for (let elem of arrowSub) {
    elem.onclick = function () {
      elem.classList.toggle("activeArrowSub");
    };
  }
}

openArrow();

function scrollUp() {
  function scrollTo(element) {
    window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: "smooth",
    });
  }

  var button = document.querySelector(".footer__scrollUp");
  var header = document.querySelector("#up");

  button.addEventListener("click", () => {
    scrollTo(header);
  });
}

scrollUp();

function togglePassword() {
  let inputPassword = document.querySelectorAll(".personal-account__inputpass"),
      btnPassword = document.querySelectorAll(".personal-account__passbtn"),
      img = document.querySelectorAll("#inpImg"),
      see = "./assets/images/svg/eye.svg",
      hide = "./assets/images/svg/eye-off.svg"

  for (let i = 0; i < btnPassword.length; i++) {
    for (let j = 0; j < inputPassword.length; j++) {
      for (let y = 0; y < img.length; y++) {
        btnPassword[j].onclick = function () {
          inputPassword[j].type === "text" ? (inputPassword[j].type = "password") : (inputPassword[j].type = "text");
          img[y].srs === see ? (img[y].srs = see) : (img[y].srs = hide);
          console.log(img[y].srs)
        };
      }
    }
  }
}

togglePassword();





