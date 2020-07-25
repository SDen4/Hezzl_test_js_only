const confettiContainer = document.querySelector('.game__page_win');

function createConfetti() {
    const num = 100; // quantity
    for (let i = 1; i<=num; i++) {
        let div = document.createElement('div');
        let rnd = Math.random();
        div.className = `game__confetti game__confetti:nth-child(${i})`;
        div.style.background = `rgba(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()}, ${rnd + .5})`;
        div.style.left = `${i/num*100}%`;
        div.style.animationDelay = `-${i*rnd}s`;
        confettiContainer.append(div);
    };  
};

export default createConfetti;