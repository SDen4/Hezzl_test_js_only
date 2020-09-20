let addUnits = 3; // quantity of additional units
let currRows = 5; // current rows
let newRows = 8; // new quantity of rows
let newUnits = 24; // quantity of units for new rows
const gameField = document.querySelector('.game__field');


function createAddElements() {
    for (let i = 0; i<currRows; i++) {
        for(let j = 0; j<addUnits; j++) {
            let addDiv = document.createElement('div');
            addDiv.className = 'game__unit game__unit_add';
            gameField.insertBefore(addDiv, gameField.children[currRows + newRows*i]);
        }
    };
    for (let i = 0; i<newUnits; i++) {
        let addDiv = document.createElement('div');
        addDiv.className = 'game__unit game__unit_add';
        gameField.append(addDiv);
    }
};


export default createAddElements;