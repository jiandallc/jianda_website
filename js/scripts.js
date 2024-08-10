function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
}

// 获取footer元素
const footer = document.querySelector('footer');

// 当鼠标移到footer上时，隐藏footer
footer.addEventListener('mouseover', () => {
    footer.classList.add('hidden');
});

// 当鼠标移开footer时，显示footer
footer.addEventListener('mouseout', () => {
    footer.classList.remove('hidden');
});
