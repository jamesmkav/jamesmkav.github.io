//Variables
var turnCounter = 1;
var currentPlayerTurn = 1;
var selectedPlayer;
var numberOfPlayers;
var playerArray = [];
var playerNameInput;
var playerClass;
var playerCounter = 0;
var totalTurns;
var manualMoneyEntry;
var classObjectsArray = [
    {
        class: "Assassin",
        classPerks: []
    },
    {
        class: "Cop",
        classPerks: []
    },
    {
        class: "Hobo",
        classPerks: []
    },
    {
        class: "SalesPerson",
        classPerks: []
    },
    {
        class: "Magician",
        classPerks: []
    },
    {
        class: "Scientist",
        classPerks: []
    },
    {
        class: "Race Car Driver",
        classPerks: []
    },
    {
        class: "Realtor",
        classPerks: []
    }
];

//Number of Players Submit Click Handler
$("#playerNumberSubmitButton").click(() => {
    numberOfPlayers = document.getElementById("numberOfPlayersInput").value;
    parsedNumberOfPlayers = parseInt(numberOfPlayers);
    if (isNaN(parsedNumberOfPlayers) || parsedNumberOfPlayers > 7 || parsedNumberOfPlayers < 2) {
        alert("Try a number between 2 and 6 you fucking idiot.");
    }
    else {
        //Generating all player objects
        numberOfPlayers = parsedNumberOfPlayers;
        $("#numberOfPlayersInfoContainer").css("display", "none");
        for (var i = 0; i < numberOfPlayers; i++) {
            playerArray[i] = {
                playerNumber: i + 1,
                name: "",
                class: "",
                money: 0,
                xp: 0,
                level: 0,
                salary: [50000, 100000, 300000, 500000, 1000000],
                children: 0,
                properties: 0,
                mobility: 2,
                classPerks: ["This will be perk 1", "This will be perk 2", "This will be perk 3", "This will be perk 4", "This will be perk 5"],
                perksColorSwitch: [false, false, false, false, false]
            }
        }
        $("#playerInfoQuestionsContainer").css("display", "block");
        $("#playerNumberDisplay").text("Player " + currentPlayerTurn + " Info");
        $("#playerInfoSubmitButton").text("Submit player " + currentPlayerTurn + " Info");
    }
});

//Selector Button Functions
function player1Selector() {
    selectedPlayer = 0;
    generateHtmlSelectedPlayerStats(0);
}
function player2Selector() {
    selectedPlayer = 1;
    generateHtmlSelectedPlayerStats(1);
}
function player3Selector() {
    selectedPlayer = 2;
    generateHtmlSelectedPlayerStats(2);
}
function player4Selector() {
    selectedPlayer = 3;
    generateHtmlSelectedPlayerStats(3);
}
function player5Selector() {
    selectedPlayer = 4;
    generateHtmlSelectedPlayerStats(4);
}
function player6Selector() {
    selectedPlayer = 5;
    generateHtmlSelectedPlayerStats(5);
}

//Manual stats editing button click handlers
//Money Edit Handler
$("#manualEditMoney").click(() => {
    do {
        moneyManualEntry = prompt("Please eneter a positive or negative integer, using the minus symbol if needed. Enter a zero to cancel.");
        parsedMoneyManualEntry = parseInt(moneyManualEntry);
        if (isNaN(parsedMoneyManualEntry)) {
            alert("Thats not a number you dolt.");
        }
        else {
            playerArray[selectedPlayer].money = playerArray[selectedPlayer].money + parsedMoneyManualEntry;
            generateHtmlSelectedPlayerStats(selectedPlayer);
        }
    }
    while (isNaN(parsedMoneyManualEntry));
});

//XP Edit Handlers
$("#manualEditXpMinus").click(() => {
    playerArray[selectedPlayer].xp = playerArray[selectedPlayer].xp - 1;
    generateHtmlSelectedPlayerStats(selectedPlayer);
});
$("#manualEditXpPlus").click(() => {
    playerArray[selectedPlayer].xp = playerArray[selectedPlayer].xp + 1;
    generateHtmlSelectedPlayerStats(selectedPlayer);
});

//Level Edit Handlers
$("#manualEditLevelMinus").click(() => {
    if (playerArray[selectedPlayer].level == 0) {
        alert("You can't go lower than zero.");
    }
    else {
        playerArray[selectedPlayer].level = playerArray[selectedPlayer].level - 1;
        generateHtmlSelectedPlayerStats(selectedPlayer);
    }
});
$("#manualEditLevelPlus").click(() => {
    if (playerArray[selectedPlayer].level == 5) {
        alert("You can't go higher than five.");
    }
    else {
        playerArray[selectedPlayer].level = playerArray[selectedPlayer].level + 1;
        generateHtmlSelectedPlayerStats(selectedPlayer);
    }
});

//Children Handlers
$("#manualEditChildrenMinus").click(() => {
    if (playerArray[selectedPlayer].children == 0) {
        alert("You can't have less than zero.");
    }
    else {
        playerArray[selectedPlayer].children = playerArray[selectedPlayer].children - 1;
        generateHtmlSelectedPlayerStats(selectedPlayer);
    }
});
$("#manualEditChildrenPlus").click(() => {
    playerArray[selectedPlayer].children = playerArray[selectedPlayer].children + 1;
    generateHtmlSelectedPlayerStats(selectedPlayer);
});

