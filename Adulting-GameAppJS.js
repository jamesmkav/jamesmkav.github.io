var playerInfoStart = document.getElementById("playerInfoContainer");
var appContainer = document.getElementById("appContainer");
var currentPlayerSwitch = "ON";
var secondaryPlayerSwitch = "ON";


function gameStart() {
    playerInfoStart.style.display = "none";
    appContainer.style.display = "flex";
}

function currentPlayerON() {
    document.getElementById("middleContainer").style.backgroundColor = "white";
    document.getElementById("rightSideContainer").style.backgroundColor = "white";
    document.getElementById("secondaryPlayerContainer").style.marginRight = "5%";
    document.getElementById("nextTurnButton").style.display = "block";
    document.getElementById("currencyAndPropertyInputs").style.height = "60%";
}
function secondaryPlayerON() {
    document.getElementById("middleContainer").style.backgroundColor = "black";
    document.getElementById("rightSideContainer").style.backgroundColor = "black";
    document.getElementById("secondaryPlayerContainer").style.marginRight = "0%";
    document.getElementById("nextTurnButton").style.display = "none";
    document.getElementById("currencyAndPropertyInputs").style.height = "85%";
}