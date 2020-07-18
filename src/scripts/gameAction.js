import createAddElements from './gameCreateAddElem';
import createConfetti from './gameConfetti';
import { arrWin8x8, arrWin5x5 } from './gameWinComb';

let units = document.querySelectorAll('.game__unit');
const gameField = document.querySelector('.game__field');
const windowWin = document.querySelector(".game__page_win");
const windowLose = document.querySelector(".game__page_loose");
const againBtns = document.querySelectorAll(".game__page_button");
let field = []; // array of all moves
let counter = 0; // counter of moves for calculating 60%
let flag = true; // flag to enable click if someone win


for (let i = 0; i < units.length; i++) {
    let unitUser = units[i];
    unitUser.addEventListener('click', () => {
        // User's move
        if (field[i] === 1 || field[i] === 0 || counter >= 16 || flag === false) return;
        field[i] = 1;
        unitUser.classList.add('game__cross');

        calculateWinner(field, arrWin5x5);

        // random number from 0 to units.length-1 for AI logic
        let maxNum = units.length;
        let compNum = Math.floor(Math.random() * (maxNum));

        // AI's move
        while (field[compNum] === 1 || field[compNum] === 0) {
            compNum = Math.floor(Math.random() * (maxNum));
        }
        let unitComp = units[compNum];
        field[compNum] = 0;
        unitComp.classList.add('game__zero');

        calculateWinner(field, arrWin5x5);
        counter += 2; // counter of moves, 2 moves: User & AI

        if (counter === 16) {
            for (let j = 0; j < field.length; j++) {
                if (field[j] == undefined) {
                    field[j] = '';
                }
            }
            // modify array of moves for new field's size: 8x8
            for (let i = 0; i < 5; i++) {
                field.splice(5 + 8 * i, 0, '', '', '');
            };
            // modify markup of the field
            gameField.classList.add('game__field_large');
            createAddElements();
        };

        units = document.querySelectorAll('.game__unit');
        for (let j = 0; j < units.length; j++) {
            let newUnitUser = units[j];
            if (counter < 16) return;
            newUnitUser.addEventListener('click', () => {
                // User's move
                if (field[j] === 1 || field[j] === 0 || counter < 16 || flag === false) return;
                field[j] = 1;
                newUnitUser.classList.add('game__cross');

                calculateWinner(field, arrWin8x8);

                // random number from 0 to units.length-1
                let newMaxNum = units.length;
                let newCompNum = Math.floor(Math.random() * (newMaxNum));

                // AI's move
                while (field[newCompNum] === 1 || field[newCompNum] === 0) {
                    newCompNum = Math.floor(Math.random() * (newMaxNum));
                }
                let newUnitComp = units[newCompNum];
                field[newCompNum] = 0;
                newUnitComp.classList.add('game__zero');

                calculateWinner(field, arrWin8x8);
                counter += 2; // counter of moves, 2 moves: User & AI
            });
        };
    });
};

// calculating win combinations
function calculateWinner(field, winCombinatoins) {

    for (let j = 0; j < winCombinatoins.length; j++) {
        let [a, b, c, d, e] = winCombinatoins[j];
        let winVars = [a, b, c, d, e];
        let winDuration = 2500; // duration of showing the win result in ms
        if (field[a] != undefined && field[a] === field[b] && field[b] === field[c] && field[c] === field[d] && field[d] === field[e]) {

            // User win matching
            if (field[a] === 1) {
                flag = false;
                // lighting win units of User
                for (let i = 0; i < winVars.length; i++) {
                    let winVar = winVars[i];
                    units[winVar].classList.add('game__unit_win_User');
                }
                // timeout to see User's win combination
                setTimeout(() => {
                    windowWin.classList.add("game__page_active");
                    createConfetti();
                }, winDuration);
            };

            // AI win matching
            if (field[a] === 0) {
                flag = false;
                // lighting win units of Ai
                for (let i = 0; i < winVars.length; i++) {
                    let winVar = winVars[i];
                    units[winVar].classList.add('game__unit_win_AI');
                }
                // timeout to see AI's win combination
                setTimeout(() => {
                    windowLose.classList.add("game__page_active");
                }, winDuration);
            };
        };
    };
};

// button Play again
for (let i = 0; i < againBtns.length; i++) {
    let againBtn = againBtns[i];
    againBtn.addEventListener('click', playAgain);
};

function playAgain() {
    // remove all X & 0 
    units = document.querySelectorAll('.game__unit');
    for (let j = 0; j < units.length; j++) {
        let deleteUnit = units[j];
        deleteUnit.classList.remove("game__zero");
        deleteUnit.classList.remove("game__cross");
    };
    // remove all additional units of 8X8
    let addUnits = document.querySelectorAll('.game__unit_add');
    for (let i = 0; i < addUnits.length; i++) {
        let addUnit = addUnits[i];
        addUnit.remove();
        gameField.classList.remove('game__field_large');
    };
    // remove confetti of winner
    let confetti = document.querySelectorAll('.game__confetti');
    for (let i = 0; i < confetti.length; i++) {
        let candy = confetti[i];
        candy.remove();
    };
    // remove units User winner lighting
    let unitsWinUser = document.querySelectorAll('.game__unit_win_User');
    for (let i = 0; i < unitsWinUser.length; i++) {
        let unitWin = unitsWinUser[i];
        unitWin.classList.remove("game__unit_win_User");
    };
    // remove units AI winner lighting
    let unitsWinAI = document.querySelectorAll('.game__unit_win_AI');
    for (let i = 0; i < unitsWinAI.length; i++) {
        let unitWin = unitsWinAI[i];
        unitWin.classList.remove("game__unit_win_AI");
    };
    // clear the field array
    field.length = 0;
    // clear the counter
    counter = 0;
    // clear the flag of enable click if someone win
    flag = true;
    // hide win and loose pages
    windowLose.classList.remove("game__page_active");
    windowWin.classList.remove("game__page_active");
};