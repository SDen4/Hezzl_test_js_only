const units = document.querySelectorAll('.game__unit');
const windowWin = document.querySelector(".game__page_win");
const windowLose = document.querySelector(".game__page_loose");
const againBtns = document.querySelectorAll(".game__page_button");
let field = []; // array of all moves
let counter = 0; // conter of moves

for (let i = 0; i < units.length; i++) {
    let unitUser = units[i];
    unitUser.addEventListener('click', () => {
        // User's move
        if (field[i] === 1 || field[i] === 0) return;
        field[i] = 1;
        unitUser.classList.add('game__cross');
        calculateWinner(field);

        // random number from 0 to units.length-1
        let maxNum = units.length;
        let compNum = Math.floor(Math.random() * (maxNum));

        // AI's move
        while (field[compNum] === 1 || field[compNum] === 0) {
            compNum = Math.floor(Math.random() * (maxNum));
        }
        let unitComp = units[compNum];
        field[compNum] = 0;
        unitComp.classList.add('game__zero');
        calculateWinner(field);

        counter += 2;

        // console.log(counter);


        // console.log("AI: " + fieldAI);
        // console.log("Common: " + field);
    });
};

// calculating winner
function calculateWinner(field) {
    // win combinations
    const winComlinatoins = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ];

    for (let j = 0; j < winComlinatoins.length; j++) {
        let [a, b, c, d, e] = winComlinatoins[j];
        if (field[a] != undefined && field[a] === field[b] && field[b] === field[c] && field[c] === field[d] && field[d] === field[e]) {
            // console.log('win!');
            // console.log(field[a]); // выводит победителя 0 или 1
            // User win matching 
            if (field[a] === 1) {
                windowWin.classList.add("game__page_active");
            };
            // AI win matching
            if (field[a] === 0) {
                windowLose.classList.add("game__page_active");
            };

        };
    };
};

// button play again
for (let i = 0; i < againBtns.length; i++) {
    let againBtn = againBtns[i];
    againBtn.addEventListener('click', () => {
        for (let j = 0; j < units.length; j++) {
            let deleteUnit = units[j];
            deleteUnit.classList.remove("game__zero");
            deleteUnit.classList.remove("game__cross");
        };
        field.length = 0;
        counter = 0;
        windowLose.classList.remove("game__page_active");
        windowWin.classList.remove("game__page_active");
    })
};

export {counter};