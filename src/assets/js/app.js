function toggleMobileMenu() {
  var btnMenu = document.querySelector(".header__btn-menu");

  btnMenu.onclick = function () {
    document.body.classList.toggle("overflow");
    btnMenu.classList.toggle("animationClose");
  };
}

toggleMobileMenu();

function openSubLang() {
  var spanBtn = document.getElementById("openSettingLang");

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
  let inputPassword = document.querySelectorAll(".passInput"),
      btnPassword = document.querySelectorAll(".passBtn")

  for (let i = 0; i < btnPassword.length; i++) {
    console.log(btnPassword[i]);
    for (let j = 0; j < inputPassword.length; j++) {
        btnPassword[j].onclick = function () {
          inputPassword[j].type === "text" ? (inputPassword[j].type = "password") : (inputPassword[j].type = "text");
        };
      }
    }
}

togglePassword();

function openQuestion() {
  let question = document.querySelectorAll('.check-in__hint'),
      btnQuestion = document.querySelectorAll('.question')

      for (let i = 0; i < question.length; i++) {
        for (let j = 0; j < btnQuestion.length; j++) {
          btnQuestion[j].onclick = function () {
            question[j].classList.toggle('openQ')
          }
        }
      }
}

openQuestion();






