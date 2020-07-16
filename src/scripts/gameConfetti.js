const confettiContainer = document.querySelector('.game__page_win');


function createConfetti() {
    const num = 10; // quantity
    for (let i = 1; i<=num; i++) {
        let div = document.createElement('div');
        div.className = 'game__confetti';
        confettiContainer.append(div);
    };  
};

export default createConfetti;