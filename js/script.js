const mario = document.querySelector('.mario');
const tube = document.querySelector('.tube');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() =>{

    console.log('loop')
    
    const tubePosition = tube.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);


if (tubePosition <= 120 && tubePosition > 0 && marioPosition < 88) {

    tube.style.animation = 'none';
    tube.style.left = `${tubePosition}px`;
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '80px'
    mario.style.marginLeft = '38px' 
    mario.style.marginBottom = '-8px' 

    clearInterval(loop);
}
}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
