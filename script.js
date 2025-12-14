const btn = document.getElementById("banana_button");
const container = document.querySelector('.main__game');

container.style.position = 'relative';
btn.style.position = 'absolute';

function moverBtn() {
    const anchoCont = container.clientWidth - btn.clientWidth;
    const altoCont = container.clientHeight - btn.clientHeight;
    btn.style.left = Math.random() * anchoCont + 'px';
    btn.style.top = Math.random() * altoCont + 'px';
}

document.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;
    const distancia = Math.hypot(e.clientX - centroX, e.clientY - centroY);
    
    if (distancia < 100) moverBtn();
});

window.onload = moverBtn;