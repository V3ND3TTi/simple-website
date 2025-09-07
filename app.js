'use strict';

const toggleBtn = document.querySelector('.btn');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className === "light-theme") {
        toggleBtn.textContent = "Dark";
    } else {
        toggleBtn.textContent = "Light";
    }

    console.log('current class name: ' + className);    
});