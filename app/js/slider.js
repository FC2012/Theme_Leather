var index = 0;
sliderCarousel ();

function sliderCarousel () {
  var i ;
  var oneSlide = document.getElementsByClassName("slider__part");
  console.log(oneSlide)
  for (i = 0 ; i < oneSlide.length ; i++) {
    oneSlide[i].style.display = "none";
  }
  index++;
  if (index == oneSlide.length+1) {
     index = 1;
  }
  oneSlide[index-1].style.display = "flex";
  oneSlide[index-1].style.transition = "opacity 3s";

  setTimeout(sliderCarousel, 4000);
}
