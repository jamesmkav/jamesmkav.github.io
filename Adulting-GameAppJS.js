//  INITIALIZING VARIABLES
var numberOfPlayersInput;
var numberOfTurnsInput;
var player1Name;
var player2Name;
var player3Name;
var player4Name;
var player5Name;
var player6Name;
var player1Class;
var player2Class;
var player3Class;
var player4Class;
var player5Class;
var player6Class;

var currentTurnNumber = 1;
var currentPlayerTurn = 1;
var selectedPlayerMoneyInput;
var moneyAddInt;
var dummyPlayer = {
    playerEndingTotal: 0
}
var winnerCircleArray = [dummyPlayer];
//  INITIALIZING PLAYER OBJECTS
//PLAYER 1 OBJECT
var player1MasterContainer = {
    name: "",
    className: "",
    money: 0,
    XP: 1,
    children: 0,
    property: 0,
    marriage: "Single",
    salary: [],
    currentSalary: 0,
    perks: [],
    number: 1,
    image: "",
    level: 0,
    movement: 2,
    playerEndingTotal: 0,
    endingImage: "",
    endingDescription: "",
    degree: "No"
};
//PLAYER 2 OBJECT
var player2MasterContainer = {
    name: "",
    className: "",
    money: 0,
    XP: 0,
    children: 0,
    property: 0,
    marriage: "Single",
    salary: [],
    currentSalary: 0,
    perks: [],
    number: 2,
    image: "",
    level: 0,
    movement: 2,
    playerEndingTotal: 0,
    endingImage: "",
    endingDescription: "",
    degree: "No"

};
//PLAYER 3 OBJECT
var player3MasterContainer = {
    name: "",
    className: "",
    money: 0,
    XP: 0,
    children: 0,
    property: 0,
    marriage: "Single",
    salary: [],
    currentSalary: 0,
    perks: [],
    number: 3,
    image: "",
    level: 0,
    movement: 2,
    playerEndingTotal: 0,
    endingImage: "",
    endingDescription: "",
    degree: "No"
};
//PLAYER 4 OBJECT
var player4MasterContainer = {
    name: "",
    className: "",
    money: 0,
    XP: 0,
    children: 0,
    property: 0,
    marriage: "Single",
    salary: [],
    currentSalary: 0,
    perks: [],
    number: 4,
    image: "",
    level: 0,
    movement: 2,
    playerEndingTotal: 0,
    endingImage: "",
    endingDescription: "",
    degree: "No"
};
//PLAYER 5 OBJECT
var player5MasterContainer = {
    name: "",
    className: "",
    money: 0,
    XP: 0,
    children: 0,
    property: 0,
    marriage: "Single",
    salary: [],
    currentSalary: 0,
    perks: [],
    number: 5,
    image: "",
    level: 0,
    movement: 2,
    playerEndingTotal: 0,
    endingImage: "",
    endingDescription: "",
    degree: "No"
};
//PLAYER 6 OBJECT
var player6MasterContainer = {
    name: "",
    className: "",
    money: 0,
    XP: 0,
    children: 0,
    property: 0,
    marriage: "Single",
    salary: [],
    currentSalary: 0,
    perks: [],
    number: 6,
    image: "",
    level: 0,
    movement: 2,
    playerEndingTotal: 0,
    endingImage: "",
    endingDescription: "",
    degree: "No"
};
//  ASSIGNING CLASS STATS FUNCTIONS
function assigningClassStats(className, masterContainer) {
    switch (className) {
        case "Assassin":
            masterContainer.salary = [0, 50000, 300000, 1000000];
            masterContainer.perks = ["Players within 3 spaces IN FRONT of the assassin are valid targets.", "Players within 5 spaces IN FRONT of the assassin are valid targets.", "Players within 7 spaces in either direction of the assassin are valid targets."];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/assassinImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/assassinEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "It's been a violent climb to the top but you made it. Everyone you knew is dead for one reason or another. Usually because you killed them. During your journey through life, you carved yourself a good retirement package and eventually settled into a good life in Tahiti.</br>No one in the little village that you live in knows who you really were, and you like it like this. You subsist off of a diet of fresh grilled seafood and ice cold beers that you share with the one other person you have ever shared your secret with. A stocky man you met in the village and brings you supplies. Until one day, there's a knock at the door. You answer the door and your trusted sidekick falls into your room, bleeding to death, full of bullet holes. He's clutching a black rose and implores you to take vengence upon those that did this to him.</br>Time for one last job.....";
        break;
        case "Hobo":
            masterContainer.salary = [0, 20000, 100000, 500000];
            masterContainer.perks = ["After drawing a zone card, you may move back to your space before movement, plus 2 spaces. If this is a blank space then you must draw a zone card and follow it's instructions.", "Each turn spent in jail, recieve +3 XP.", "Recieve a 1X salary bonus of all player's current salaries that are in the same zone as you in addition to your normal salary each turn."];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/hoboImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/hoboEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "No one can understand the hardship you went through to achieve great things in life. You managed to take yourself from a life on the road, to national recognition. When you walk by the train station, they don't ask YOU for change. They know you on sight. \"Thats the guy that made it\", they say. This is the best it's ever been for you! Well, since the war that is. You may still be living in a box when they find your frozen corpse on the Seine, but you were like that because you wanted to be. Not because you had to be.";
        break;
        case "Inventor":
            masterContainer.salary = [0, 40000, 200000, 1000000];
            masterContainer.perks = ["Each turn, you can try to invent something. This is done by rolling 4 dice. If you get a 20 or higher, draw an item card. You may use it at any point during your current or subsequent turn.", "With each successful invention, you may choose to take a player's item card rather than drawing one. This is done by picking it blindly out of their hand if they have multiple cards.", "Recieve 2 Item cards for each successful invention."];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/inventorImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/inventorEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "You are now the smartest person on Earth. Amazing theories bounce out of your head like payground balls, and eventually due to your contributions that create an ultimate society, you become a deity. As you approach your own death due to old age, you invent a technique for preserving a human brain and have it funtion on a high level. You use yourself as the guinea pig for this experiment and it is successful. You then gain psychic powers through the transformation and proceed to destroy the equipment that made it possible, ensuring your future as the most powerful mind ever. For eternity you dominate the galaxy essentially as a brain in a glass jar, unable to feel anything other than electrical impulses made possible by one of your inventions.";
            
        break;
        case "Magician":
            masterContainer.salary = [0, 40000, 200000, 1000000];
            masterContainer.perks = ["At any point during your turn, you may place a token on the space you are occupying. This token can be teleported to before rolling for movement during any subsequent turn and is picked back up when you do so.", "You can have 2 separate tokens in play at once", "Roll 1 Extra Die with any mini-game, player interaction, or result of a Zone Card."];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/magicianImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/magicianEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "You've had it all now. The shows, the tricks, the prestige, you're tired. You hang up your vest and decide to take some time off. Well, the only place to go now is up! So, you travel the world in search of the next big trick. Not fake stuff. Real magic. You start in Baton Rougue and learn the ways of voodoo for several years. Then across the American Southwest in search of brujo and Native American curses. Eventually your search leads you to Tibet. Where you learn to completely detach yourself from the physical universe and maipulate physical objects in spiritual form, while outside your body. After learning and perfecting this technique, you come back to the mainstream magicain circuit, performing tricks that were impossible by standard means before. Rather than dying, you simply vanish one day. People saw you go into your study one night, but you never come out. After a few days and unresponsiveness from knocking on the door, your maid bashes the door in but you simply aren't there. But a note is found! A riddle embossed on it, provoking an intrepid young soul to seek the hidden location of your remains and the answers behind your secrets.";
        break;
        case "Police":
            masterContainer.salary = [0, 40000, 200000, 750000];
            masterContainer.perks = ["Any player passed by you goes to jail for 1 Turn. You may also use the Speed Trap when passing through any of the START spaces. You may choose to park here and continue movement on your next roll. You may stay parked as many turns as you like. You receive no benefits or consequences in Life of Crime. You may NOT rob the bank. It is treated as any blank space", "You may use 3 dice for movement and recieve a $500,000 bonus instantly for each player sent to Jail", "Recieve a $1,000,000 bonus instantly for each player sent to Jail"];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/policeImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/policeEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "Though there were many shots fired your way, you managed to survive a lifetime of laying down the law.</br>Sure, you had to bend a few corners. But your pension makes it all worth it. Over the years, you visit Florida a few times and pledge to move there, once you've traveled and seen enough. Unfortunately, the country goes backrupt and all government pensions dry up, leaving you peniless. When the dust settles from the raging in the streets due to total financial meltdown, the worlds population is reduced to a few small fuctioning cities.</br>Somehow, you survive the apocalypse and spend your life lending your old detective skills to settlements you encounter.";
        break;
        case "Politician":
            masterContainer.salary = [0, 50000, 400000, 2000000];
            masterContainer.perks = ["Each turn, before moving, a vote is cast. The politician picks either even or odd, and a specific number. If the majority of players roll a number that corresponds to the politician's guess, they recieve a promotion. If not or there is a tie, they are demoted. If the politician guess the total of all players rolls with their specific number, they recieve $2,000,000 instantly. All other Promotions and Demotions through normal play apply as well.", "Recieve $5,000,000 for guessing the specific election number", "Any player in Jail pays their salary directly to you during their sentence"];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/politicianImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/politicianEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "The people will believe what you want them to believe. Everything you say is taken as the gospel. One day, just to prove your point, you are walking down the street and you shoot someone for no reason. Your approval ratings double and you are appointed embassador to the world. Theres nothing that happens without you being there. There isn't even a rebellion. The world is 100% behind you, almost in a catatonic state. You eveentually tire of being constantly asked how to deal with situations and retire to Antarctica to get away from it all. In your absence, the world deteriorates into constant war over nothing and eventually everyone is killed through nuclear warfare, except you. For your remaining days, you get drunk off of the finest wines, eat the only food left on Earth and watch the fallout's effects on the beautiful Antarctic night sky.";
        break;
        case "Racer":
            masterContainer.salary = [0, 30000, 400000, 1000000];
            masterContainer.perks = ["You may use 3 dice for movement", "When you pass a player, roll an extra die and add it to your monvement total.", "You may use 4 dice for movement."];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/racingImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/racerEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "Speed is a drug, are you are addicted. You've beat everyone on Earth in every discipline of serious racing and it's still not enough. Through a one night stand, you have a daughter. As a result, you find your purpose in life. She grows up under your wing and becomes a formidable racing opponent and eventually is the first female F1 driver. She wins every race in the season and dedicates every one of them to you beforehand. When you die, the do a lap with the hearse at Monaco before the race. Your grave is adorned with racing paraphenalia and for the next several decades, the cemetary attendant complains that he shouldn't have to move so many tires.";
        break;
        case "Sales":
            masterContainer.salary = [0, 40000, 300000, 1000000];
            masterContainer.perks = ["Every player you pass, you can try to sell something to. This is done by both players rolling two dice. If you roll a higher total, take the total of your dice and multiply it x10K and recieve this amount of money from the player.", "Sales pitches can be done at any point during your turn on any and multiple players within 5 spaces in either direction.", "You may buy Item cards at $500,000 each. This must be done before rolling for movement"];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/salesImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/salesEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "You started from the bottom and now you're here. You may have been selling insurance when you began this journey but now you're selling the world to the highest bidder. To say money isn't an object would be an injustice. You literally wipe your ass with toilet paper made of 100 dollar bills. After amassing the world's greatest fortune while not producing a single tangible object, you decide to start pulling elaborate pranks on people out of boredom. They cost several million dollars and only last for a week at most but they are incredibly effective and most victims don't know whats real for months afterwards. It eventually is made into a CBS pilot and the nation eats it up like candy. Eventually most of the population doesn't know if they are in a TV show and they start acting erratically for the possible cameras. The western world crumbles within a month and China takes over the US. You manage to talk yourself into a high cabinet psition in the new Chinese/US government and live out your remaining days being bathed daily by beautiful geishas in the new US capital in Nashville.";
        break;
        case "Spy":
            masterContainer.salary = [30000, 200000, 750000];
            masterContainer.perks = ["Take on the perks of any player in the same zone as you. You can only use one player's perks per turn.", "You may see and use the item cards of any player you are currently assuming the identity of. The item may not be used against them though. Once it has been used by the Spy, the card must be discarded by the original player like normal.", "You may assume the identity of players in adjoining zones to your current one."];
            masterContainer.image = document.getElementById("imageContainer").innerHTML = "<img id=\"selectedPlayerImage\" src=\"Adulting-Images/spyImage.jpg\">";
            masterContainer.endingImage = "<img src=\"endingImages/spyEndingImage.jpg\" id=\"endingImageSpecs\">";
            masterContainer.endingDescription = "You've been through so many disguises and had so many covers, you don't even remember who you were to begin with. If you had a family, they're all dead now anyway. Though you have saved the world many times over, no one can ever know that is was you or the part you played in it. It's time to retire. You find a small apartment in Paris with a balcony facing the Eiffel tower and settle in. But after a short time, you are bored beyond measure.</br>Finding no meaning left in your life, you slowly climb the stairs, intending to commit suicide. When you get to the top, there is already someone there about to do the same thing. Your old instincts take over and you attempt a daring rescue, grabbing their hand as they go over the edge.</br>\"Give me your other hand!\", you yell. But they slowly look you in the eye, and tell you, \"Look in locker A15. Where the tracks end.\" Then they force your hand to let go and plummet to their death without even a whisper. Quickly you leave the scene before the police arrive and make it back to you apartment. Deducing that they meant for you to find a locker at the Paris train station, you quickly go there and locate it. Inside, you find a small note. Unfurling the paper you begin to read it.</br>\"Good evening agent. Your mission if you choose to accept it....\"";
        break;
    }
}

