//SALARY START
var policeSalaryArray = [5000, 30000, 100000, 500000, 1000000];
var assassinSalaryArray = [7000, 30000, 100000, 600000, 2000000];
var criminalSalaryArray = [7000, 50000, 750000, 1000000, 3000000, 5000000];
var hoboSalaryArray = [5000, 25000, 50000];
var inventorSalaryArray = [5000, 50000, 100000, 500000, 5000, 3000000];
var magicianSalaryArray = [2000, 40000, 200000, 1000000, 3000000];
var politicianSalaryArray = [5000, 40000, 150000, 250000, 500000, 1000000, 3000000, 5000000, 10000000];
var pornstarSalaryArray = [3000, 20000, 80000, 500000, 1000000, 2000000];
var racingSalaryArray = [5000, 100000, 500000, 2000000, 3000000];
var rapperSalaryArray = [5000, 25000, 40000, 500000, 2000000, 4000000];
var salesSalaryArray = [300000, 500000, 3000000];
var spySalaryArray = [2000, 400000, 1500000, 1000000, 50000, 3000000];

var policeMobility = 2;
var assassinMobility = 1;
var criminalMobility = 1;
var hoboMobility = 1;
var inventorMobility = 1;
var magicianMobility = 1;
var politicianMobility = 1;
var pornstarMobility = 1;
var racingMobility = 2;
var rapperMobility = 1;
var salesMobility = 1;
var spyMobility = 2;


