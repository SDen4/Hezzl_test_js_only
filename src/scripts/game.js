const units = document.querySelectorAll('.game__unit');
let field = []; //массив всех ходов


for (let i = 0; i<units.length; i++) {
    let unit = units[i];
    let maxNum = units.length;
    unit.addEventListener('click', () => {
        // ход игрока
        if(unit.classList.contains('game__zero') || unit.classList.contains('game__cross')) return;
        field[i] = 1;
        unit.classList.add('game__cross');
        console.log(field);

        // random number from 0 to units.length-1
        let compNum = Math.floor( Math.random()*(maxNum) );

        // ход ИИ
        while (field[compNum] === 1 || field[compNum] === 0) {
            compNum = Math.floor( Math.random()*(maxNum) );
        }
        let unitComp = units[compNum];
        field[compNum] = 0;
        unitComp.classList.add('game__zero');
        console.log(field);

    });
};