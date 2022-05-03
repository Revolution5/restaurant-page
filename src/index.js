import { createHeader } from "./base";
import { createHome }  from "./home";
import { createMenu, createMenuItem } from "./menu";

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
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Our original burger, made with beef.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Our original burger, made with beef.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Our original burger, made with beef.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Our original burger, made with beef.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Our original burger, made with beef.");
    createMenuItem("../dist/images/classic-burger.webp", "Classic Burger", "Our original burger, made with beef.");
})