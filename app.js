// ====variables==== 
// home buttons
const hBtn1 = document.getElementById("h+1");
const hBtn2 = document.getElementById("h+2");
const hBtn3 = document.getElementById("h+3");
// guest buttons 
const gBtn1 = document.getElementById("g+1");
const gBtn2 = document.getElementById("g+2");
const gBtn3 = document.getElementById("g+3");
// score elements
const hScore = document.getElementById("home-score");
const gScore = document.getElementById("guest-score");
// restart button
const restartBtn = document.getElementById("restart-btn");

// ====home functions====

let hPoints = 0;

function hplus1() {
    hPoints++
    hScore.textContent = hPoints
}

function hplus2() {
    hPoints += 2
    hScore.textContent = hPoints
}

function hplus3() {
    hPoints += 3
    hScore.textContent = hPoints
}

// ====guest functions==== 

let gPoints = 0;

function gplus1() {
    gPoints++
    gScore.textContent = gPoints
}

function gplus2() {
    gPoints += 2
    gScore.textContent = gPoints
}

function gplus3() {
    gPoints += 3
    gScore.textContent = gPoints
}

restartBtn.addEventListener("click", function() {
    hPoints = 0;
    gPoints = 0;
    hScore.textContent = hPoints
    gScore.textContent = gPoints
})

