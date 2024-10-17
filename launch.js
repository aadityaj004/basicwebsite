const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
const body = document.body;
const button = document.querySelector('.button');

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    button.classList.add('dark-mode-btn');
    darkModeCheckbox.checked = true;
}

darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        // Enable dark mode
        body.classList.add('dark-mode');
        button.classList.add('dark-mode-btn');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        // Disable dark mode
        body.classList.remove('dark-mode');
        button.classList.remove('dark-mode-btn');
        localStorage.setItem('dark-mode', 'disabled');
    }
});


window.addEventListener('load', () => {
    const overlay = document.getElementById('overlay');
    
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000); 
    }, 4000); 
});

// for loading screen, can be seen once backend is added.
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
});

