// content.js
console.log('Content script loaded');

// Example of sending a message to the background script
// chrome.runtime.sendMessage({ message: 'Hello from content script' }, (response) => {
//   console.log('Received response from background:', response);
// });


// Wait for the DOM to load before adding the tooltip
window.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('tooltip'); // Ensure the button exists in the DOM
  console.log(button);
  if (button) {
    console.log("button clicked");
    showTooltip(button, 'Click this button to perform an action!');
  } else {
    console.log('Button not found');
  }
});

function showTooltip(element, message) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = message;

  const rect = element.getBoundingClientRect();
  tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
  tooltip.style.left = `${rect.left + window.scrollX + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;

  document.body.appendChild(tooltip);
  tooltip.classList.add('show');

  setTimeout(() => {
    tooltip.classList.remove('show');
    document.body.removeChild(tooltip);
  }, 3000);
}


// content.js
console.log('Content script loaded');

// Delay to allow React to render the button
setTimeout(() => {
  const button = document.getElementById('tooltip'); // Ensure the button exists in the DOM
  console.log(button); // Log the button, even if it's null

  if (button) {
    console.log("Button found and tooltip shown");
    showTooltip(button, 'Click this button to perform an action!');
  } else {
    console.log('Button not found');
  }
}, 1000); // Wait for 1 second before checking for the button
