const images = [{
  url: "'images/Rostov-on-Don, Admiral.png'",
  title: "Rostov-on-Don, Admiral",
  city: "Rostov-on-Don<br> LCD admiral",
  area: "81 m2",
  time: "3.5 months"
}, {
  url: "'images/Sochi_Thieves.png'",
  title: "Sochi Thieves",
  city: "Sochi<br> Thieves",
  area: "105 m2",
  time: "4 months"
}, {
  url: "'images/Rostov-on-Don_Patriotic.png'",
  title: "Rostov-on-Don Patriotic",
  city: "Rostov-on-Don<br> Patriotic",
  area: "93 m2",
  time: "3 months"
}];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__navig");

  sliderActive();
  sliderArrow();

  function sliderActive() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    })
  };
};

document.addEventListener("DOMContentLoaded", initSlider);