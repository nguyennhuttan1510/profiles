var prevScrollpos = window.pageYOffset;
var onScroll = function () {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-92px";
    }
    prevScrollpos = currentScrollPos;
  };
};

onScroll();
