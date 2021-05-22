const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const imagesArray = document.querySelectorAll('.imgs')
const textBox = document.getElementById('text-box');

// Change modes styles
function toggleDarkLightMode(isLight) {
    let mode = isLight ? 'light' : 'dark';
    nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    document.documentElement.setAttribute('data-theme', `${mode}`);
    toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imagesArray.forEach(image => image.src = isLight ? image.src.replace('_dark', '_light') : image.src.replace('_light', '_dark'));
    localStorage.setItem('theme', mode);
}

// Event listener
toggleSwitch.addEventListener('change', event => {
    if (event.target.checked) {
        toggleDarkLightMode(false);
    } else {
        toggleDarkLightMode(true);
    }
});

// Check local storage for theme
localStorage.getItem('theme') === 'dark' ? toggleDarkLightMode(false) : toggleDarkLightMode(true);
localStorage.getItem('theme') === 'dark' ? toggleSwitch.checked = true : toggleSwitch.checked = false;