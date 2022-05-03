export function createHeader() {
    let content = document.querySelector("#content");

    let header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Burger Town";
    header.appendChild(title);

    let tabs = document.createElement("div");
    tabs.classList.add("tabs");

    let homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("home-button");

    let menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("menu-button");

    let contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("contact-button");

    tabs.appendChild(homeButton);
    tabs.appendChild(menuButton);
    tabs.appendChild(contactButton);
    header.appendChild(tabs);
}
