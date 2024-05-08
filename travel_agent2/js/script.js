//images auto slide
var firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 2000);
  var pics;
  const slide = document.getElementsByClassName("slide");
  for (pics = 0; pics < slide.length; pics++) {
    slide[pics].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > slide.length) {
    firstIndex = 1;
  }

  slide[firstIndex - 1].style.display = "block";
}
automaticSlide();
