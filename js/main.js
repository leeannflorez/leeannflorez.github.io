// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("title").style.display = "none";
    document.getElementById("nav").style.margin = "0px";

  } else {
    document.getElementById("title").style.display = "block";
  }
}