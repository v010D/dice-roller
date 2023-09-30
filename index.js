/*  Function to simulate dice rolling
*/

function randomNumberGenerator(maximum) {
    return Math.floor(Math.random() * maximum) + 1;
}

function rollMultipleDice(dice, numDice) {
    const results = [];
    for (let i = 0; i < numDice; i++) {
        results.push(randomNumberGenerator(dice));
    }
    return results;
}

function rollD4() {
    const numDice4 = parseInt(document.getElementById('numDice4').value);
    const rollResults4 = rollMultipleDice(4, numDice4);
    const staticNumber = staticNum4.value === '' ? 0 : parseInt(staticNum4.value);
    const totalRoll4 = rollResults4.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement4.textContent = `Total: ${totalRoll4}`;
    updateRollHistory('D4', rollResults4, staticNumber, totalRoll4);
}

function rollD6() {
    const numDice6 = parseInt(document.getElementById('numDice6').value);
    const rollResults6 = rollMultipleDice(6, numDice6);
    const staticNumber = staticNum6.value === '' ? 0 : parseInt(staticNum6.value);
    const totalRoll6 = rollResults6.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement6.textContent = `Total: ${totalRoll6}`;
    updateRollHistory('D6', rollResults6, staticNumber, totalRoll6);
}

function rollD8() {
    const numDice8 = parseInt(document.getElementById('numDice8').value);
    const rollResults8 = rollMultipleDice(8, numDice8);
    const staticNumber = staticNum8.value === '' ? 0 : parseInt(staticNum8.value);
    const totalRoll8 = rollResults8.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement8.textContent = `Total: ${totalRoll8}`;
    updateRollHistory('D8', rollResults8, staticNumber, totalRoll8);
}

function rollD10() {
    const numDice10 = parseInt(document.getElementById('numDice10').value);
    const rollResults10 = rollMultipleDice(10, numDice10);
    const staticNumber = staticNum10.value === '' ? 0 : parseInt(staticNum10.value); // Get the static number from the input
    const totalRoll10 = rollResults10.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement10.textContent = `Total: ${totalRoll10}`;
    updateRollHistory('D10', rollResults10, staticNumber, totalRoll10);
}

function rollD100() {
    const numDice100 = parseInt(document.getElementById('numDice100').value);
    const rollResults100 = rollMultipleDice(100, numDice100);
    const staticNumber = staticNum100.value === '' ? 0 : parseInt(staticNum100.value); // Get the static number from the input
    const totalRoll100 = rollResults100.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement100.textContent = `Total: ${totalRoll100}`;
    updateRollHistory('D100', rollResults100, staticNumber, totalRoll100);
}

function rollD12() {
    const numDice12 = parseInt(document.getElementById('numDice12').value);
    const rollResults12 = rollMultipleDice(12, numDice12);
    const staticNumber = staticNum12.value === '' ? 0 : parseInt(staticNum12.value); // Get the static number from the input
    const totalRoll12 = rollResults12.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement12.textContent = `Total: ${totalRoll12}`;
    updateRollHistory('D12', rollResults12, staticNumber, totalRoll12);
}

function rollD20() {
    const numDice20 = parseInt(document.getElementById('numDice20').value);
    const rollResults20 = rollMultipleDice(20, numDice20);
    const staticNumber = staticNum20.value === '' ? 0 : parseInt(staticNum20.value); // Get the static number from the input
    const totalRoll20 = rollResults20.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElement20.textContent = `Total: ${totalRoll20}`;
    updateRollHistory('D20', rollResults20, staticNumber, totalRoll20);
}

function rollCustom() {
    const numSides = parseInt(numSidesCustom.value);
    const numDice = parseInt(numDiceCustom.value);
    const rollResults = rollMultipleDice(numSides, numDice);
    const staticNumber = staticNumCustom.value === '' ? 0 : parseInt(staticNumCustom.value);
    const totalRoll = rollResults.reduce((total, roll) => total + roll, 0) + staticNumber;
    resultElementCustom.textContent = `Total: ${totalRoll}`;
}

const rollHistoryList = document.getElementById('rollHistoryList');
const maxRollHistory = 20;
let rollHistory = [];

/* Referencing to HTML to get the interactivity
rollButton# is the button user presses
resultElement# displays the result of a roll
*/

const rollButton4 = document.getElementById('rollButton4');
const resultElement4 = document.getElementById('result4');
const staticNum4 = document.getElementById('staticNum4'); // Get the static number input element
const clearButton4 = document.getElementById('clearButton4');


const rollButton6 = document.getElementById('rollButton6');
const resultElement6 = document.getElementById('result6');
const staticNum6 = document.getElementById('staticNum6'); // Get the static number input element
const clearButton6 = document.getElementById('clearButton6');

