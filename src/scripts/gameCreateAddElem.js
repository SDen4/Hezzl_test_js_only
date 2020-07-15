let newRows = 8;
let addUnits = 3;
let currRows = 5;
let newUnits = 24;
const gameField = document.querySelector('.game__field');


function createAddElements() {
    for (let i = 0; i<currRows; i++) {
        for(let j = 0; j<addUnits; j++) {
            let addDiv = document.createElement('div');
            addDiv.className = 'game__unit game__unit_add';
            gameField.insertBefore(addDiv, gameField.children[5 + 8*i]);
        }
    };
    for (let i = 0; i<newUnits; i++) {
        let addDiv = document.createElement('div');
        addDiv.className = 'game__unit game__unit_add';
        gameField.append(addDiv);
    }
};




export default createAddElements;