//  GAME INFO INPUT + SETUP
function playerNumberSubmitButton() {
	document.getElementById("numberOfPlayersContainer").style.display = "none";
	numberOfPlayersInput = document.getElementById("numberOfPlayersInput").value;
	numberOfPlayers = parseInt(numberOfPlayersInput);
	document.getElementById("numberOfTurnsContainer").style.display = "block";
}

function turnNumberSubmitButton() {
	document.getElementById("numberOfTurnsContainer").style.display = "none";
	numberOfTurnsInput = document.getElementById("numberOfTurnsInput").value;
	numberOfTurns = parseInt(numberOfTurnsInput);
	document.getElementById("player1Container").style.display = "block";
}

//  PLAYER INFO INPUT + SETUP
function player1SubmitButton() {
	document.getElementById("player1Container").style.display = "none";
	player1Name = document.getElementById("player1Name").value;
    player1MasterContainer.name = player1Name;
	player1Class = document.getElementById("player1Class").value;
    player1MasterContainer.className = player1Class;
    assigningClassStats(player1Class, player1MasterContainer)
	document.getElementById("player2Container").style.display = "block";
}

function player2SubmitButton() {
	document.getElementById("player2Container").style.display = "none";
	player2Name = document.getElementById("player2Name").value;
    player2MasterContainer.name = player2Name;
	player2Class = document.getElementById("player2Class").value;
    player2MasterContainer.className = player2Class;
    assigningClassStats(player2Class, player2MasterContainer)
	if (numberOfPlayers > 2) {
		document.getElementById("player3Container").style.display = "block";
	} else {
		document.getElementById("gameStartContainer").style.display = "block";
	}
}