const rollButton8 = document.getElementById('rollButton8');
const resultElement8 = document.getElementById('result8');
const staticNum8 = document.getElementById('staticNum8'); // Get the static number input element
const clearButton8 = document.getElementById('clearButton8');

const rollButton10 = document.getElementById('rollButton10');
const resultElement10 = document.getElementById('result10');
const staticNum10 = document.getElementById('staticNum10'); // Get the static number input element
const clearButton10 = document.getElementById('clearButton10');

const rollButton100 = document.getElementById('rollButton100');
const resultElement100 = document.getElementById('result100');
const staticNum100 = document.getElementById('staticNum100'); // Get the static number input element
const clearButton100 = document.getElementById('clearButton100');

const rollButton12 = document.getElementById('rollButton12');
const resultElement12 = document.getElementById('result12');
const staticNum12 = document.getElementById('staticNum12'); // Get the static number input element
const clearButton12 = document.getElementById('clearButton12');

const rollButton20 = document.getElementById('rollButton20');
const resultElement20 = document.getElementById('result20');
const staticNum20 = document.getElementById('staticNum20'); // Get the static number input element
const clearButton20 = document.getElementById('clearButton20');

const rollButtonCustom = document.getElementById('rollButtonCustom');
const resultElementCustom = document.getElementById('resultCustom');
const numSidesCustom = document.getElementById('numSidesCustom');
const numDiceCustom = document.getElementById('numDiceCustom');
const staticNumCustom = document.getElementById('staticNumCustom');
const clearButtonCustom = document.getElementById('clearButtonCustom');

const multiRollButton = document.getElementById('multiRollButton');


// Event listeners to handle button clicks

rollButton4.addEventListener('click', rollD4);
clearButton4.addEventListener('click', () => {
    resultElement4.textContent = 'Total:';
});

rollButton6.addEventListener('click', rollD6);
clearButton6.addEventListener('click', () => {
    resultElement6.textContent = 'Total:';
});

rollButton8.addEventListener('click', rollD8);
clearButton8.addEventListener('click', () => {
    resultElement8.textContent = 'Total:';
});

rollButton10.addEventListener('click', rollD10);
clearButton10.addEventListener('click', () => {
    resultElement10.textContent = 'Total:';
});

rollButton100.addEventListener('click', rollD100);
clearButton100.addEventListener('click', () => {
    resultElement100.textContent = 'Total:';
});

rollButton12.addEventListener('click', rollD12);
clearButton12.addEventListener('click', () => {
    resultElement12.textContent = 'Total:';
});

rollButton20.addEventListener('click', rollD20);
clearButton20.addEventListener('click', () => {
    resultElement20.textContent = 'Total:';
});

rollButtonCustom.addEventListener('click', rollCustom);
clearButtonCustom.addEventListener('click', () => {
    resultElementCustom.textContent = 'Total:';
});

multiRollButton.addEventListener('click', () => {
    // Get the selected dice types
    const selectedDice = getSelectedDiceTypes();

    // Roll each selected dice
    selectedDice.forEach(diceType => {
        rollDice(diceType);
    });
});

function getSelectedDiceTypes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedDice = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const diceType = parseInt(checkbox.getAttribute('data-dice-type'));
            selectedDice.push(diceType);
        }
    });

    return selectedDice;
}

function rollDice(diceType) {
    const numDice = parseInt(document.getElementById(`numDice${diceType}`).value);
    const rollResults = rollMultipleDice(diceType, numDice);
    const staticNumberElement = document.getElementById(`staticNum${diceType}`);
    const staticNumber = staticNumberElement.value === '' ? 0 : parseInt(staticNumberElement.value);
    const totalRoll = rollResults.reduce((total, roll) => total + roll, 0) + staticNumber;

    // Update result and roll history for the selected dice
    const resultElement = document.getElementById(`result${diceType}`);
    resultElement.textContent = `Total: ${totalRoll}`;
    updateRollHistory(`D${diceType}`, rollResults, staticNumber, totalRoll);
}

function updateRollHistory(diceType, rollResults, staticNumber, totalRoll) {
    const rollString = rollResults.join(', ');
    const historyItem = `${diceType} rolls: [${rollString}] + ${staticNumber} = ${totalRoll}`;

    if (rollHistory.length === maxRollHistory) {
        rollHistory.shift(); // Remove the oldest entry
    }

    rollHistory.push(historyItem);

    // Update the roll history displayed in the HTML
    rollHistoryList.innerHTML = rollHistory.map(item => `<li>${item}</li>`).join('');
}
