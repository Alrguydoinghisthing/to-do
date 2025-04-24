function updateTime() {
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

const addTaskButton = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', () => li.style.textDecoration = 'line-through');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => li.remove());

        li.append(doneButton, deleteButton);
        todoList.appendChild(li);
        newTaskInput.value = '';
    }
});

function fetchQuote() {
    const quoteElement = document.querySelector('#quote p');
    quoteElement.textContent = '';
}
fetchQuote();

function fetchWeather() {
    const weatherElement = document.querySelector('#weather p');
    weatherElement.textContent = 'Weather information is currently static. Replace with API integration.';
}
fetchWeather();

const toggleInput = document.getElementById('input');

function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    toggleInput.checked = isDark;
    applyTheme(isDark);

    const header = document.querySelector('header');
    const headerChildren = header.querySelectorAll('*');
    header.style.opacity = '0';
    headerChildren.forEach(child => child.style.opacity = '0');
    setTimeout(() => {
        header.style.opacity = '1';
        headerChildren.forEach(child => child.style.opacity = '1');
    }, 1000);

    const editableQuote = document.querySelector('.editable-quote');
    const placeholder = document.querySelector('.placeholder');
    editableQuote.style.opacity = '0';
    placeholder.style.opacity = '0';
    setTimeout(() => {
        editableQuote.style.opacity = '1';
        placeholder.style.opacity = '1';
    }, 1000);
});

toggleInput.addEventListener('change', () => {
    const isDark = toggleInput.checked;
    applyTheme(isDark);
});


