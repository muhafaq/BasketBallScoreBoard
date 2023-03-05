
let homeBoardScore = document.getElementById("homeBoard")
let hbCount = 0;
function hbincrement1() {
    hbCount += 1;
    homeBoardScore.innerText = hbCount
}

function hbincrement2() {
    hbCount  += 2 ;
    homeBoardScore.innerText = hbCount
}

function hbincrement3() {
    hbCount += 3;
    homeBoardScore.innerText = hbCount
}

let resetCount1 = 0;
function reset1() {

document.getElementById("homeBoard").innerText = resetCount1
homeBoardScore.innerText = 0
hbCount = 0;

}

let guestBoardScore = document.getElementById("guestBoard")
let gbCount = 0;
function gbincrement1() {
    gbCount += 1;
    guestBoardScore.innerText = gbCount
}
function gbincrement2() {
    gbCount += 2;
    guestBoardScore.innerText = gbCount
}
function gbincrement3() {
    gbCount += 3;
    guestBoardScore.innerText = gbCount
}

let resetCount2 = 0;
function reset2() {

document.getElementById("guestBoard").innerText = resetCount2
guestBoardScore.innerText = 0
gbCount = 0;
}