//SALARY END
//STRENGTHS START
var policeStrengths = '<p class="card-text"><small class="text-muted"><div id="policeStrengths"><strong>ALL LEVELS=</strong> No effects from any space in "Life of Crime".<br>Double your dice total for movement when any player is in "Life of Crime", including you.<br>Any player passed by you in the "Life of Crime" immediately go to jail for 2 turns<br>When you are going through the Start space, you may choose to use the "Speed Trap" space and park there. While parked, you may choose to not move after rolling. You collect our salary and other assets or liabilities as any normal turn.<br><strong>@LEVEL 2=</strong> Every player passed by the cop on the game board pays the cop $500K or lose their next turn.<br><strong>@LEVEL 3=</strong> +1 Mobility<br><strong>@LEVEL 3=</strong> If the Assassin attempts a hit on you and fails, you may counter by attempting to shoot them. This is done by both players rolling 4 dice once. Whichever player has the highest total on the dice wins the shootout. If the Police wins the roll, the assassin goes to jail for 4 turns. If the assassin wins, nothing happens and play resumes as normal.<br><strong>@LEVEL 4=</strong> +1 Mobility<br></div></small></p>';
var assassinStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 2=</strong> When you are within 3 spaces of any player, you may attempt a hit on them. For example, if you are on a space, and a player lands two spaces in front or behind you, this counts as a qualifying distance.<br><strong>However</strong>, you can only attempt a hit if another player pays you to. When a player is in qualifying distance and you are going to attempt a hit, you announce to the other players you will do this and ask if anyone will pay the amount. A hit costs another player whatever amount the current salary of the assassin is. This cost may also be split amongst any number of the other players. This can be done before and after rolling and with any number of players.<br><strong>@LEVEL 3=</strong> +1 Mobility<br><strong>@LEVEL 4=</strong> +1 Mobility<br><strong>@LEVEL 4=</strong> +$1,000,000 for each successful hit.<br><strong>@LEVEL 4=</strong> You may now attempt hits on people within three spaces of you without needing a payment from other players.<br><br></small></p>';
var criminalStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 1=</strong> All degrees are able to be purchased at $100K each.<br><strong>@LEVEL 2=</strong> +1 Promotion for every Jail sentence.<br><strong>@LEVEL 3=</strong> You do not have to pay the assassin for any hit and they recieve the money for hits.<br><strong>@LEVEL 3=</strong> +1 Mobility<br><strong>@LEVEL 3=</strong> Any player passed, you can attempt a pickpocket on. This is done by the two players rolling 4 dice each. If the Criminal rolls higher, the pickpocket is successful. The reward for a successful pickpocket is 10% of the other players $. If they are in debt, there is no effect and play resumes.<br><strong>@LEVEL 4=</strong> +$3M Bonus on your first promotion to this level.<br><strong>@LEVEL 5=</strong> +$5M Bonus on your first promotion to this level.<br><strong>@LEVEL 6=</strong> Every turn that you are at this level, you must do a Near Death Experience at the beginning of your turn, before rolling.<br><br></small></p>';
var hoboStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 1=</strong> +5K Exp. every turn.<br><br><strong>@LEVEL 1=</strong> No Speeding Tickets.<br><br><strong>@LEVEL 1=</strong> Just do nothing. After rolling, you may choose to do nothing instead of moving. In this case, you stay on the space and nothing happens. The next turn proceeds as normal.<br><br><strong>@LEVEL 1=</strong> Running you off of private property. If you will pass through a property space on your movement after a roll, double your Mobility that turn by rolling a second die and adding it to your movement.<br><br><strong>@LEVEL 1=</strong> Panhandling. Every player passed, take 10% of their total $. If they are in debt, then nothing happens.<br><br><strong>@LEVEL 2=</strong> +10K Exp. every turn. <br><br><strong>@LEVEL 2=</strong> +10K Exp. every turn. <br><br><strong>@LEVEL 3=</strong> +100K Exp. every turn.<br><br><br><br></small></p>';
var inventorStrengths = ' <p class="card-text"><small class="text-muted"><strong>@LEVEL 1=</strong> +$1M For every degree.<br><strong>@LEVEL 2=</strong> On any turn, you may jump to the Start space. This counts as your turn.<br><strong>@LEVEL 2=</strong> Double your Mobility while in "Education".<br><strong>@LEVEL 2=</strong> +1 Mobility<br><strong>@LEVEL 3=</strong> +1 Mobility<br><strong>@LEVEL 4=</strong> Each turn, you can try to invent something. You attempt this by rolling 4 dice. If you roll 21 or higher as the total, you can roll for an invention. For an invention, you roll two dice. Whatever the total is, use the Invention Reference Guide below to se the effect of the current invention.<br><strong>@LEVEL 6=</strong> All STOP spaces become optional teleport spaces for you. While in mid movement, you may count a STOP space as one space, teleport to another STOP space and keep moving to finish the roll.<br></small></p>';
var magicianStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 2=</strong> On any turn, you may jump to the Start space. This counts as your turn.<br><strong>@LEVEL 2=</strong> Any player passed, the magician can try to perofrm a trick. This is done by trying to roll a yahtzee in 4 rolls. If the yahtzee is successful, the player pays the magician whatever the magicians current salary is.<br><strong>@LEVEL 2=</strong> Double all winnings in "Let it Ride".<br><strong>@LEVEL 3=</strong> Upon any arrest and jail sentence, you escape on the next turn. Go to the Start Space and proceed as normal.<br><strong>@LEVEL 3=</strong> If the assassin attempts a hit and succeeds, you may try to counter by rolling a number higher than what the assassin rolled.<br><strong>@LEVEL 3=</strong> +1 Mobility<br><strong>@LEVEL 4=</strong> +$1,000,000 each turn while in "Let it Ride".<br><strong>@LEVEL 5=</strong> +$2,000,000 each turn while in "Let it Ride". (In addition to the Lvl. 4 $1M bonus.)<br><br></small></p>';
var politicianStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 1=</strong> Every time it is your turn, an election is  held. The players each roll 4 dice. Any player that gets 13 or higher counts as one vote. If you win the majority of players votes, you recieve a promotion. If you lose the election, you recieve a domotion. If there is an even amount of players and there is a tie, the politician rolls a tiebreaker vote.<br><strong>@LEVEL 4=</strong> You may offer a full pardon to any player in Jail during your turn. They pay you $1M to be released on their next turn.<br><strong>@LEVEL 4=</strong> You recieve $1M for every player in Jail during your turn. This can include any pardons paid for.<br><strong>@LEVEL 6=</strong> You cannot go to jail. Anytime you go to Jail, you just go immediately to Start.</small></p>';
var pornstarStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 1=</strong> Every time it is your turn, an election is  held. The players each roll 4 dice. Any player that gets 13 or higher counts as one vote. If you win the majority of players votes, you recieve a promotion. If you lose the election, you recieve a domotion. If there is an even amount of players and there is a tie, the politician rolls a tiebreaker vote.<br><strong>@LEVEL 4=</strong> You may offer a full pardon to any player in Jail during your turn. They pay you $1M to be released on their next turn.<br><strong>@LEVEL 4=</strong> You recieve $1M for every player in Jail during your turn. This can include any pardons paid for.<br><strong>@LEVEL 6=</strong> You cannot go to jail. Anytime you go to Jail, you just go immediately to Start.<br></small></p>';
var racingStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 2=</strong> +2 Mobility<br><strong>@LEVEL 2=</strong> Anytime you pass by the last sace of a section that is connected to the Start Space, recieve $1M.<br><strong>@LEVEL 3=</strong> While in "The Backwoods", double your Mobility roll.<br><strong>@LEVEL 4=</strong> During a roll, you can go 1 extra space or stop 2 spaces before the original landing space. If you choose to stop short, it must be two spaces. Not one.<br><strong>@LEVEL 5=</strong> When you leave Jail from any sentence, double your Mobility for the first roll.</small></p>';
var rapperStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 2=</strong> Every Jail Sentence +$100K per year.<br><br><strong>@LEVEL 3=</strong> Start Rapping on albums. Each turn, before rolling for movement, roll 2 dice. If the total is over 6, +$100K * the difference. If the total is less than 6, -$100K * the difference. <br><br><strong>@LEVEL 4=</strong> Every Jail Sentence +$500K per year. You do not recieve any years of a sentence not fulfilled that you bail yourself out of, including the first year served.<br><br><strong>@LEVEL 4=</strong> Every successful Child, +1 Child. Successful Twins, +2 Children.<br><br><strong>@LEVEL 5=</strong> Start Producing albums. Each turn, before rolling for movement, roll 2 dice. If the total is over 6, +$1M * the difference. If the total is less than 6, -$1M * the difference. <br><br><strong>@LEVEL 6=</strong> Every Jail Sentence +$500K per year. You do not recieve any years of a sentence not fulfilled that you bail yourself out of, including the first year served.</small></p>';
var salesStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 1=</strong> Cold Calling. Every turn, pick an other player that is in a different section of the board and have a sales pitch. This is decided by a dice roll between the two players. The player with the highest total wins. If you win, they pay you the amount of their current salary. The amount of dice each player rolls is based on their respective mobility. <br><br><strong>@LEVEL 2=</strong> Elevator Speech. Every player passed is pitched your speech. This is decided by a dice roll between the two players. The player with the highest total wins. If you win, they pay you the amount of their current salary * 2. The amount of dice each player rolls is based on their respective mobility. <br><br><strong>@LEVEL 3=</strong> You are just too damn good Johnson...Any player passed, you take their Property, Children and Spouse. You may only take one property, and one Child. The Property is whatever the highest value one is. This is decided in the same roll as the Elevator Speech and is in addition to it.</small></p>';
var spyStrengths = '<p class="card-text"><small class="text-muted"><strong>@LEVEL 2=</strong> Double dice roll for Mobility in "Education" <br><strong>@LEVEL 3=</strong> +1 Mobility<br><strong>@LEVEL 3=</strong> Before rolling for movement at beginning of turn, you may choose to adopt one Strength of any character class currently playing. This effect ends at the beinning of your next turn, where the process begins again.<br><strong>@LEVEL 5=</strong> +1 Mobility<br><strong>@LEVEL 5=</strong> Player may attempt to kill any player within 3 spaces with the same rules as assassin.<br><br></small></p>';
//STRENGTHS END
//WEAKNESSES START
var policeWeaknesses = '<p class="card-text"><small class="text-muted">The Police character cannot rob the bank or recieve any positive effects from spaces in "Life of Crime".<br>You cannot give the politicain speeding tickets and the Assassin can kill you.</small></p>';
var assassinWeaknesses = '<p class="card-text"><small class="text-muted">The Assassin character cannot have any family. No spouse, and no children. You also cannot purchase property.<br>-1 Mobility while starting on any space in "Education"</small></p>';
var criminalWeaknesses = '<p class="card-text"><small class="text-muted">+1 Year to any Jail sentence<br>No family after Lvl. 3  <br>For promotion to Lvl. 5, you must kill someone. After you pass the promotion space, the next player you pass on the board gets killed. No rolls needed to do this. After this, you recieve the promotion. </small></p>';
var hoboWeaknesses = '<p class="card-text"><small class="text-muted">Your Mobility is 1 die through the whole game. Other than instances where your Strengths work.<br><br></small></p>';
var inventorWeaknesses = '<p class="card-text"><small class="text-muted">The Inventor cannot have any family.<br>Nerd! Half your roll for movement in Life of Crime.</small></p>';
var magicianWeaknesses = '<p class="card-text"><small class="text-muted">The Magician character cannot have any property.<br></small></p>';
var politicianWeaknesses = '<p class="card-text"><small class="text-muted">You only recieve half of any money from a successful bank robbery.<br>For any promotion to Lvl. 4, you must be Married with at least one Child.</small></p>';
var pornstarWeaknesses = '<p class="card-text"><small class="text-muted">The Pornstar cannot get married.<br></small></p>';
var racingWeaknesses = '<p class="card-text"><small class="text-muted">Speeding tickets are doubled.<br>Must be Lvl. 3 to purchase property.</small></p>';
var rapperWeaknesses = '<p class="card-text"><small class="text-muted">For each Promotion, to be elgible for the Life Experience required, the player to your left picks a four letter word. They have 5 seconds to do this. The Rapper has 15 seconds to name 5 words that rhyme with it. The same word cannot be used twice. <br><br>Every time a Rapper has a Child, They automatically divorce if Married.<br><br>Half Mobility (rounded down) in Education, until Level 5.</small></p>';
var salesWeaknesses = '<p class="card-text"><small class="text-muted">Door to door sales. Every property passed, acts as a STOP space.<br><br>You cannot have any extra Mobility. Two dice is your limit for the whole game.<br><br></small></p>';
var spyWeaknesses = '<p class="card-text"><small class="text-muted">The Spy character cannot have any family and cannot rob the bank as themselves. They have to rob the bank as someone else (be at least Lvl. 3)<br></small></p>';
//WEAKNESSES END
//SALARY END
//JOB TITLES START
var policeJobTitleArray = ["Mall Security", "Police Academy", "Beat Cop", "Detective", "SWAT"];
var assassinJobTitleArray = ["Mail Carrier", "Army Sniper", "Private Militia", "Jackal", "Professional"];
var criminalJobTitleArray = ["Petty Thief", "Small Time Dealer", "Regional Kingpin", "Distributor", "Cartel", "Jefe"];
var hoboJobTitleArray = ["Runaway Teen", "Transient", "Just plain don't give a fuck anymore"];
var inventorJobTitleArray = ["Dropout", "Robotics", "Consultant", "Scientist", "Recluse", "Time Lord"];
var magicianJobTitleArray = ["Street Performer", "Ingenuier", "Escape Artist", "Headliner", "Houdini"];
var politicianJobTitleArray = ["Class President", "Law Degree", "Mayor", "Governer", "Congress", "Secretary of State", "Vice", "President", "Dictator"];
var pornstarJobTitleArray = ["Sexually Curious", "Web Cam Model", "Co-Star", "Top illing", "Porn Director", "Porn Media Executive"];
var racingJobTitleArray = ["Shifter Karts", "Pro 4 Trucks", "Rally Cross", "Indy", "F1"];
var rapperJobTitleArray = ["Backup Dancer", "Battle Rapper", "Internet Sensation", "Prolific Lyricist", "Producer", "Label CEO"];
var salesJobTitleArray = ["Telemarketer", "Corporate Goon", "Wolf"];
var spyJobTitleArray = ["Troubled Youth", "Hacker", "Disguise Expert", "CIA Mole", "MI6 Trainee", "Liscense to Kill"];

