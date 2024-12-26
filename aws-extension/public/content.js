console.log("Content script loaded");

// Create a new element
const newElement = document.createElement("div");
newElement.textContent = "This is a custom message added by the extension!";
newElement.style.position = "fixed";
newElement.style.bottom = "100px";
newElement.style.right = "100px";
newElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
newElement.style.color = "#fff";
newElement.style.padding = "10px 20px";
newElement.style.borderRadius = "5px";
newElement.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
newElement.style.zIndex = "10000";

// Append the element to the body
document.body.appendChild(newElement);


