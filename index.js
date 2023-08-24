/* Function to simulate dice rolling
TODO: Needs to roll more than one dice
TODO: Needs to be able to add a static user input number to total roll
TODO: Needs to display each individual result when user rolls more than once (this should have a scrolling feature to see everything) 
*/

function randomNumberGenerator(maximum) {
    return Math.floor(Math.random() * maximum) + 1;
}

/* Referencing to HTML to get the interactivity
rollButton# is the button user presses
resultElement# displays the result of a roll 
*/

const rollButton4 = document.getElementById('rollButton4');
const resultElement4 = document.getElementById('result4');

const rollButton6 = document.getElementById('rollButton6');
const resultElement6 = document.getElementById('result6');

const rollButton8 = document.getElementById('rollButton8');
const resultElement8 = document.getElementById('result8');

const rollButton10 = document.getElementById('rollButton10');
const resultElement10 = document.getElementById('result10');

const rollButton100 = document.getElementById('rollButton100');
const resultElement100 = document.getElementById('result100');

const rollButton12 = document.getElementById('rollButton12');
const resultElement12 = document.getElementById('result12');

const rollButton20 = document.getElementById('rollButton20');
const resultElement20 = document.getElementById('result20');

// Evenlistener to have the button click show the result of proper dice roll
rollButton4.addEventListener('click', () => {
    const rollResult4 = randomNumberGenerator(4);
    resultElement4.textContent = `${rollResult4}`;
});

rollButton6.addEventListener('click', () => {
    const rollResult6 = randomNumberGenerator(6);
    resultElement6.textContent = `${rollResult6}`;
});

rollButton8.addEventListener('click', () => {
    const rollResult8 = randomNumberGenerator(8);
    resultElement8.textContent = `${rollResult8}`;
});

rollButton10.addEventListener('click', () => {
    const rollResult10 = randomNumberGenerator(10);
    resultElement10.textContent = `${rollResult10}`;
});

rollButton100.addEventListener('click', () => {
    const rollResult100 = randomNumberGenerator(100);
    resultElement100.textContent = `${rollResult100}`;
});

rollButton12.addEventListener('click', () => {
    const rollResult12 = randomNumberGenerator(12);
    resultElement12.textContent = `${rollResult12}`;
});

rollButton20.addEventListener('click', () => {
    const rollResult20 = randomNumberGenerator(20);
    resultElement20.textContent = `${rollResult20}`;
});
