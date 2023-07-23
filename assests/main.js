'use strict';


/**
 * add event on elemnt
 */

const addEventOnElement = function (element, type, listener) {
    if (element.length > 1) {
      for (let i = 0; i < element.length; i++) {
        element[i].addEventListener(type, listener);
      }
    } else {
      element.addEventListener(type, listener);
    }
  }

/**
 * toggle navbar 
 * */  

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElement(navToggler, "click", toggleNav);


const closeNav = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElement(navLinks, "click", closeNav);