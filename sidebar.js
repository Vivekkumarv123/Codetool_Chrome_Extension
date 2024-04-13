document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const url = link.getAttribute('href');
        openWindow(url);
    });
});

function openWindow(url) {
    const width = window.innerWidth * 0.45; // 45% of the window width
    const height = window.innerHeight * 0.5; // 50% of the window height
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    window.open(url, '_blank', `width=${width}, height=${height}, left=${left}, top=${top}`);
}