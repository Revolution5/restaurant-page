export function createContact() {
    let content = document.querySelector("#content");

    let contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    content.appendChild(contactContent);
}