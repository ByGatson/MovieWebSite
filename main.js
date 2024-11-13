// Modal Elements and Controls
var loginElement = document.getElementsByClassName("header-login-modal")[0];
var registerElement = document.getElementsByClassName(
  "header-register-modal"
)[0];
var profilElement = document.getElementsByClassName("right-nav-modal")[0];
var modalElements = [loginElement, registerElement, profilElement];
var modalElementControls = [false, false, false];
var loginControl = false;
var registerControl = false;
var searchControl = false;

// Slide Elements
var slides = document.getElementsByClassName("slide-item");
var slideIndex = 0;

// Search and Profile Elements
var searchIcon = document.getElementsByClassName("search-box-icon")[0];
var profilMain = document.getElementsByClassName(
  "right-nav-modal-frame-profil-table"
)[0];
var profilInformation = document.getElementsByClassName("set-profil-frame")[0];
var profilButtons = document.getElementsByClassName(
  "right-nav-modal-frame-main-left-button"
);

// Profile Form Elements
var profilChangePasswordElement = document.getElementsByClassName(
  "changePassword-form"
)[0];
var profilChangeUserNameElement = document.getElementsByClassName(
  "changeUserName-form"
)[0];
var profilChangeEmailElement =
  document.getElementsByClassName("changeEmail-form")[0];

// Slide Content Elements
var slaytContent1 = document.getElementsByClassName("slayt-content")[0];
var slaytContent2 = document.getElementsByClassName("slayt-content-2")[0];

// Screen Elements
var screenMovie = document.getElementsByClassName("left-main-movie-screen")[0];
var screenHomePage = document.getElementsByClassName("left-main-home-page")[0];
var screenAdminPanel = document.getElementsByClassName(
  "left-main-admin-panel"
)[0];
var screenCategories = document.getElementsByClassName("right-main")[0];
var screenMovieControl = false;

// Movie Elements
var movieImage = document.getElementsByClassName(
  "frame-main-top-image-image"
)[0];
var movieName = document.getElementsByClassName("frame-header-text")[0];

// Profile Navigation Elements
var profilNavButtons = document.getElementsByClassName(
  "profil-nav-button-item"
)[0];
var profilNavButtonText = document.getElementsByClassName(
  "profil-nav-button-text"
);
var profilNavButtonControl = false;

// Other Variables
var scrollPosition;
var tracker = 0;

// Left Main Navigation Elements (for jQuery manipulation)
var leftMainElements = [$("#homePage"), $("#moviePage"), $("#adminPage")];

function homePage() {
  closePage();
  $("#homePage").css("display", "grid");
  document.documentElement.scrollTop = scrollPosition;
}

function moviePage(index) {
  closePage();
  scrollPosition = document.documentElement.scrollTop;
  $("#moviePage").css("display", "block");
  $(movieImage).attr("src", "image/" + imageList[index]);
  $(movieName).text(nameList[index]);
  document.documentElement.scrollTop = 368;
  for (var i = 0; i < modalElements.length; i++) {
    if (modalElementControls[i]) {
      closeModal(i);
    }
  }
}

function adminPage() {
  closePage();
  scrollPosition = document.documentElement.scrollTop;
  $("#adminPage").css("display", "flex");
}

function closePage() {
  for (var i = 0; i < leftMainElements.length; i++) {
    $(leftMainElements[i]).css("display", "none");
  }
}

function homePageScreenFunction() {
  if (tracker == 1) {
    for (var i = 0; i < leftMainElements.length; i++) {
      leftMainElements[i].style.display = "none";
    }
    screenHomePage.style.display = "grid";
    document.documentElement.scrollTop = scrollPosition;
    tracker = 0;
  }
}

function movieScreenFunction(index) {
  scrollPosition = document.documentElement.scrollTop;
  screenHomePage.style.display = "none";
  screenMovie.style.display = "block";
  movieImage.src = "image/" + imageList[index];
  movieName.innerHTML = nameList[index];
  document.documentElement.scrollTop = 368;
  for (var i = 0; i < modalElements.length; i++) {
    if (modalElementControls[i]) {
      closeModal(i);
    }
  }
  tracker = 1;
}

function closeModal(index) {
  if (modalElementControls[index]) {
    $(modalElements[index]).css("display", "none");
    modalElementControls[index] = false;
  }
}

function openModal(index) {
  if (!modalElementControls[index]) {
    $(modalElements[index]).css("display", "flex");
    modalElementControls[index] = true;
  }
}
window.onclick = closeElements;
window.onkeyup = function closeElementTest(event) {
  if (event.key === "Escape" && modalElementControls[0]) {
    closeModal(0);
    return;
  } else if (event.key === "Escape" && modalElementControls[1]) {
    closeModal(1);
    return;
  } else if (event.key === "Escape" && modalElementControls[2]) {
    closeModal(2);
    return;
  }
};

function closeElements(event) {
  if (event.target == loginElement && modalElementControls[0]) {
    closeModal(0);
    return;
  } else if (event.target == registerElement && modalElementControls[1]) {
    closeModal(1);
  } else if (event.target == profilElement && modalElementControls[2]) {
    closeModal(2);
  }
}