//JOB TITLES END

//JOB CONTAINER ARRAYS START
var policeContainerArray = [policeJobTitleArray, policeSalaryArray, policeStrengths, policeWeaknesses, policeMobility];
var assassinContainerArray = [assassinJobTitleArray, assassinSalaryArray, assassinStrengths, assassinWeaknesses, assassinMobility];
var criminalContainerArray = [criminalJobTitleArray, criminalSalaryArray, criminalStrengths, criminalWeaknesses, criminalMobility];
var hoboContainerArray = [hoboJobTitleArray, hoboSalaryArray, hoboStrengths, hoboWeaknesses, hoboMobility];
var inventorContainerArray = [inventorJobTitleArray, inventorSalaryArray, inventorStrengths, inventorWeaknesses, inventorMobility];
var magicianContainerArray = [magicianJobTitleArray, magicianSalaryArray, magicianStrengths, magicianWeaknesses, magicianMobility];
var politicianContainerArray = [politicianJobTitleArray, politicianSalaryArray, politicianStrengths, politicianWeaknesses, politicianMobility];
var pornstarContainerArray = [pornstarJobTitleArray, pornstarSalaryArray, pornstarStrengths, pornstarWeaknesses, pornstarMobility];
var racingContainerArray = [racingJobTitleArray, racingSalaryArray, racingStrengths, racingWeaknesses, racingMobility];
var rapperContainerArray = [rapperJobTitleArray, rapperSalaryArray, rapperStrengths, rapperWeaknesses, rapperMobility];
var salesContainerArray = [salesJobTitleArray, salesSalaryArray, salesStrengths, salesWeaknesses, salesMobility];
var spyContainerArray = [spyJobTitleArray, spySalaryArray, spyStrengths, spyWeaknesses, spyMobility];


//JOB CONTAINER ARRAYS END
//ONBOARDING SEQUENCE START
window.alert("Hi there! Before we get started, I need some info from you.");
var numberofTurnsInput = window.prompt("How many turns will this game be?");
if (isNaN(numberofTurnsInput)) {
    window.alert("I don't think that's a valid entry. Try entering a number.")
    numberofTurnsInput = window.prompt("How many turns will this game be?");
}
var numberofTurnsInt = parseFloat(numberofTurnsInput, 10); 

var numberofPlayersInput = window.prompt("How many players are there?", "Enter a number between 1 and 6");
if (isNaN(numberofPlayersInput)) {
    window.alert("I don't think that's a valid entry. Try entering a number between 1 and 6.")
    numberofPlayersInput = window.prompt("How many players are there?", "Enter a number between 1 and 6");
}
var numberofPlayersInt = parseFloat(numberofPlayersInput, 10);


