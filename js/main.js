// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "10px";
    document.getElementById("logo").style.width = "5%";
    document.getElementById("title").style.display = "none";
    document.getElementById("navul").style.padding = "20px 0px 0px 0px";
  } else {
    document.getElementById("nav").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "10%";
    document.getElementById("title").style.display = "block";
    document.getElementById("navul").style.padding = "0px";
  }
}