//Properties Handlers
$("#manualEditPropertiesMinus").click(() => {
    if (playerArray[selectedPlayer].properties == 0) {
        alert("You can't have less than zero.");
    }
    else {
        playerArray[selectedPlayer].properties = playerArray[selectedPlayer].properties - 1;
        generateHtmlSelectedPlayerStats(selectedPlayer);
    }
});
$("#manualEditPropertiesPlus").click(() => {
    playerArray[selectedPlayer].properties = playerArray[selectedPlayer].properties + 1;
    generateHtmlSelectedPlayerStats(selectedPlayer);
});

//Mobility Handlers
$("#manualEditMobilityMinus").click(() => {
    if (playerArray[selectedPlayer].mobility == 1) {
        alert("You can't have less than one.");
    }
    else {
        playerArray[selectedPlayer].mobility = playerArray[selectedPlayer].mobility - 1;
        generateHtmlSelectedPlayerStats(selectedPlayer);
    }  
});
$("#manualEditMobilityPlus").click(() => {
    if (playerArray[selectedPlayer].mobility == 4) {
        alert("You can't have more than 4.");
    }
    else {
        playerArray[selectedPlayer].mobility = playerArray[selectedPlayer].mobility + 1;
        generateHtmlSelectedPlayerStats(selectedPlayer);
    }
});

//Player Info Submit Click Handler
$("#playerInfoSubmitButton").click(() => {

    //Setting Name
    playerNameInput = $("#playerNameInput").val();
    playerArray[playerCounter].name = playerNameInput;
    
    //Setting Class
    playerClass = $('input[name="flexRadioDefault"]:checked').val();
    playerArray[playerCounter].class = playerClass;
    
    //Disabling Class Button and Clearing Name Input
    $('div[class="form-check"] input[name="flexRadioDefault"]:checked').remove();
    $('label[for="' + playerClass + 'Radio"').remove();

    //Increasing the counters and starting the app
    if (currentPlayerTurn > (playerArray.length - 1)) {
        $("#playerSelectorButtonsContainer").append('<button class="playerSelectorButton" onclick="player' + currentPlayerTurn + 'Selector()">' + currentPlayerTurn + '</button>');
       appStart();
    }
    else {
        $("#playerSelectorButtonsContainer").append('<button class="playerSelectorButton" onclick="player' + currentPlayerTurn + 'Selector()">' + currentPlayerTurn + '</button>');
        currentPlayerTurn++;
        playerCounter++;
        $("#playerNameInput").val("");
        $("#playerNumberDisplay").text("Player " + currentPlayerTurn + " Info");
        $("#playerInfoSubmitButton").text("Submit player " + currentPlayerTurn + " Info");
    }
});

function appStart() {
    $("#playerInfoQuestionsContainer").css("display", "none");
    $("#appMainContainer").css("display", "flex");
    $("#nextTurnButton").css("display", "block");
    currentPlayerTurn = 1;
    //Starting first turn
    playerArray[0].money = 50000
    playerArray[0].xp = 1;
    selectedPlayer = 0;
    generateHtmlSelectedPlayerStats(0);
}

//HTML Generator
function generateHtmlSelectedPlayerStats(playerArrayNumber) {
    $("#selectedPlayerTurnNameClass").text('Turn ' + turnCounter + ' for ' + playerArray[playerArrayNumber].name + ' the ' + playerArray[playerArrayNumber].class);
    $("#selectedPlayerMoney").text('Money: $' + playerArray[playerArrayNumber].money);
    $("#selectedPlayerXp").text('Experience Points: ' + playerArray[playerArrayNumber].xp);
    $("#selectedPlayerLevel").text('Current Level: ' + playerArray[playerArrayNumber].level);
    $("#selectedPlayerChildren").text('Number of Children: ' + playerArray[playerArrayNumber].children);
    $("#selectedPlayerProperties").text('Number of Properties: ' + playerArray[playerArrayNumber].properties);
    $("#selectedPlayerMobility").text('Mobility: ' + playerArray[playerArrayNumber].mobility);
    $("#perk1Text").text(playerArray[playerArrayNumber].classPerks[0]);
    $("#perk2Text").text(playerArray[playerArrayNumber].classPerks[1]);
    $("#perk3Text").text(playerArray[playerArrayNumber].classPerks[2]);
    $("#perk4Text").text(playerArray[playerArrayNumber].classPerks[3]);
    $("#perk5Text").text(playerArray[playerArrayNumber].classPerks[4]);
    //Setting the colors of perks table
    for (var k = 0; k < 6; k++) {
        if (playerArray[playerArrayNumber].perksColorSwitch[k] == false) {
            $("#tablePerk" + (k + 1)).css("background-color", "lightcoral");
            $("#tablePerk" + (k + 1)).css("opacity", "0.25");
        } 
        else {
            $("#tablePerk" + (k + 1)).css("background-color", "lightgreen");
        }
    }
    //Setting the Colors for positive and negative stats
    if (playerArray[playerArrayNumber].money < 0) {
        $("#selectedPlayerMoney").css("color", "red");
    }
    else {
        $("#selectedPlayerMoney").css("color", "green");
    }

    if (playerArray[playerArrayNumber].xp < 0) {
        $("#selectedPlayerXp").css("color", "red");
    }
    else {
        $("#selectedPlayerXp").css("color", "green");
    }
    //Turn Counter
    $("#turnCounter").text('TURN ' + turnCounter + ' of ' + totalTurns);
}





