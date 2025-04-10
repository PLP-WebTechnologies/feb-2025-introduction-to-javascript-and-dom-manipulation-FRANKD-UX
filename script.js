// 1. Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = 'Text has been changed successfully!';
    dynamicText.style.color = 'green';
});

// 2. Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');

styleDemo.addEventListener('click', () => {
    styleDemo.classList.toggle('highlight');
});

// 3. Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggleContainer = document.getElementById('toggle-container');
const removableElement = document.querySelector('.removable');

let isElementVisible = true;

toggleElementBtn.addEventListener('click', () => {
    if (isElementVisible) {
        removableElement.remove();
        toggleElementBtn.textContent = 'Add Element';
    } else {
        toggleContainer.appendChild(removableElement);
        toggleElementBtn.textContent = 'Remove Element';
    }
    isElementVisible = !isElementVisible;
});

// Bonus: Change heading text on page load
window.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'JavaScript DOM Manipulation';
});
