export function createHeader() {
    let content = document.querySelector("#content");

    let header = document.createElement("div");
    header.classList.add("header");
    content.appendChild(header);

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Best Burgers NA";
    header.appendChild(title);

    let tabs = document.createElement("div");
    let homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    let menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    let contactButton = document.createElement("button");
    contactButton.textContent = "Contact";

    tabs.appendChild(homeButton);
    tabs.appendChild(menuButton);
    tabs.appendChild(contactButton);
    header.appendChild(tabs);
}
