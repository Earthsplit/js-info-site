const themes = document.querySelectorAll('#theme');
const link = document.querySelector('#themeChanger');
const copy = document.querySelector('.copy');
const code = document.querySelector('#code-lines');
let activeCopy = document.querySelector('.copied-active');

themes.forEach(item => {
    item.addEventListener('click', () => {
        link.getAttribute('href') == 'css/theme-light.css' ? 
        link.href = 'css/theme-dark.css' : 
        link.href = 'css/theme-light.css';
    });
});

copy.addEventListener('click', () =>  {
    navigator.clipboard.writeText(code.textContent);
    activeCopy.style.display = 'block';
    setTimeout(() => activeCopy.style.display = 'none', 1500);
});