function fromLoginToRegister() {
  closeModal(0);
  openModal(1);
}

function fromRegisterToLogin() {
  closeModal(1);
  openModal(0);
}

function toLeftSlide() {
  console.log("none : " + slideIndex);
  slides[slideIndex].style.display = "none";
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 3;
  }
  console.log("flex : " + slideIndex);
  slides[slideIndex].style.display = "flex";
}

function toRightSlide() {
  slides[slideIndex].style.display = "none";
  slideIndex++;
  if (slideIndex == 4) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "flex";
}
var profilElements = $(".profil-element");
var profilElementControls = [true, false, false, false, false];
var profilElementStyles = $(".nav-button");
var profilButtonContainer = document.getElementsByClassName(
  "profil-nav-button-container"
)[0];
var setProfilElements = $(".set-profil-element");
var setProfilElementControls = [true, false, false, false];
var setProfilStyles = $(".set-profil-a");

function openTest(index) {
  for (var i = 0; i < profilElementControls.length; i++) {
    if (profilElementControls[i]) {
      $(profilElements[i]).css("display", "none");
      $(profilElementStyles[i]).css({
        "background-color": "rgb(0,0,0)",
        color: "white",
      });
      profilElementControls[i] = false;
    }
  }
  $(profilElementStyles[index]).css({
    "background-color": "rgb(12,12,12)",
    color: "rgba(245, 222, 179, 0.815)",
  });
  $(profilElements[index]).css("display", "flex");
  profilElementControls[index] = true;
  if (index == 1) {
    profilButtonContainer.style.display = "flex";
  } else {
    profilButtonContainer.style.display = "none";
  }
}

function openSetProfilElement(index) {
  for (var i = 0; i < setProfilElementControls.length; i++) {
    if (setProfilElementControls[i]) {
      $(setProfilElements[i]).css("display", "none");
      $(setProfilStyles[i]).css({
        "background-color": "rgb(4,4,4)",
        color: "rgba(194,194,194)",
      });
      setProfilElementControls[i] = false;
    }
  }
  $(setProfilStyles[index]).css({
    "background-color": "rgb(12,12,12)",
    color: "rgba(245, 222, 179, 0.815)",
  });
  $(setProfilElements[index]).css("display", "flex");
  setProfilElementControls[index] = true;
}

var profilControl = false;

function setProfilButtonStyle(index, bgColor, txtColor) {
  profilButtons[index].style.backgroundColor = bgColor;
  profilButtons[index].style.color = txtColor;
}

function searchIconClick() {
  searchIcon.style.display = "none";
}

function searchIconTest() {
  searchIcon.style.display = "block";
}

function navTest() {
  navElementTest.style.display = "block";
}

function navTestLeave() {
  navElementTest.style.display = "none";
}

/*
    Input control
*/

var loginLabel = document.getElementsByClassName("login-label");
var formButtons = document.getElementsByClassName("form-submit-button");
var modeControl = false;

function setMode() {
  var bodyLightColor = "#F0F5F9";
  var bodyDarkColor = "rgb(3,3,3)";
  var bodyLightTextColor = "black";
  if (!modeControl) {
    $("#light-icon").css("display", "none");
    $("#dark-icon").css("display", "block");
    $("#header").css("background-color", bodyLightColor);
    $("#footer").css({
      "background-color": bodyLightColor,
      color: bodyLightTextColor,
    });
    $("#nav-element").css({
      "background-color": bodyLightColor,
      color: bodyLightTextColor,
    });
    $(".header-login").first().css({
      "background-color": bodyLightColor,
      color: bodyLightTextColor,
    });
    $(".header-login-form").first().css("background-color", "white");
    $("#login-frame").attr("src", "image/black frame.png");
    $("#login-image").attr("src", "image/black user.png");
    for (i = 0; i < loginLabel.length; i++) {
      $(loginLabel[i]).css({
        color: bodyLightTextColor,
        "background-color": "white",
        boxShadow: "0px 0px 4px black",
      });
    }
    for (var i = 0; i < formButtons.length; i++) {
      $(formButtons[i]).css({
        "background-color": "black",
        boxShadow: "0px 0px 4px black",
        color: "white",
      });
    }
    $(".left-main-home-page").css("background-color", "#52616B");
    $(".search-box-icon-button").first().css({
      "background-color": bodyLightColor,
      color: bodyLightTextColor,
    });
    $(".ul-categori").css({
      "background-color": bodyLightTextColor,
      color: "#d6d6d6",
    });
    modeControl = true;
  } else {
    lightIcon.style.display = "block";
    darkIcon.style.display = "none";
    headerElement.style.backgroundColor = bodyDarkColor;
    navElement.style.backgroundColor = bodyDarkColor;
    headerButton.style.backgroundColor = bodyDarkColor;
    searchButton.style.backgroundColor = bodyDarkColor;
    searchButton.style.color = "rgba(245, 222, 179)";
    navElement.style.color = "gray";
    headerButton.style.color = "gray";
    document.body.style.backgroundColor = "black";
    modeControl = false;
  }
}
