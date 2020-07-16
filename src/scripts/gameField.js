const gameField = document.querySelector('.game__field');
let unitsNumber = 25; // quantity of units in the field 5x5

function createField(num) {
    for (let i = 1; i<=num; i++) {
        let div = document.createElement('div');
        div.className = 'game__unit';
        gameField.append(div);
    };
};

createField(unitsNumber);