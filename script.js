const btn = document.getElementById("fake__button");
const realBtn = document.getElementById("banana__button");
const container = document.querySelector('.main__game');
const volumeSlider = document.querySelector('.volume__slider');

let volume = 0.07;
const audio = new Audio('./assets/audio.mp3');

audio.loop = true;
audio.volume = volume;

container.style.position = 'relative';
btn.style.position = 'absolute';

function moveBtn() {
    const containerWidth = container.clientWidth - btn.clientWidth;
    const containerHeight = container.clientHeight - btn.clientHeight;
    
    btn.style.left = Math.random() * containerWidth + 'px';
    btn.style.top = Math.random() * containerHeight + 'px';
}

function handleMouseMove(e) {
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    
    if (distance < 200) moveBtn();
}

function handleRealButtonClick() {
    document.onmousemove = null;
    alert('YOU WON!');
    realBtn.disabled = true;
}

function handleFirstClick() {
    if (audio.paused) audio.play();
}

function handleVolumeIncrease() {
    if (volume < 1) {
        volume += 0.07;
        audio.volume = Math.min(1, volume);
        audio.playbackRate = 1 + (volume * 0.5);
        
        volumeSlider.value = Math.min(100, volume * 100);
    }
}

function handleSliderChange() {
    volume = volumeSlider.value / 100;
    audio.volume = volume;
    audio.playbackRate = 1 + (volume * 0.5);
}


function initializeGame() {
    moveBtn();
    
    document.addEventListener('mousemove', handleMouseMove);
    realBtn.addEventListener('click', handleRealButtonClick);
    
    document.addEventListener('click', handleFirstClick, { once: true });
    document.addEventListener('click', handleVolumeIncrease);
    volumeSlider.addEventListener('input', handleSliderChange);
}

window.onload = initializeGame;