function player3SubmitButton() {
	document.getElementById("player3Container").style.display = "none";
	player3Name = document.getElementById("player3Name").value;
    player3MasterContainer.name = player3Name;
	player3Class = document.getElementById("player3Class").value;
    player3MasterContainer.className = player3Class;
    assigningClassStats(player3Class, player3MasterContainer)
	if (numberOfPlayers > 3) {
		document.getElementById("player4Container").style.display = "block";
	} else {
		document.getElementById("gameStartContainer").style.display = "block";
	}
}

function player4SubmitButton() {
	document.getElementById("player4Container").style.display = "none";
	player4Name = document.getElementById("player4Name").value;
    player4MasterContainer.name = player4Name;
	player4Class = document.getElementById("player4Class").value;
    player4MasterContainer.className = player4Class;
    assigningClassStats(player4Class, player4MasterContainer)
	if (numberOfPlayers > 4) {
		document.getElementById("player5Container").style.display = "block";
	} else {
		document.getElementById("gameStartContainer").style.display = "block";
	}
}

function player5SubmitButton() {
	document.getElementById("player5Container").style.display = "none";
	player5Name = document.getElementById("player5Name").value;
    player5MasterContainer.name = player5Name;
	player5Class = document.getElementById("player5Class").value;
    player5MasterContainer.className = player5Class;
    assigningClassStats(player5Class, player5MasterContainer)
	if (numberOfPlayers > 5) {
		document.getElementById("player6Container").style.display = "block";
	} else {
		document.getElementById("gameStartContainer").style.display = "block";
	}
}