//PLAYER BUTTONS INITIALIZING
switch (numberofPlayersInt) {
    case 2:
        //2 PLAYER GAME
        document.getElementById("nameButton").innerHTML = '<div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary"><input type="radio" onclick="player1Button" name="options" id="option1" autocomplete="off">Name1</label><label class="btn btn-secondary"><input type="radio" onclick="player2Button" name="options" id="option2" autocomplete="off">Name2</label></div>';
        break;
    case 3:
        //3 PLAYER GAME
        document.getElementById("nameButton").innerHTML = '<div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary"><input type="radio" onclick="player1Button" name="options" id="option1" autocomplete="off">Name1</label><label class="btn btn-secondary"><input type="radio" onclick="player2Button" name="options" id="option2" autocomplete="off">Name2</label><label class="btn btn-secondary"><input type="radio" onclick="player3Button" name="options" id="option3" autocomplete="off">Name3</label></div>';
        break;
    case 4:
        //4 PLAYER GAME
        document.getElementById("nameButton").innerHTML = '<div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary"><input type="radio" onclick="player1Button" name="options" id="option1" autocomplete="off">Name1</label><label class="btn btn-secondary"><input type="radio" onclick="player2Button" name="options" id="option2" autocomplete="off">Name2</label><label class="btn btn-secondary"><input type="radio" onclick="player3Button" name="options" id="option3" autocomplete="off">Name3</label><label class="btn btn-secondary"><input type="radio" onclick="player4Button" name="options" id="option1" autocomplete="off">Name4</label></div>';
        break;
    case 5:
        //5 PLAYER GAME
        document.getElementById("nameButton").innerHTML = '<div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary"><input type="radio" onclick="player1Button" name="options" id="option1" autocomplete="off">Name1</label><label class="btn btn-secondary"><input type="radio" onclick="player2Button" name="options" id="option2" autocomplete="off">Name2</label><label class="btn btn-secondary"><input type="radio" onclick="player3Button" name="options" id="option3" autocomplete="off">Name3</label><label class="btn btn-secondary"><input type="radio" onclick="player4Button" name="options" id="option1" autocomplete="off">Name4</label><label class="btn btn-secondary"><input type="radio" onclick="player5Button" name="options" id="option2" autocomplete="off">Name5</label></div>';
        break;
    case 6:
        //6 PLAYER GAME
        document.getElementById("nameButton").innerHTML = '<div class="btn-group btn-group-toggle" data-toggle="buttons"><label class="btn btn-secondary"><input type="radio" onclick="player1Button" name="options" id="option1" autocomplete="off">Name1</label><label class="btn btn-secondary"><input type="radio" onclick="player2Button" name="options" id="option2" autocomplete="off">Name2</label><label class="btn btn-secondary"><input type="radio" onclick="player3Button" name="options" id="option3" autocomplete="off">Name3</label><label class="btn btn-secondary"><input type="radio" onclick="player4Button" name="options" id="option1" autocomplete="off">Name4</label><label class="btn btn-secondary"><input type="radio" onclick="player5Button" name="options" id="option2" autocomplete="off">Name5</label><label class="btn btn-secondary"><input type="radio" onclick="player6Button" name="options" id="option3" autocomplete="off">Name6</label></div>'
        break;
        
}



