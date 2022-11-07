import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

var slider = document.querySelector(".js-nouislider-plugin");
if (slider) {
  noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 15000,
    },
  });

  slider.noUiSlider.on("update", function (values, handle) {
    let rangeSliderValues = document.querySelector(".range-slider__values");
    let value1 = Math.round(values[0]);
    let value2 = Math.round(values[1]);
    rangeSliderValues.innerHTML = `${value1}₽ - ${value2}₽`;
  });
}