function player6SubmitButton() {
	document.getElementById("player6Container").style.display = "none";
	player6Name = document.getElementById("player6Name").value;
    player6MasterContainer.name = player6Name;
	player6Class = document.getElementById("player6Class").value;
    player6MasterContainer.className = player6Class;
    assigningClassStats(player6Class, player6MasterContainer)
	document.getElementById("gameStartContainer").style.display = "block";
}

var playerContainerArray = [player1MasterContainer, player2MasterContainer, player3MasterContainer, player4MasterContainer, player5MasterContainer, player6MasterContainer];
var selectedPlayer = {};
selectedPlayer = playerContainerArray[0];

function gameStartButton() {
    document.getElementById("gameStartContainer").style.display = "none";
    document.getElementById("gameAppContainer").style.display = "block";
    document.getElementById("turnCounter").innerHTML = "Turn " + currentTurnNumber + " of " + numberOfTurns;    
    
    
    
    switch (numberOfPlayers) {        
        case 2:
        document.getElementById("player3Button").style.display = "none";
        document.getElementById("player4Button").style.display = "none";
        document.getElementById("player5Button").style.display = "none";
        document.getElementById("player6Button").style.display = "none";
            
        document.getElementById("player1Button").style.width = "35%";
        document.getElementById("player1Button").innerHTML = player1MasterContainer.name;
        document.getElementById("player2Button").style.width = "35%";
        document.getElementById("player2Button").innerHTML = player2MasterContainer.name;
        break;
        
        case 3:
        document.getElementById("player4Button").style.display = "none";
        document.getElementById("player5Button").style.display = "none";
        document.getElementById("player6Button").style.display = "none";
            
        document.getElementById("player1Button").style.width = "25%";
        document.getElementById("player1Button").innerHTML = player1MasterContainer.name;
        document.getElementById("player2Button").style.width = "25%";
        document.getElementById("player2Button").innerHTML = player2MasterContainer.name;
        document.getElementById("player3Button").style.width = "25%";
        document.getElementById("player3Button").innerHTML = player3MasterContainer.name;
        break;
        
        case 4:
        document.getElementById("player5Button").style.display = "none";
        document.getElementById("player6Button").style.display = "none";
            
        document.getElementById("player1Button").style.width = "25%";
        document.getElementById("player1Button").innerHTML = player1MasterContainer.name;
        document.getElementById("player2Button").style.width = "25%";
        document.getElementById("player2Button").innerHTML = player2MasterContainer.name;
        document.getElementById("player3Button").style.width = "25%";
        document.getElementById("player3Button").innerHTML = player3MasterContainer.name;
        document.getElementById("player4Button").style.width = "25%";
        document.getElementById("player4Button").innerHTML = player4MasterContainer.name;
        break;
        
        case 5:
        document.getElementById("player6Button").style.display = "none";
            
        document.getElementById("player1Button").style.width = "15%";
        document.getElementById("player1Button").innerHTML = player1MasterContainer.name;
        document.getElementById("player2Button").style.width = "15%";
        document.getElementById("player2Button").innerHTML = player2MasterContainer.name;
        document.getElementById("player3Button").style.width = "15%";
        document.getElementById("player3Button").innerHTML = player3MasterContainer.name;
        document.getElementById("player4Button").style.width = "15%";
        document.getElementById("player4Button").innerHTML = player4MasterContainer.name;
        document.getElementById("player5Button").style.width = "15%";
        document.getElementById("player5Button").innerHTML = player5MasterContainer.name;

        break;
            
        case 6:            
        document.getElementById("player1Button").style.width = "10%";
        document.getElementById("player1Button").innerHTML = player1MasterContainer.name;
        document.getElementById("player2Button").style.width = "10%";
        document.getElementById("player2Button").innerHTML = player2MasterContainer.name;
        document.getElementById("player3Button").style.width = "10%";
        document.getElementById("player3Button").innerHTML = player3MasterContainer.name;
        document.getElementById("player4Button").style.width = "10%";
        document.getElementById("player4Button").innerHTML = player4MasterContainer.name;
        document.getElementById("player5Button").style.width = "10%";
        document.getElementById("player5Button").innerHTML = player5MasterContainer.name;
        document.getElementById("player6Button").style.width = "10%";
        document.getElementById("player6Button").innerHTML = player6MasterContainer.name;
        break;
        }
    borderSwitch(currentPlayerTurn)
    playerSelectDisplay()
}

