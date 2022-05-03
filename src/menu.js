export function createMenu() {
    let content = document.querySelector("#content");

    let menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    content.appendChild(menuContent);

    let menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");
    menuContent.appendChild(menuGrid);
}

export function createMenuItem(imageLink, title, description) {
    let menuGrid = document.querySelector(".menu-grid");

    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuGrid.appendChild(menuItem);

    let menuItemImage = document.createElement("img");
    menuItemImage.src = imageLink;
    menuItem.appendChild(menuItemImage);

    let menuItemTitle = document.createElement("h2");
    menuItemTitle.textContent = title;
    menuItem.appendChild(menuItemTitle);

    let menuItemDescription = document.createElement("p");
    menuItemDescription.textContent = description;
    menuItem.appendChild(menuItemDescription);
}