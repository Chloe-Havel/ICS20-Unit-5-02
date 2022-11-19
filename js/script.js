// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-02/sw.js", {
    scope: "/ICS20-Unit-5-02/",
  })
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
