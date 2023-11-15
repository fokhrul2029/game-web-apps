// Navigation Js-----------
// When the user scrolls down 80px from the top of the document, Background color will be black of Navbar
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-section nav").style.background = "#000";
  } else {
    document.querySelector(".header-section nav").style.background = "transparent ";
  }
};
