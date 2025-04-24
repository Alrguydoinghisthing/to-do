let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    document.querySelector('#theme-switch svg:first-child').style.display = 'none';
    document.querySelector('#theme-switch svg:last-child').style.display = 'block';
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    document.querySelector('#theme-switch svg:first-child').style.display = 'block';
    document.querySelector('#theme-switch svg:last-child').style.display = 'none';
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});