//SELECTOR BUTTONS START
function player1Selector() {
    selectedPlayer = playerContainerArray[0];
    playerSelectDisplay()
}
function player2Selector() {
    selectedPlayer = playerContainerArray[1];
    playerSelectDisplay()
}
function player3Selector() {
    selectedPlayer = playerContainerArray[2];
    playerSelectDisplay()
}
function player4Selector() {
    selectedPlayer = playerContainerArray[3];
    playerSelectDisplay()
}
function player5Selector() {
    selectedPlayer = playerContainerArray[4];
    playerSelectDisplay()
}
function player6Selector() {
    selectedPlayer = playerContainerArray[5];
    playerSelectDisplay()
}
//SELECTOR BUTTONS END
//SELECTED PLAYER REFRESH START
function playerSelectDisplay() {
    document.getElementById("turnCounter").innerHTML = "Turn " + currentTurnNumber + " of " + numberOfTurns;    
    document.getElementById("imageContainer").innerHTML = selectedPlayer.image;
    document.getElementById("selectedPlayerNameAndClass").innerHTML = selectedPlayer.name + " the " + selectedPlayer.className;
    document.getElementById("selectedPlayerSalary").innerHTML = "CURRENT SALARY: $" + selectedPlayer.currentSalary;
    document.getElementById("selectedPlayerLevel").innerHTML = "LEVEL: " + selectedPlayer.level;
    document.getElementById("selectedPlayerMoney").innerHTML = "MONEY: $" + selectedPlayer.money;
    document.getElementById("selectedPlayerXP").innerHTML = "XP: " + selectedPlayer.XP;
    document.getElementById("selectedPlayerMaritalStatus").innerHTML = "MARITAL STATUS: " + selectedPlayer.marriage;
    document.getElementById("selectedPlayerChildren").innerHTML = "CHILDREN: " + selectedPlayer.children;
    document.getElementById("selectedPlayerProperty").innerHTML = "PROPERTIES: " + selectedPlayer.property;
    document.getElementById("selectedPlayerMovement").innerHTML = "MOVEMENT: " + selectedPlayer.movement;
    document.getElementById("selectedPlayerDegree").innerHTML = "DEGREE: " + selectedPlayer.degree;
    
    document.getElementById("selectedPlayerPerksContainer1").innerHTML = "Level 1 : " + selectedPlayer.perks[0];
    document.getElementById("selectedPlayerPerksContainer2").innerHTML = "Level 2 : " + selectedPlayer.perks[1];
    document.getElementById("selectedPlayerPerksContainer3").innerHTML = "Level 3 : " + selectedPlayer.perks[2];
    
    //PERKS OPACITY SWITCH 
    switch (selectedPlayer.level) {
        case 0:
            document.getElementById("selectedPlayerPerksContainer1").style.opacity = ".25";
            document.getElementById("selectedPlayerPerksContainer2").style.opacity = ".25";
            document.getElementById("selectedPlayerPerksContainer3").style.opacity = ".25";
            document.getElementById("selectedPlayerPerksContainer1").style.fontWeight = "normal";
            document.getElementById("selectedPlayerPerksContainer2").style.fontWeight = "normal";
            document.getElementById("selectedPlayerPerksContainer3").style.fontWeight = "normal"; 
            break;
        case 1:
            document.getElementById("selectedPlayerPerksContainer1").style.opacity = "1";
            document.getElementById("selectedPlayerPerksContainer2").style.opacity = ".25";
            document.getElementById("selectedPlayerPerksContainer3").style.opacity = ".25";
            document.getElementById("selectedPlayerPerksContainer1").style.fontWeight = "bolder";
            document.getElementById("selectedPlayerPerksContainer2").style.fontWeight = "normal";
            document.getElementById("selectedPlayerPerksContainer3").style.fontWeight = "normal"; 
            break;
        case 2:
            document.getElementById("selectedPlayerPerksContainer1").style.opacity = "1";
            document.getElementById("selectedPlayerPerksContainer2").style.opacity = "1";
            document.getElementById("selectedPlayerPerksContainer3").style.opacity = ".25";
            document.getElementById("selectedPlayerPerksContainer1").style.fontWeight = "bolder";
            document.getElementById("selectedPlayerPerksContainer2").style.fontWeight = "bolder";
            document.getElementById("selectedPlayerPerksContainer3").style.fontWeight = "normal"; 
            break;
        case 3:
            document.getElementById("selectedPlayerPerksContainer1").style.opacity = "1";
            document.getElementById("selectedPlayerPerksContainer2").style.opacity = "1";
            document.getElementById("selectedPlayerPerksContainer3").style.opacity = "1";
            document.getElementById("selectedPlayerPerksContainer1").style.fontWeight = "bolder";
            document.getElementById("selectedPlayerPerksContainer2").style.fontWeight = "bolder";
            document.getElementById("selectedPlayerPerksContainer3").style.fontWeight = "bolder"; 
            break;
    }
}
//SELECTED PLAYER REFRESH END




