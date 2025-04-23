// Update the current time every second
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime(); // Initial call

// To-Do List functionality
const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the "Done" button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done-button');
        doneButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through'; // Strike through the task text
        });

        // Create the "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => li.remove());

        // Append buttons to the task
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        // Clear the input field
        newTaskInput.value = '';
    }
});

// Placeholder for fetching quotes
function fetchQuote() {
    const quoteElement = document.querySelector('#quote p');
    quoteElement.textContent = ''; // Clear placeholder text
}
fetchQuote();

// Placeholder for fetching weather
function fetchWeather() {
    const weatherElement = document.querySelector('#weather p');
    weatherElement.textContent = 'Weather information is currently static. Replace with API integration.';
}
fetchWeather();

// Select the toggle input
const toggleInput = document.getElementById('input');

// Function to apply the theme
function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load stored theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    toggleInput.checked = isDark;
    applyTheme(isDark);
});

// Add an event listener to toggle dark mode
toggleInput.addEventListener('change', () => {
    const isDark = toggleInput.checked;
    applyTheme(isDark);
});


