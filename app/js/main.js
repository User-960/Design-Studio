const images = [{
  url: "'images/Rostov-on-Don.png'",
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

  let sliderImages = document.querySelector(".info__slider__images");
  let sliderArrows = document.querySelector(".info__slider-nav");
  let sliderDots = document.querySelector(".info__slider-dots");
  let sliderTitles = document.querySelector(".info__slider__titles");
  let sliderCity = document.querySelector(".info__city");
  let sliderArea = document.querySelector(".info__area");
  let sliderTime = document.querySelector(".info__time");

  initImages();
  initArrows();
  initDots();
  initTitles();
  initCity();
  initArea();
  initTime();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    })
  };

  function initArrows() {
    sliderArrows.querySelectorAll(".info__slider-arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  };

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="info__slider__dot-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".info__slider__dot-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  };

  function initTitles() {
    images.forEach((image, index) => {
      let title = `<div class="slider__title n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
      sliderTitles.innerHTML += title;
    });
    sliderTitles.querySelectorAll(".slider__title").forEach(title => {
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      });
    });
  };

  function initCity() {
    images.forEach((image, index) => {
      let pointCity = `<div class="info__card-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}</div>`
      sliderCity.innerHTML += pointCity;
    });
  };

  function initArea() {
    images.forEach((image, index) => {
      let pointArea = `<div class="info__card-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].area}</div>`
      sliderArea.innerHTML += pointArea;
    });
  };

  function initTime() {
    images.forEach((image, index) => {
      let pointTime = `<div class="info__card-text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].time}</div>`
      sliderTime.innerHTML += pointTime;
    });
  };

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderTitles.querySelector(".active").classList.remove("active");
    sliderTitles.querySelector(".n" + num).classList.add("active");
    sliderCity.querySelector(".active").classList.remove("active");
    sliderCity.querySelector(".n" + num).classList.add("active");
    sliderArea.querySelector(".active").classList.remove("active");
    sliderArea.querySelector(".n" + num).classList.add("active");
    sliderTime.querySelector(".active").classList.remove("active");
    sliderTime.querySelector(".n" + num).classList.add("active");
  };
};

document.addEventListener("DOMContentLoaded", initSlider);