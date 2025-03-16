let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  let prevArrow = document.querySelector(".prev");
  let nextArrow = document.querySelector(".next");

  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;

  if (slideIndex === 1 || slideIndex === 5) {
    prevArrow.style.color = "black";
    nextArrow.style.color = "black";
  } else {
    prevArrow.style.color = "white";
    nextArrow.style.color = "white";
  }
}