var a;
for (a = 0; a < (numberofPlayersInt + 1); a++) {
switch (a) {
    case 1:
    //PLAYER 1
    var player1MasterContainerArray = [];
    var player1Name = window.prompt("Player 1, what is your name?");
    player1MasterContainerArray.push(player1Name)
    var player1Class = window.prompt("Player 1, what is your class?");
        
        
        while (player1Class != "assassin" || "criminal" || "hobo" || "inventor" || "police" || "politician" || "pornstar" || "racing" || "rapper" || "sales" || "spy") {
            window.alert("That's not a valid class entry. Try one of the following: assassin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
            player1Class = window.prompt("Player 1, what is your class?");
            }
    player1MasterContainerArray.push(player1Class);
    var player1Money = 0;
    player1MasterContainerArray.push(player1Money);
    var player1XP = 0;
    player1MasterContainerArray.push(player1XP);
    var player1Children = 0;
    player1MasterContainerArray.push(player1Children);
    var player1MaritalStatus = false;
    player1MasterContainerArray.push(player1MaritalStatus);
    var player1Mobility = 0;
    player1MasterContainerArray.push(player1Mobility);      
    break;
        
        
    case 2:
    //PLAYER 2
    var player2MasterContainerArray = [];
    var player2Name = window.prompt("Player 2, what is your name?");
    player2MasterContainerArray.push(player2Name)
    var player2Class = window.prompt("Player 2, what is your class?");
        while (player2Class != "assassin" || "criminal" || "hobo" || "inventor" || "police" || "politician" || "pornstar" || "racing" || "rapper" || "sales" || "spy") {
            window.alert("That's not a valid class entry. Try one of the following: assassin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
            player2Class = window.prompt("Player 2, what is your class?");
            }
    player2MasterContainerArray.push(player2Class);
    var player2Money = 0;
    player2MasterContainerArray.push(player2Money);
    var player2XP = 0;
    player2MasterContainerArray.push(player2XP);
    var player2Children = 0;
    player2MasterContainerArray.push(player2Children);
    var player2MaritalStatus = false;
    player2MasterContainerArray.push(player2MaritalStatus);
    var player2Mobility = 0;
    player2MasterContainerArray.push(player2Mobility);
        break;
        
        
    case 3:
    //PLAYER 3
    var player3MasterContainerArray = [];
    var player3Name = window.prompt("Player 3, what is your name?");
    player3MasterContainerArray.push(player3Name)
    var player3Class = window.prompt("Player 3, what is your class?");
        while (player3Class != "assassin" || "criminal" || "hobo" || "inventor" || "police" || "politician" || "pornstar" || "racing" || "rapper" || "sales" || "spy") {
            window.alert("That's not a valid class entry. Try one of the following: assassin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
            player3Class = window.prompt("Player 3, what is your class?");
            }
    player3MasterContainerArray.push(player3Class);
    var player3Money = 0;
    player3MasterContainerArray.push(player3Money);
    var player3XP = 0;
    player3MasterContainerArray.push(player3XP);
    var player3Children = 0;
    player3MasterContainerArray.push(player3Children);
    var player3MaritalStatus = false;
    player3MasterContainerArray.push(player3MaritalStatus);
    var player3Mobility = 0;
    player3MasterContainerArray.push(player3Mobility);
    break;
    case 4:
    //PLAYER 4
    var player4MasterContainerArray = [];
    var player4Name = window.prompt("Player 4, what is your name?");
    player4MasterContainerArray.push(player4Name)
    var player4Class = window.prompt("Player 4, what is your class?");
        while (player4Class != "assassin" || "criminal" || "hobo" || "inventor" || "police" || "politician" || "pornstar" || "racing" || "rapper" || "sales" || "spy") {
            window.alert("That's not a valid class entry. Try one of the following: assassin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
            player4Class = window.prompt("Player 4, what is your class?");
            }
    player4MasterContainerArray.push(player4Class);
    var player4Money = 0;
    player4MasterContainerArray.push(player4Money);
    var player4XP = 0;
    player4MasterContainerArray.push(player4XP);
    var player4Children = 0;
    player4MasterContainerArray.push(player4Children);
    var player4MaritalStatus = false;
    player4MasterContainerArray.push(player4MaritalStatus);
    var player4Mobility = 0;
    player4MasterContainerArray.push(player4Mobility);
    break;
        
        
        
    case 5:
    //PLAYER 5
    var player5MasterContainerArray = [];
    var player5Name = window.prompt("Player 5, what is your name?");
    player5MasterContainerArray.push(player5Name)
    var player5Class = window.prompt("Player 5, what is your class?");
        while (player5Class != "assassin" || "criminal" || "hobo" || "inventor" || "police" || "politician" || "pornstar" || "racing" || "rapper" || "sales" || "spy") {
            window.alert("That's not a valid class entry. Try one of the following: assassin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
            player5Class == window.prompt("Player 5, what is your class?");
            }
    player5MasterContainerArray.push(player5Class);
    var player5Money = 0;
    player5MasterContainerArray.push(player5Money);
    var player5XP = 0;
    player5MasterContainerArray.push(player5XP);
    var player5Children = 0;
    player5MasterContainerArray.push(player5Children);
    var player5MaritalStatus = false;
    player5MasterContainerArray.push(player5MaritalStatus);
    var player5Mobility = 0;
    player5MasterContainerArray.push(player5Mobility);
    break;
        
        
        
    case 6:
    //PLAYER 6
    var player6MasterContainerArray = [];
    var player6Name = window.prompt("Player 6, what is your name?");
    player6MasterContainerArray.push(player6Name)
    var player6Class = window.prompt("Player 6, what is your class?");
        while (player6Class !== "assassin" || "criminal" || "hobo" || "inventor" || "police" || "politician" || "pornstar" || "racing" || "rapper" || "sales" || "spy") {
            window.alert("That's not a valid class entry. Try one of the following: assassin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
            player6Class = window.prompt("Player 6, what is your class?");
            }
    player6MasterContainerArray.push(player6Class);
    var player6Money = 0;
    player6MasterContainerArray.push(player6Money);
    var player6XP = 0;
    player6MasterContainerArray.push(player6XP);
    var player6Children = 0;
    player6MasterContainerArray.push(player6Children);
    var player6MaritalStatus = false;
    player6MasterContainerArray.push(player6MaritalStatus);
    var player6Mobility = 0;
    player6MasterContainerArray.push(player6Mobility);
    break; 
}   
}
switch (player1Class) {
                case "assassin":      
            player1MasterContainerArray.push(assassinContainerArray);
                break;
                case "criminal":      
            player1MasterContainerArray.push(criminalContainerArray);
                break;
                case "hobo":      
            player1MasterContainerArray.push(hoboContainerArray);
                break;
                case "inventor":      
            player1MasterContainerArray.push(inventorContainerArray);
                break;
                case "magician":      
            player1MasterContainerArray.push(magicianContainerArray);
                break;
                case "police":      
            player1MasterContainerArray.push(policeContainerArray);
                break;
                case "politician":      
            player1MasterContainerArray.push(politicianContainerArray);
                break;
                case "pornstar":      
            player1MasterContainerArray.push(pornstarContainerArray);
                break;
                case "racing":      
            player1MasterContainerArray.push(racingContainerArray);
                break;
                case "rapper":      
            player1MasterContainerArray.push(rapperContainerArray);
                break;
                case "sales":      
            player1MasterContainerArray.push(salesContainerArray);
                break;
                case "spy":      
            player1MasterContainerArray.push(spyContainerArray);
                break;
        }
switch (player2Class) {
                case "assassin":      
            player2MasterContainerArray.push(assassinContainerArray);
                break;
                case "criminal":      
            player2MasterContainerArray.push(criminalContainerArray);
                break;
                case "hobo":      
            player2MasterContainerArray.push(hoboContainerArray);
                break;
                case "inventor":      
            player2MasterContainerArray.push(inventorContainerArray);
                break;
                case "magician":      
            player2MasterContainerArray.push(magicianContainerArray);
                break;
                case "police":      
            player2MasterContainerArray.push(policeContainerArray);
                break;
                case "politician":      
            player2MasterContainerArray.push(politicianContainerArray);
                break;
                case "pornstar":      
            player2MasterContainerArray.push(pornstarContainerArray);
                break;
                case "racing":      
            player2MasterContainerArray.push(racingContainerArray);
                break;
                case "rapper":      
            player2MasterContainerArray.push(rapperContainerArray);
                break;
                case "sales":      
            player2MasterContainerArray.push(salesContainerArray);
                break;
                case "spy":      
            player2MasterContainerArray.push(spyContainerArray);
                break;
        }
switch (player3Class) {
                case "assassin":      
            player3MasterContainerArray.push(assassinContainerArray);
                break;
                case "criminal":      
            player3MasterContainerArray.push(criminalContainerArray);
                break;
                case "hobo":      
            player3MasterContainerArray.push(hoboContainerArray);
                break;
                case "inventor":      
            player3MasterContainerArray.push(inventorContainerArray);
                break;
                case "magician":      
            player3MasterContainerArray.push(magicianContainerArray);
                break;
                case "police":      
            player3MasterContainerArray.push(policeContainerArray);
                break;
                case "politician":      
            player3MasterContainerArray.push(politicianContainerArray);
                break;
                case "pornstar":      
            player3MasterContainerArray.push(pornstarContainerArray);
                break;
                case "racing":      
            player3MasterContainerArray.push(racingContainerArray);
                break;
                case "rapper":      
            player3MasterContainerArray.push(rapperContainerArray);
                break;
                case "sales":      
            player3MasterContainerArray.push(salesContainerArray);
                break;
                case "spy":      
            player3MasterContainerArray.push(spyContainerArray);
                break;
        }
switch (player4Class) {
                case "assassin":      
            player4MasterContainerArray.push(assassinContainerArray);
                break;
                case "criminal":      
            player4MasterContainerArray.push(criminalContainerArray);
                break;
                case "hobo":      
            player4MasterContainerArray.push(hoboContainerArray);
                break;
                case "inventor":      
            player4MasterContainerArray.push(inventorContainerArray);
                break;
                case "magician":      
            player4MasterContainerArray.push(magicianContainerArray);
                break;
                case "police":      
            player4MasterContainerArray.push(policeContainerArray);
                break;
                case "politician":      
            player4MasterContainerArray.push(politicianContainerArray);
                break;
                case "pornstar":      
            player4MasterContainerArray.push(pornstarContainerArray);
                break;
                case "racing":      
            player4MasterContainerArray.push(racingContainerArray);
                break;
                case "rapper":      
            player4MasterContainerArray.push(rapperContainerArray);
                break;
                case "sales":      
            player4MasterContainerArray.push(salesContainerArray);
                break;
                case "spy":      
            player4MasterContainerArray.push(spyContainerArray);
                break;
        }
switch (player5Class) {
                case "assassin":      
            player5MasterContainerArray.push(assassinContainerArray);
                break;
                case "criminal":      
            player5MasterContainerArray.push(criminalContainerArray);
                break;
                case "hobo":      
            player5MasterContainerArray.push(hoboContainerArray);
                break;
                case "inventor":      
            player5MasterContainerArray.push(inventorContainerArray);
                break;
                case "magician":      
            player5MasterContainerArray.push(magicianContainerArray);
                break;
                case "police":      
            player5MasterContainerArray.push(policeContainerArray);
                break;
                case "politician":      
            player5MasterContainerArray.push(politicianContainerArray);
                break;
                case "pornstar":      
            player5MasterContainerArray.push(pornstarContainerArray);
                break;
                case "racing":      
            player5MasterContainerArray.push(racingContainerArray);
                break;
                case "rapper":      
            player5MasterContainerArray.push(rapperContainerArray);
                break;
                case "sales":      
            player5MasterContainerArray.push(salesContainerArray);
                break;
                case "spy":      
            player5MasterContainerArray.push(spyContainerArray);
                break;
        }
switch (player6Class) {
                case "assassin":      
            player6MasterContainerArray.push(assassinContainerArray);
                break;
                case "criminal":      
            player6MasterContainerArray.push(criminalContainerArray);
                break;
                case "hobo":      
            player6MasterContainerArray.push(hoboContainerArray);
                break;
                case "inventor":      
            player6MasterContainerArray.push(inventorContainerArray);
                break;
                case "magician":      
            player6MasterContainerArray.push(magicianContainerArray);
                break;
                case "police":      
            player6MasterContainerArray.push(policeContainerArray);
                break;
                case "politician":      
            player6MasterContainerArray.push(politicianContainerArray);
                break;
                case "pornstar":      
            player6MasterContainerArray.push(pornstarContainerArray);
                break;
                case "racing":      
            player6MasterContainerArray.push(racingContainerArray);
                break;
                case "rapper":      
            player6MasterContainerArray.push(rapperContainerArray);
                break;
                case "sales":      
            player6MasterContainerArray.push(salesContainerArray);
                break;
                case "spy":      
            player6MasterContainerArray.push(spyContainerArray);
                break;
        }

//ONBOARDING SEQUENCE END

var playerTurnNumberSequencer = 1;
var turnNumber = 1;
//INITIALIZING PLAYER SALARIES
var player1Salary = player1MasterContainerArray[7][1][0];
var player2Salary = player2MasterContainerArray[7][1][0];
var player3Salary = player3MasterContainerArray[7][1][0];
var player4Salary = player4MasterContainerArray[7][1][0];
var player5Salary = player5MasterContainerArray[7][1][0];
var player6Salary = player6MasterContainerArray[7][1][0];
//INITIALIZING PLAYER JOB TITLES
var player1JobTitle = player1MasterContainerArray[7][0][0];
var player2JobTitle = player2MasterContainerArray[7][0][0];
var player3JobTitle = player3MasterContainerArray[7][0][0];
var player4JobTitle = player4MasterContainerArray[7][0][0];
var player5JobTitle = player5MasterContainerArray[7][0][0];
var player6JobTitle = player6MasterContainerArray[7][0][0];

//NEXT TURN BUTTON SEQUENCE START




function nextTurnButton() {
            if (playerTurnNumberSequencer === 1) {
            document.getElementById("currentTurnNumber").innerHTML = "Turn Number: " + turnNumber;
            document.getElementById("currentTurnsRemaining").innerHTML = "Turns Remaining: " + (numberofTurnsInt - turnNumber);
            document.getElementById("nameAndClass").innerHTML = player1Name + " the " + player1Class;
            document.getElementById("currentPlayerTurn").innerHTML = "Current Player turn: " + player1Name;
                
                
            
            player1Money = (player1Money + player1Salary);
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player1Money;
                if (player1MaritalStatus === true) {
                    player1XP = player1XP + 1000 + (player1Children * 500);
                }
                else {
                    player1XP = player1XP + (player1Children * 500);
                }
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player1XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player1Children;
                if (player1MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player1JobTitle; 
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player1MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player1MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player1MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player1MasterContainerArray[7][3];
            playerTurnNumberSequencer = 2;
            }
            //PLAYER 1 TURN END
    
            //PLAYER 2 TURN START
            else if (playerTurnNumberSequencer === 2) {
            document.getElementById("currentTurnNumber").innerHTML = "Turn Number: " + turnNumber;
            document.getElementById("currentTurnsRemaining").innerHTML = "Turns Remaining: " + (numberofTurnsInt - turnNumber);
            document.getElementById("nameAndClass").innerHTML = player2Name + " the " + player2Class;
            document.getElementById("currentPlayerTurn").innerHTML = "Current Player turn: " + player2Name;
            player2Money = (player2Money + player2Salary);
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player2Money;                                                               if (player2MaritalStatus === true) {
                    player2XP = player2XP + 1000 + (player2Children * 500);
                }
                else {
                    player2XP = player2XP + (player2Children * 500);
                }
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player2XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player2Children;
                if (player2MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player2JobTitle; 
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player2MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player2MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player2MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player2MasterContainerArray[7][3];
            if (numberofPlayersInt > 2) {
                playerTurnNumberSequencer++;
            }
            else {
                playerTurnNumberSequencer = 1;
                turnNumber++;
            }                
            }
            //PLAYER 2 TURN END
    
            //PLAYER 3 TURN START
            else if (playerTurnNumberSequencer === 3) {
            document.getElementById("currentTurnNumber").innerHTML = "Turn Number: " + turnNumber;
            document.getElementById("currentTurnsRemaining").innerHTML = "Turns Remaining: " + (numberofTurnsInt - turnNumber);
            document.getElementById("nameAndClass").innerHTML = player3Name + " the " + player3Class;
            document.getElementById("currentPlayerTurn").innerHTML = "Current Player turn: " + player3Name;
            player3Money = (player3Money + player3Salary);
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player3Money;                                                               if (player3MaritalStatus === true) {
                    player3XP = player3XP + 1000 + (player3Children * 500);
                }
                else {
                    player3XP = player3XP + (player3Children * 500);
                }
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player3XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player3Children;
                if (player3MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player3JobTitle; 
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player3MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player3MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player3MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player3MasterContainerArray[7][3];
            if (numberofPlayersInt > 3) {
                playerTurnNumberSequencer++;
            }
            else {
                playerTurnNumberSequencer = 1;
                turnNumber++;
            }
            }
            //PLAYER 3 TURN END
    
            //PLAYER 4 TURN START
            else if (playerTurnNumberSequencer === 4) {
            document.getElementById("currentTurnNumber").innerHTML = "Turn Number: " + turnNumber;
            document.getElementById("currentTurnsRemaining").innerHTML = "Turns Remaining: " + (numberofTurnsInt - turnNumber);
            document.getElementById("nameAndClass").innerHTML = player4Name + " the " + player4Class;
            document.getElementById("currentPlayerTurn").innerHTML = "Current Player turn: " + player4Name;
            player4Money = (player4Money + player4Salary);
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player4Money;                                                               if (player4MaritalStatus === true) {
                    player4XP = player4XP + 1000 + (player4Children * 500);
                }
                else {
                    player4XP = player4XP + (player4Children * 500);
                }
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player4XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player4Children;
                if (player4MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player4JobTitle; 
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player4MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player4MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player4MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player4MasterContainerArray[7][3];
            if (numberofPlayersInt > 4) {
                playerTurnNumberSequencer++;
            }
            else {
                playerTurnNumberSequencer = 1;
                turnNumber++;
            }                
            }
            //PLAYER 5 TURN END
    
            //PLAYER 5 TURN START
            else if (playerTurnNumberSequencer === 5) {
            document.getElementById("currentTurnNumber").innerHTML = "Turn Number: " + turnNumber;
            document.getElementById("currentTurnsRemaining").innerHTML = "Turns Remaining: " + (numberofTurnsInt - turnNumber);
            document.getElementById("nameAndClass").innerHTML = player5Name + " the " + player5Class;
            document.getElementById("currentPlayerTurn").innerHTML = "Current Player turn: " + player5Name;
            player5Money = (player5Money + player5Salary);
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player5Money;                                                               if (player5MaritalStatus === true) {
                    player5XP = player5XP + 1000 + (player5Children * 500);
                }
                else {
                    player5XP = player5XP + (player5Children * 500);
                }
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player5XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player5Children;
                if (player5MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player5JobTitle; 
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player5MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player5MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player5MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player5MasterContainerArray[7][3];
            if (numberofPlayersInt > 5) {
                playerTurnNumberSequencer++;
            }
            else {
                playerTurnNumberSequencer = 1;
                turnNumber++;
            }                
            }
            //PLAYER 5 TURN END
    //PLAYER 6 TURN START
            else if (playerTurnNumberSequencer === 6) {
            document.getElementById("currentTurnNumber").innerHTML = "Turn Number: " + turnNumber;
            document.getElementById("currentTurnsRemaining").innerHTML = "Turns Remaining: " + (numberofTurnsInt - turnNumber);
            document.getElementById("nameAndClass").innerHTML = player6Name + " the " + player6Class;
            document.getElementById("currentPlayerTurn").innerHTML = "Current Player turn: " + player6Name;
            player6Money = (player6Money + player6Salary);
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player6Money;                                                               if (player6MaritalStatus === true) {
                    player6XP = player6XP + 1000 + (player6Children * 500);
                }
                else {
                    player6XP = player6XP + (player6Children * 500);
                }    
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player6XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player6Children;
                if (player6MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player6JobTitle; 
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player6MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player6MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player6MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player6MasterContainerArray[7][3];
            if (numberofPlayersInt > 6) {
                playerTurnNumberSequencer++;
            }
            else {
                playerTurnNumberSequencer = 1;
                turnNumber++;
            }                
            }
            //PLAYER 6 TURN END   
}
//NEXT TURN BUTTON SEQUENCE END

//STATS BUTTONS START
//MONEY
function moneyButton() {
    var moneyInput = window.prompt("Please enter an  Money amount.", "");
    if (isNaN(moneyInput)) {
    window.alert("I don't think that's a valid entry. Try typing a positive or negative number.");
    moneyInput = window.prompt("Please enter an  Money amount. Positive or negative", "");
    }
    var moneyInt = parseFloat(moneyInput, 10);   
    switch (document.getElementById("currentPlayerTurn").innerHTML) {
            
        case "Current Player turn: " + player1Name:
        player1Money = moneyInt + player1Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player1Money;             
            break;
        case "Current Player turn: " + player2Name:
        player2Money = moneyInt + player2Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player2Money; 
        break;
        case "Current Player turn: " + player3Name:
        player3Money = moneyInt + player3Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player3Money; 
        break;
        case "Current Player turn: " + player4Name:
        player4Money = moneyInt + player4Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player4Money; 
        break;
        case "Current Player turn: " + player5Name:
        player5Money = moneyInt + player5Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player5Money; 
        break;
        case "Current Player turn: " + player6Name:
        player6Money = moneyInt + player6Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player6Money; 
        break;
    }
    
}
//XP
function XPButton() {
        var XPInput = window.prompt("Please enter an Experience amount.", "");
        if (isNaN(XPInput)) {
            window.alert("I don't think that's a valid entry. Try typing a positive or negative number.");
            XPInput = window.prompt("Please enter an  Experience amount. Positive or negative", "");
        }
        var XPInt = parseFloat(XPInput, 10);
        switch (document.getElementById("currentPlayerTurn").innerHTML) {
            
        case "Current Player turn: " + player1Name:
        player1XP = XPInt + player1XP;
        document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player1XP + "XP";                
                break;
        case "Current Player turn: " + player2Name:
        player2XP = XPInt + player2XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player2XP + "XP";        
                break;
        case "Current Player turn: " + player3Name:
        player3XP = XPInt + player3XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player3XP + "XP";        
                break;
        case "Current Player turn: " + player4Name:
        player4Money = XPInt + player4XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player4XP + "XP";        
                break;
        case "Current Player turn: " + player5Name:
        player5Money = XPInt + player5XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player5XP + "XP";        
                break;
        case "Current Player turn: " + player6Name:
        player6Money = XPInt + player6XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player6XP + "XP";        
                break;
    }
}

//PROMO
function promoButton() { 
    
        switch (document.getElementById("currentPlayerTurn").innerHTML) {
        case "Current Player turn: " + player1Name:
                player1MasterContainerArray[7][1].shift();
                player1MasterContainerArray[7][0].shift();                                               
                player1Salary = player1MasterContainerArray[7][1][0];
                player1JobTitle = player1MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player1Salary + " and your new Job Title is " + player1JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player1JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player1Salary;
                break;
                
        case "Current Player turn: " + player2Name:
                player2MasterContainerArray[7][1].shift();
                player2MasterContainerArray[7][0].shift();                                               
                player2Salary = player2MasterContainerArray[7][1][0];
                player2JobTitle = player2MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player2Salary + " and your new Job Title is " + player2JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player2JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player2Salary;
                break;
                
        case "Current Player turn: " + player3Name:
                player3MasterContainerArray[7][1].shift();
                player3MasterContainerArray[7][0].shift();                                               
                player3Salary = player3MasterContainerArray[7][1][0];
                player3JobTitle = player3MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player3Salary + " and your new Job Title is " + player3JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player3JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player3Salary;
                break;
                
                case "Current Player turn: " + player4Name:
                player4MasterContainerArray[7][1].shift();
                player4MasterContainerArray[7][0].shift();                                               
                player4Salary = player4MasterContainerArray[7][1][0];
                player4JobTitle = player4MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player4Salary + " and your new Job Title is " + player4JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player4JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player4Salary;
                break;
                
        case "Current Player turn: " + player5Name:
                player5MasterContainerArray[7][1].shift();
                player5MasterContainerArray[7][0].shift();                                               
                player5Salary = player5MasterContainerArray[7][1][0];
                player5JobTitle = player5MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player5Salary + " and your new Job Title is " + player5JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player5JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player5Salary;
                break;
                
        case "Current Player turn: " + player6Name:
                player6MasterContainerArray[7][1].shift();
                player6MasterContainerArray[7][0].shift();                                               
                player6Salary = player6MasterContainerArray[7][1][0];
                player6JobTitle = player6MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player6Salary + " and your new Job Title is " + player6JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player6JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player6Salary;
                break;
        
    }
}
//MARRIAGE
function marriageButton() {
    switch (document.getElementById("currentPlayerTurn").innerHTML) {
            
        case "Current Player turn: " + player1Name:
            if (player1MaritalStatus === true) {
                player1MaritalStatus = false;
                window.alert("Ouch. Divorce can get ugly. Sorry to hear that. Better luck next time!");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";

            }
            else {
                player1MaritalStatus = true;
                window.alert("You got married! Congratulations! I hope you two live a long and happy life.");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
            }
            break;
            
        case "Current Player turn: " + player2Name:
        if (player2MaritalStatus === true) {
                player2MaritalStatus = false;
                window.alert("Ouch. Divorce can get ugly. Sorry to hear that. Better luck next time!");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";

            }
            else {
                player2MaritalStatus = true;
                window.alert("You got married! Congratulations! I hope you two live a long and happy life.");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
            }
            break;
            
        case "Current Player turn: " + player3Name:
        if (player3MaritalStatus === true) {
                player3MaritalStatus = false;
                window.alert("Ouch. Divorce can get ugly. Sorry to hear that. Better luck next time!");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";

            }
            else {
                player3MaritalStatus = true;
                window.alert("You got married! Congratulations! I hope you two live a long and happy life.");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
            }
            break;
            
        case "Current Player turn: " + player4Name:
        if (player1MaritalStatus === true) {
                player4MaritalStatus = false;
                window.alert("Ouch. Divorce can get ugly. Sorry to hear that. Better luck next time!");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";

            }
            else {
                player4MaritalStatus = true;
                window.alert("You got married! Congratulations! I hope you two live a long and happy life.");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
            }
            break;
            
        case "Current Player turn: " + player5Name:
        if (player5MaritalStatus === true) {
                player5MaritalStatus = false;
                window.alert("Ouch. Divorce can get ugly. Sorry to hear that. Better luck next time!");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";

            }
            else {
                player5MaritalStatus = true;
                window.alert("You got married! Congratulations! I hope you two live a long and happy life.");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
            }
            break;
            
        case "Current Player turn: " + player6Name:
        if (player6MaritalStatus === true) {
                player6MaritalStatus = false;
                window.alert("Ouch. Divorce can get ugly. Sorry to hear that. Better luck next time!");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";

            }
            else {
                player1MaritalStatus = true;
                window.alert("You got married! Congratulations! I hope you two live a long and happy life.");
                document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
            }
            break;
            
    }
}
//CHILDREN
function childrenButton() {
    var childrenInput = window.prompt("How many children did you have?", "");
    if (isNaN(childrenInput)) {
            window.alert("I don't think that's a valid entry. Try typing a positive or negative number.");
            childrenInput = window.prompt("How many children did you have?", "");
        }
        var childrenInt = parseFloat(childrenInput, 10);
        switch (document.getElementById("currentPlayerTurn").innerHTML) {
            
        case "Current Player turn: " + player1Name:
        player1Children = player1Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player1Children;
                break;
        case "Current Player turn: " + player2Name:
        player2Children = player2Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player2Children;
                break;
        case "Current Player turn: " + player3Name:
        player3Children = player3Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player3Children;
                break;
        case "Current Player turn: " + player4Name:
        player4Children = player4Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player4Children;
                break;
        case "Current Player turn: " + player5Name:
        player5Children = player5Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player5Children;
                break;
        case "Current Player turn: " + player6Name:
        player6Children = player6Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player6Children;
                break;
    }
    
}
//MOBILITY
function mobilityButton() {
    switch (document.getElementById("currentPlayerTurn").innerHTML) {

        case "Current Player turn: " + player1Name:
        if (player1MasterContainerArray[7][4] === 4) {
            window.alert("You can't go any faster!");
            player1MasterContainerArray[7][4] = 1;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player1MasterContainerArray[7][4];
        }
        else {
            "You got a little bit faster!"
            player1MasterContainerArray[7][4]++;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player1MasterContainerArray[7][4];
        }
        break;
        case "Current Player turn: " + player2Name:
        if (player2MasterContainerArray[7][4] === 4) {
            window.alert("You can't go any faster!");
            player2MasterContainerArray[7][4] = 1;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player2MasterContainerArray[7][4];
        }
        else {
            "You got a little bit faster!"
            player2MasterContainerArray[7][4]++;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player2MasterContainerArray[7][4];
        }
        break;
        case "Current Player turn: " + player3Name:
        if (player3MasterContainerArray[7][4] === 4) {
            window.alert("You can't go any faster!");
            player3MasterContainerArray[7][4] = 1;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player3MasterContainerArray[7][4];
        }
        else {
            "You got a little bit faster!"
            player3MasterContainerArray[7][4]++;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player3MasterContainerArray[7][4];
        }
        break;
        case "Current Player turn: " + player4Name:
        if (player4MasterContainerArray[7][4] === 4) {
            window.alert("You can't go any faster!");
            player4MasterContainerArray[7][4] = 1;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player4MasterContainerArray[7][4];
        }
        else {
            "You got a little bit faster!"
            player4MasterContainerArray[7][4]++;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player4MasterContainerArray[7][4];
        }
        break;
        case "Current Player turn: " + player5Name:
        if (player5MasterContainerArray[7][4] === 4) {
            window.alert("You can't go any faster!");
            player5MasterContainerArray[7][4] = 1;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player5MasterContainerArray[7][4];
        }
        else {
            "You got a little bit faster!"
            player5MasterContainerArray[7][4]++;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player5MasterContainerArray[7][4];
        }
        break;
        case "Current Player turn: " + player6Name:
        if (player6MasterContainerArray[7][4] === 4) {
            window.alert("You can't go any faster!");
            player6MasterContainerArray[7][4] = 1;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player6MasterContainerArray[7][4];
        }
        else {
            "You got a little bit faster!"
            player6MasterContainerArray[7][4]++;
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player6MasterContainerArray[7][4];
        }
        break;
    }
}
//PROPERTY
function propertyButton() {
    
}

//PLAYER NUMBER BUTTON FUNCTIONS

//STATS BUTTONS END

//GAME ENDING SEQUENCE
