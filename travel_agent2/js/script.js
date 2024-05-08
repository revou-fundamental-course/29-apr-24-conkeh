//images auto slide
let firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 2000);
  let pics;
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

//for validation  form
function validation() {
  let username = document.getElementById("yourname").value;
  let email = document.getElementById("email").value;
  //console.log(username)
  if (username == "" || username == null) {
    alert("please type your name");
  } else if (email == "" || email == null) {
    alert("please type your email");
  } else {
    alert("Thank You");
  }
}
document
  .getElementById("btn-submit")
  .addEventListener("click", () => validation());