//BORDER SWITCH START
function borderSwitch(playerTurnNumber) {
    switch (playerTurnNumber) {
        case 1:
            document.getElementById("player1Button").style.border = "10px solid black";
            document.getElementById("player2Button").style.border = "none";
            document.getElementById("player3Button").style.border = "none";
            document.getElementById("player4Button").style.border = "none";
            document.getElementById("player5Button").style.border = "none";
            document.getElementById("player6Button").style.border = "none";
            break;
        case 2:
            document.getElementById("player1Button").style.border = "none";
            document.getElementById("player2Button").style.border = "10px solid black";
            document.getElementById("player3Button").style.border = "none";
            document.getElementById("player4Button").style.border = "none";
            document.getElementById("player5Button").style.border = "none";
            document.getElementById("player6Button").style.border = "none";
            break;
        case 3:
            document.getElementById("player1Button").style.border = "none";
            document.getElementById("player2Button").style.border = "none";
            document.getElementById("player3Button").style.border = "10px solid black";
            document.getElementById("player4Button").style.border = "none";
            document.getElementById("player5Button").style.border = "none";
            document.getElementById("player6Button").style.border = "none";
            break;
        case 4:
            document.getElementById("player1Button").style.border = "none";
            document.getElementById("player2Button").style.border = "none";
            document.getElementById("player3Button").style.border = "none";
            document.getElementById("player4Button").style.border = "10px solid black";
            document.getElementById("player5Button").style.border = "none";
            document.getElementById("player6Button").style.border = "none";
            break;
        case 5:
            document.getElementById("player1Button").style.border = "none";
            document.getElementById("player2Button").style.border = "none";
            document.getElementById("player3Button").style.border = "none";
            document.getElementById("player4Button").style.border = "none";
            document.getElementById("player5Button").style.border = "10px solid black";
            document.getElementById("player6Button").style.border = "none";
            break;
        case 6:
            document.getElementById("player1Button").style.border = "none";
            document.getElementById("player2Button").style.border = "none";
            document.getElementById("player3Button").style.border = "none";
            document.getElementById("player4Button").style.border = "none";
            document.getElementById("player5Button").style.border = "none";
            document.getElementById("player6Button").style.border = "10px solid black";
            break;
    }
}
//BORDER SWITCH END
// TURNKEEPER MECHANISM START
function nextTurnButton() {
    if (currentPlayerTurn < numberOfPlayers) {
        currentPlayerTurn = currentPlayerTurn + 1;
        borderSwitch(currentPlayerTurn)
        switch (currentPlayerTurn) {                
            case 2:
                selectedPlayer = playerContainerArray[1];
                nextTurnMoneyFunction(playerContainerArray[1])
                playerSelectDisplay()
                break;
            case 3:
                selectedPlayer = playerContainerArray[2];
                nextTurnMoneyFunction(playerContainerArray[2])
                playerSelectDisplay()
                break;
            case 4:
                selectedPlayer = playerContainerArray[3];
                nextTurnMoneyFunction(playerContainerArray[3])
                playerSelectDisplay()
                break;
            case 5:
                selectedPlayer = playerContainerArray[4];
                nextTurnMoneyFunction(playerContainerArray[4])
                playerSelectDisplay()
                break;
            case 6:
                selectedPlayer = playerContainerArray[5];
                nextTurnMoneyFunction(playerContainerArray[5])
                playerSelectDisplay()
                break;
        }
    }
    else if (currentPlayerTurn = numberOfPlayers) {
    if (currentTurnNumber >= numberOfTurns) {
             endingSequence()
             }
    else {
        currentPlayerTurn = 1;
        currentTurnNumber++;
        borderSwitch(currentPlayerTurn)
        selectedPlayer = playerContainerArray[0];
        nextTurnMoneyFunction(playerContainerArray[0])
        playerSelectDisplay()
    }
    }
    document.getElementById("turnCounter").innerHTML = "Turn " + currentTurnNumber + " of " + numberOfTurns;    
}
// TURNKEEPER MECHANISM END


// NEXT TURN MONEY AND XP FUNCTIONS - SALARY, DEBT, PROPERTY, CHILDREN, MARITAL STATUS
function nextTurnMoneyFunction(playerContainerArrayItemNumber) {
            //MONEY + SALARY + DEBT
            if (playerContainerArrayItemNumber.money < 0) {
                playerContainerArrayItemNumber.money = playerContainerArrayItemNumber.money + playerContainerArrayItemNumber.currentSalary + (playerContainerArrayItemNumber.property * 100000) + (playerContainerArrayItemNumber.money/20);
                playerContainerArrayItemNumber.money = Math.round(playerContainerArrayItemNumber.money);
            }
            else {
                playerContainerArrayItemNumber.money = playerContainerArrayItemNumber.money + playerContainerArrayItemNumber.currentSalary + (playerContainerArrayItemNumber.property * 100000);            }
            //XP + FAMILY + PROPERTY
            if (playerContainerArrayItemNumber.marriage == "Married") {
                playerContainerArrayItemNumber.XP = playerContainerArrayItemNumber.XP + 2 + playerContainerArrayItemNumber.children;
            }
            else {
            playerContainerArrayItemNumber.XP = playerContainerArrayItemNumber.XP + 1 + playerContainerArrayItemNumber.children;
            }
}

