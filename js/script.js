// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-03-JS-ELSE-IF/sw.js", {
    scope: "/ICS2O-UNIT5-03-JS-ELSE-IF/",
  })
}

/**
 * This function displays an alert.
 */
function calculateAgeRating() {
  const age = parseInt(document.getElementById("age").value)
  if (age > 122) {
    document.getElementById("output").innerHTML = "Not possible."
  }
  else if (age > 17) {
    document.getElementById("output").innerHTML = "You can watch R rated movies."
  }
  else if (age > 12) {
    document.getElementById("output").innerHTML = "You can watch PG-13 rated movies."
  }
  else if (age < 13) {
    document.getElementById("output").innerHTML = "You can watch a G rated movies."
  }
  else {
    document.getElementById("output").innerHTML = "Invalid input"
  }
}
