export function createHome() {
    let content = document.querySelector("#content");

    let homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    content.appendChild(homeContent);

    let aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us";

    homeContent.appendChild(aboutTitle);

    
}