//STATS BUTTONS FUNCTIONS
function addSalaryButton() {
    selectedPlayer.money = selectedPlayer.money + selectedPlayer.currentSalary;
    playerSelectDisplay()
}
function subtractSalaryButton() {
    selectedPlayer.money = selectedPlayer.money - selectedPlayer.currentSalary;
    playerSelectDisplay()
}
function addLevelButton() {
    if (selectedPlayer.level == 3) {
        window.alert("You can't have a higher level currently.");
    }
    else if (selectedPlayer.degree == "No") {
        window.alert("You need to have a degree first.");

    }
     else {
         selectedPlayer.level = selectedPlayer.level + 1;
         salaryIterateForward()
        }
    playerSelectDisplay()
}
function subtractLevelButton() {
    if (selectedPlayer.level == 0) {
        window.alert("You can't have a lower level currently.");
    }
    else {
        selectedPlayer.level = selectedPlayer.level - 1;
        salaryIterateBackward()
        }
    playerSelectDisplay()
}
function salaryIterateForward() {
    switch (selectedPlayer.level) {
        case 1:
            selectedPlayer.currentSalary = selectedPlayer.salary[1];
            break;
        case 2:
            selectedPlayer.currentSalary = selectedPlayer.salary[2];
            break;
        case 3:
            selectedPlayer.currentSalary = selectedPlayer.salary[3];
            break;
    }
}
function salaryIterateBackward() {
    switch (selectedPlayer.level) {
        case 0:
            selectedPlayer.currentSalary = selectedPlayer.salary[0];
            break;
        case 1:
            selectedPlayer.currentSalary = selectedPlayer.salary[1];
            break;
        case 2:
            selectedPlayer.currentSalary = selectedPlayer.salary[2];
            break;
    }
}




function addMoneyButton() {
    selectedPlayerMoneyInput = prompt("Please enter a number to ADD.", "No commas please...");
    moneyAddInt = parseInt(selectedPlayerMoneyInput);
        while (isNaN(moneyAddInt)) {
            window.alert("Thats not a valid number. Try entering a number with no letters or punctuation");
            selectedPlayerMoneyInput = prompt("Please enter a number to ADD.", "No commas please...");
            moneyAddInt = parseInt(selectedPlayerMoneyInput);
        }
    selectedPlayer.money = selectedPlayer.money + moneyAddInt;
    playerSelectDisplay()
}
function subtractMoneyButton() {
    selectedPlayerMoneyInput = prompt("Please enter a number to SUBTRACT.", "No commas please...");
    moneySubtractInt = parseInt(selectedPlayerMoneyInput);
        while (isNaN(moneySubtractInt)) {
            window.alert("Thats not a valid number. Try entering a number with no letters or punctuation");
            selectedPlayerMoneyInput = prompt("Please enter a number to SUBTRACT.", "No commas please...");
            moneySubtractInt = parseInt(selectedPlayerMoneyInput);
        }
    selectedPlayer.money = selectedPlayer.money - moneySubtractInt;
    playerSelectDisplay()
}
function addXPButton() {
    selectedPlayer.XP = selectedPlayer.XP + 1;
    playerSelectDisplay()
}
function subtractXPButton() {
    selectedPlayer.XP = selectedPlayer.XP - 1;
    playerSelectDisplay()
}
function marriageButton() {
    selectedPlayer.marriage = "Married";
    playerSelectDisplay()
}
function singleButton() {
    selectedPlayer.marriage = "Single";
    playerSelectDisplay()
}
function addChildrenButton() {
    selectedPlayer.children = selectedPlayer.children + 1;
    playerSelectDisplay()
}
function subtractChildrenButton() {
    if (selectedPlayer.children < 1) {
        window.alert("You can't have less children currently.")
    }
else {
        selectedPlayer.children = selectedPlayer.children - 1;
}
    playerSelectDisplay()
}
   
function buyPropertyButton() {
     if (selectedPlayer.property == 6) {
        window.alert("You can't have more property currently.");
    }
    else {
    selectedPlayer.money = selectedPlayer.money - 1000000;
    selectedPlayer.property = selectedPlayer.property + 1;
}
    playerSelectDisplay()
}

function sellPropertyButton() {
    if (selectedPlayer.property < 1) {
        window.alert("You can't have less property currently.");
    }
else {
    selectedPlayer.money = selectedPlayer.money + 1000000;
    selectedPlayer.property = selectedPlayer.property - 1;
}
    playerSelectDisplay()
}


function addMovementButton() {
    selectedPlayer.movement = selectedPlayer.movement + 1;
    playerSelectDisplay()
}
function subtractMovementButton() {
    selectedPlayer.movement = selectedPlayer.movement - 1;
    playerSelectDisplay()
}
function addTurnButton() {
    numberOfTurns = numberOfTurns + 1;
    playerSelectDisplay()
}
function subtractTurnButton() {
    numberOfTurns = numberOfTurns - 1;
    if (numberOfTurns < currentTurnNumber) {
        endingSequence()
    }
playerSelectDisplay()
}
function degreeYesButton() {
    selectedPlayer.degree = "Yes";
    playerSelectDisplay()
}
function degreeNoButton() {
    selectedPlayer.degree = "No";
    playerSelectDisplay()
}



