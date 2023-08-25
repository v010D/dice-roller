/*  Function to simulate dice rolling
TODO: Needs to roll more than one dice !!DONE!!
TODO: Needs to be able to add a static user input number to total roll
TODO: Needs to display each individual result when user rolls more than once (this should have a scrolling feature to see everything)
TODO (CONT) this thing might be better served to be in some dialogue box that saves a certain amount of rolls for history
TODO: ADVANCED!!! Each set of dice should be an object for each individual that is associated to the person who pressed the button
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

/* Referencing to HTML to get the interactivity
rollButton# is the button user presses
resultElement# displays the result of a roll 
*/

const rollButton4 = document.getElementById('rollButton4');
const resultElement4 = document.getElementById('result4');
const clearButton4 = document.getElementById('clearButton4');

const rollButton6 = document.getElementById('rollButton6');
const resultElement6 = document.getElementById('result6');
const clearButton6 = document.getElementById('clearButton6');

const rollButton8 = document.getElementById('rollButton8');
const resultElement8 = document.getElementById('result8');
const clearButton8 = document.getElementById('clearButton8');

const rollButton10 = document.getElementById('rollButton10');
const resultElement10 = document.getElementById('result10');
const clearButton10 = document.getElementById('clearButton10');

const rollButton100 = document.getElementById('rollButton100');
const resultElement100 = document.getElementById('result100');
const clearButton100 = document.getElementById('clearButton100');

const rollButton12 = document.getElementById('rollButton12');
const resultElement12 = document.getElementById('result12');
const clearButton12 = document.getElementById('clearButton12');

const rollButton20 = document.getElementById('rollButton20');
const resultElement20 = document.getElementById('result20');
const clearButton20 = document.getElementById('clearButton20');

// Event listeners to handle button clicks

rollButton4.addEventListener('click', () => {
    const numDice4 = parseInt(document.getElementById('numDice4').value);
    const rollResults4 = rollMultipleDice(4, numDice4);
    const totalRoll4 = rollResults4.reduce((total, roll) => total + roll, 0);
    resultElement4.textContent = `Total: ${totalRoll4}`;
});

clearButton4.addEventListener('click', () => {
    resultElement4.textContent = 'Total:';
});

rollButton6.addEventListener('click', () => {
    const numDice6 = parseInt(document.getElementById('numDice6').value);
    const rollResults6 = rollMultipleDice(6, numDice6);
    const totalRoll6 = rollResults6.reduce((total, roll) => total + roll, 0);
    resultElement6.textContent = `Total: ${totalRoll6}`;
});

clearButton6.addEventListener('click', () => {
    resultElement6.textContent = 'Total:';
});

rollButton8.addEventListener('click', () => {
    const numDice8 = parseInt(document.getElementById('numDice8').value);
    const rollResults8 = rollMultipleDice(8, numDice8);
    const totalRoll8 = rollResults8.reduce((total, roll) => total + roll, 0);
    resultElement8.textContent = `Total: ${totalRoll8}`;
});

clearButton8.addEventListener('click', () => {
    resultElement8.textContent = 'Total:';
});

rollButton10.addEventListener('click', () => {
    const numDice10 = parseInt(document.getElementById('numDice10').value);
    const rollResults10 = rollMultipleDice(10, numDice10);
    const totalRoll10 = rollResults10.reduce((total, roll) => total + roll, 0);
    resultElement10.textContent = `Total: ${totalRoll10}`;
});

clearButton10.addEventListener('click', () => {
    resultElement10.textContent = 'Total:';
});

rollButton100.addEventListener('click', () => {
    const numDice100 = parseInt(document.getElementById('numDice100').value);
    const rollResults100 = rollMultipleDice(100, numDice100);
    const totalRoll100 = rollResults100.reduce((total, roll) => total + roll, 0);
    resultElement100.textContent = `Total: ${totalRoll100}`;
});

clearButton100.addEventListener('click', () => {
    resultElement100.textContent = 'Total:';
});

rollButton12.addEventListener('click', () => {
    const numDice12 = parseInt(document.getElementById('numDice12').value);
    const rollResults12 = rollMultipleDice(12, numDice12);
    const totalRoll12 = rollResults12.reduce((total, roll) => total + roll, 0);
    resultElement12.textContent = `Total: ${totalRoll12}`;
});

clearButton12.addEventListener('click', () => {
    resultElement12.textContent = 'Total:';
});

rollButton20.addEventListener('click', () => {
    const numDice20 = parseInt(document.getElementById('numDice20').value);
    const rollResults20 = rollMultipleDice(20, numDice20);
    const totalRoll20 = rollResults20.reduce((total, roll) => total + roll, 0);
    resultElement20.textContent = `Total: ${totalRoll20}`;
});

clearButton20.addEventListener('click', () => {
    resultElement20.textContent = 'Total:';
});