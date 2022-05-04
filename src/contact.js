export function createContact() {
    let content = document.querySelector("#content");

    let contactContent = document.createElement("div");
    contactContent.classList.add("contact-content");

    content.appendChild(contactContent);

    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info")
    contactContent.appendChild(contactInfo);

    let phone = document.createElement("div");
    phone.classList.add("phone");
    contactInfo.appendChild(phone);

    let email = document.createElement("div");
    email.classList.add("email");
    contactInfo.appendChild(email);

    let address = document.createElement("div");
    address.classList.add("address");
    contactInfo.appendChild(address);

    let phoneHeader = document.createElement("h2");
    phoneHeader.textContent = "Phone:"
    phone.appendChild(phoneHeader);
    let phoneInfo = document.createElement("p");
    phoneInfo.textContent = "123-867-5309";
    phone.appendChild(phoneInfo);

    let emailHeader = document.createElement("h2");
    emailHeader.textContent = "Email:"
    email.appendChild(emailHeader);
    let emailInfo = document.createElement("p");
    emailInfo.textContent = "burgertown@burgers.com"
    email.appendChild(emailInfo);

    let addressHeader = document.createElement("h2");
    addressHeader.textContent = "Address:"
    address.appendChild(addressHeader);
    let addressInfo = document.createElement("p");
    addressInfo.textContent = "123 Burger Street, CA";
    address.appendChild(addressInfo);

    
    
    



}