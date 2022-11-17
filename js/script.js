// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-HTML-Slider-Example/",
    }
  )
}
/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: " + randomNumber + " </p>"
  } else {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    randomNumber = randomNumber * -1
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: " + randomNumber + " </p>"
  }
}
