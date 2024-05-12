let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";     //Vectorul cu imaginile de pe pagina principala 
  }
  slideIndex++;   //Rularea Imaginilor
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";   //Celelalte imagini sa nu se afiseze simultan
  setTimeout(showSlides, 2000);  //Timpul de afisare dintre ele este de 2 secunde
}
showSlides(slideIndex);

