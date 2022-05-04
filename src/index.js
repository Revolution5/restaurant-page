import { createHeader } from "./base";
import { createHome }  from "./home";
import { createMenu, createMenuItem } from "./menu";
import { createContact } from "./contact";

createHeader();
createHome();

let content = document.querySelector("#content");
let homeButton = document.querySelector(".home-button");
let menuButton = document.querySelector(".menu-button");
let contactButton = document.querySelector(".contact-button");

homeButton.addEventListener("click", function(e) {
    content.removeChild(content.lastChild);
    createHome();
})

menuButton.addEventListener("click", function(e) {
    content.removeChild(content.lastChild);
    createMenu();
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
})

contactButton.addEventListener("click", function(e) {
    content.removeChild(content.lastChild);
    createContact()
})