function endingSequence() {
    switch (numberOfPlayers) {
        case 2: 
            playerContainerArray[0].playerEndingTotal = playerContainerArray[0].money + (playerContainerArray[0].property * 1000000) + (playerContainerArray[0].XP * 100000);
            if (playerContainerArray[0].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[0]);
            }            
            playerContainerArray[1].playerEndingTotal = playerContainerArray[1].money + (playerContainerArray[1].property * 1000000) + (playerContainerArray[1].XP * 100000);
if (playerContainerArray[1].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[1]);
            }             break;
        case 3: 
            playerContainerArray[0].playerEndingTotal = playerContainerArray[0].money + (playerContainerArray[0].property * 1000000) + (playerContainerArray[0].XP * 100000);
if (playerContainerArray[0].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[0]);
            } 
            playerContainerArray[1].playerEndingTotal = playerContainerArray[1].money + (playerContainerArray[1].property * 1000000) + (playerContainerArray[1].XP * 100000);
if (playerContainerArray[0].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[0]);
            } 
            playerContainerArray[2].playerEndingTotal = playerContainerArray[2].money + (playerContainerArray[2].property * 1000000) + (playerContainerArray[2].XP * 100000);
if (playerContainerArray[2].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[2]);
            } 
            break;
        case 4: 
            playerContainerArray[0].playerEndingTotal = playerContainerArray[0].money + (playerContainerArray[0].property * 1000000) + (playerContainerArray[0].XP * 100000);
if (playerContainerArray[0].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[0]);
            } 
            playerContainerArray[1].playerEndingTotal = playerContainerArray[1].money + (playerContainerArray[1].property * 1000000) + (playerContainerArray[1].XP * 100000);
if (playerContainerArray[1].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[1]);
            } 
            playerContainerArray[2].playerEndingTotal = playerContainerArray[2].money + (playerContainerArray[2].property * 1000000) + (playerContainerArray[2].XP * 100000);
if (playerContainerArray[2].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[2]);
            } 
            playerContainerArray[3].playerEndingTotal = playerContainerArray[3].money + (playerContainerArray[3].property * 1000000) + (playerContainerArray[3].XP * 100000);
if (playerContainerArray[3].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[3]);
            } 
            break;
        case 5: 
            playerContainerArray[0].playerEndingTotal = playerContainerArray[0].money + (playerContainerArray[0].property * 1000000) + (playerContainerArray[0].XP * 100000);
if (playerContainerArray[0].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[0]);
            } 
            playerContainerArray[1].playerEndingTotal = playerContainerArray[1].money + (playerContainerArray[1].property * 1000000) + (playerContainerArray[1].XP * 100000);
if (playerContainerArray[1].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[1]);
            } 
            playerContainerArray[2].playerEndingTotal = playerContainerArray[2].money + (playerContainerArray[2].property * 1000000) + (playerContainerArray[2].XP * 100000);
if (playerContainerArray[2].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[2]);
            } 
            playerContainerArray[3].playerEndingTotal = playerContainerArray[3].money + (playerContainerArray[3].property * 1000000) + (playerContainerArray[3].XP * 100000);
if (playerContainerArray[3].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[3]);
}
            playerContainerArray[4].playerEndingTotal = playerContainerArray[4].money + (playerContainerArray[4].property * 1000000) + (playerContainerArray[4].XP * 100000);
if (playerContainerArray[4].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[4]);
}
    break;
        case 6: 
            playerContainerArray[0].playerEndingTotal = playerContainerArray[0].money + (playerContainerArray[0].property * 1000000) + (playerContainerArray[0].XP * 100000);
if (playerContainerArray[0].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[0]);
            } 
            playerContainerArray[1].playerEndingTotal = playerContainerArray[1].money + (playerContainerArray[1].property * 1000000) + (playerContainerArray[1].XP * 100000);
if (playerContainerArray[1].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[1]);
            } 
            playerContainerArray[2].playerEndingTotal = playerContainerArray[2].money + (playerContainerArray[2].property * 1000000) + (playerContainerArray[2].XP * 100000);
if (playerContainerArray[2].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[2]);
            } 
            playerContainerArray[3].playerEndingTotal = playerContainerArray[3].money + (playerContainerArray[3].property * 1000000) + (playerContainerArray[3].XP * 100000);
if (playerContainerArray[3].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[3]);
}
            playerContainerArray[4].playerEndingTotal = playerContainerArray[4].money + (playerContainerArray[4].property * 1000000) + (playerContainerArray[4].XP * 100000);
if (playerContainerArray[4].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[4]);
}
            playerContainerArray[5].playerEndingTotal = playerContainerArray[5].money + (playerContainerArray[5].property * 1000000) + (playerContainerArray[5].XP * 100000);
if (playerContainerArray[5].playerEndingTotal > winnerCircleArray[0].playerEndingTotal) {
            winnerCircleArray.unshift(playerContainerArray[5]);
}
    break;
    }
    document.getElementById("gameAppContainer").style.display = "none";
    document.getElementById("endingsContainer").style.display = "block";
    document.getElementById("endingName").innerHTML = "Congratulations " + winnerCircleArray[0].className + "!";
    document.getElementById("endingImage").innerHTML = winnerCircleArray[0].endingImage;
    document.getElementById("endingImageSpecs").style.width = "50%";
    document.getElementById("endingImageSpecs").style.marginLeft = "25%";
    document.getElementById("endingImageSpecs").style.marginRight = "25%";

    document.getElementById("endingDescription").innerHTML = winnerCircleArray[0].endingDescription;
}

