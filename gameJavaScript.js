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
var spySalaryArray = [2000, 40000, 150000, 1000000, 50000, 3000000];

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

//REMOVING UNECESSARY RADIO BUTTONS
var buttonsDivParent = document.getElementById("buttonsDivParent");
var button3DivChild = document.getElementById("player3Button");
var button4DivChild = document.getElementById("player4Button");
var button5DivChild = document.getElementById("player5Button");
var button6DivChild = document.getElementById("player6Button");


//2 PLAYER GAME
switch (numberofPlayersInt) {
    case 2:
    buttonsDivParent.removeChild(button3DivChild);
    buttonsDivParent.removeChild(button4DivChild);
    buttonsDivParent.removeChild(button5DivChild);
    buttonsDivParent.removeChild(button6DivChild);


        break;

    case 3:
    buttonsDivParent.removeChild(button4DivChild);
    buttonsDivParent.removeChild(button5DivChild);
    buttonsDivParent.removeChild(button6DivChild);
        break;

    case 4:
    buttonsDivParent.removeChild(button5DivChild);
    buttonsDivParent.removeChild(button6DivChild);
        break;

    case 5:
    buttonsDivParent.removeChild(button5DivChild);
        break;
}
//ONBOARDING SEQUENCE END


var a;
for (a = 0; a < (numberofPlayersInt + 1); a++) {
switch (a) {
    case 1:
    //PLAYER 1
    var player1MasterContainerArray = [];
    var player1Name = window.prompt("Player 1, what is your name?");
    player1MasterContainerArray.push(player1Name)
    
        
        var i = 1;
        while (i > 0) {
        var player1Class = window.prompt("Player 1, what is your class?");
        if (player1Class === "assassin" ) {
            i = 0;
        }
        else if (player1Class === "criminal") {
            i = 0;
        }
        else if (player1Class === "hobo") {
            i = 0;
        }            
        else if (player1Class === "inventor") {
            i = 0;
        }
        else if (player1Class === "magician") {
            i = 0;
        }
        else if (player1Class === "police") {
            i = 0;
        }
        else if (player1Class === "politician") {
            i = 0;
        }
        else if (player1Class === "pornstar") {
            i = 0;
        }
        else if (player1Class === "racing") {
            i = 0;
        }
        else if (player1Class === "rapper") {
            i = 0;
        }
        else if (player1Class === "sales") {
            i = 0;
        }
        else if (player1Class === "spy") {
            i = 0;
        }
        else {
            window.alert("That's not a valid class entry. Try one of the following: assasin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
        }
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
    i = 1;
        while (i > 0) {
        var player2Class = window.prompt("Player 2, what is your class?");
        if (player2Class === "assassin" ) {
            i = 0;
        }
        else if (player2Class === "criminal") {
            i = 0;
        }
        else if (player2Class === "hobo") {
            i = 0;
        }            
        else if (player2Class === "inventor") {
            i = 0;
        }
        else if (player2Class === "magician") {
            i = 0;
        }
        else if (player2Class === "police") {
            i = 0;
        }
        else if (player2Class === "politician") {
            i = 0;
        }
        else if (player2Class === "pornstar") {
            i = 0;
        }
        else if (player2Class === "racing") {
            i = 0;
        }
        else if (player2Class === "rapper") {
            i = 0;
        }
        else if (player2Class === "sales") {
            i = 0;
        }
        else if (player2Class === "spy") {
            i = 0;
        }
        else {
            window.alert("That's not a valid class entry. Try one of the following: assasin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
        }
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
    i = 1;
        while (i > 0) {
        var player3Class = window.prompt("Player 3, what is your class?");
        if (player3Class === "assassin" ) {
            i = 0;
        }
        else if (player3Class === "criminal") {
            i = 0;
        }
        else if (player3Class === "hobo") {
            i = 0;
        }            
        else if (player3Class === "inventor") {
            i = 0;
        }
        else if (player3Class === "magician") {
            i = 0;
        }
        else if (player3Class === "police") {
            i = 0;
        }
        else if (player3Class === "politician") {
            i = 0;
        }
        else if (player3Class === "pornstar") {
            i = 0;
        }
        else if (player3Class === "racing") {
            i = 0;
        }
        else if (player3Class === "rapper") {
            i = 0;
        }
        else if (player3Class === "sales") {
            i = 0;
        }
        else if (player3Class === "spy") {
            i = 0;
        }
        else {
            window.alert("That's not a valid class entry. Try one of the following: assasin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
        }
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
    i = 1;
        while (i > 0) {
        var player4Class = window.prompt("Player 4, what is your class?");
        if (player4Class === "assassin" ) {
            i = 0;
        }
        else if (player4Class === "criminal") {
            i = 0;
        }
        else if (player4Class === "hobo") {
            i = 0;
        }            
        else if (player4Class === "inventor") {
            i = 0;
        }
        else if (player4Class === "magician") {
            i = 0;
        }
        else if (player4Class === "police") {
            i = 0;
        }
        else if (player4Class === "politician") {
            i = 0;
        }
        else if (player4Class === "pornstar") {
            i = 0;
        }
        else if (player4Class === "racing") {
            i = 0;
        }
        else if (player4Class === "rapper") {
            i = 0;
        }
        else if (player4Class === "sales") {
            i = 0;
        }
        else if (player4Class === "spy") {
            i = 0;
        }
        else {
            window.alert("That's not a valid class entry. Try one of the following: assasin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
        }
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
    i = 1;
        while (i > 0) {
        var player5Class = window.prompt("Player 5, what is your class?");
        if (player5Class === "assassin" ) {
            i = 0;
        }
        else if (player5Class === "criminal") {
            i = 0;
        }
        else if (player5Class === "hobo") {
            i = 0;
        }            
        else if (player5Class === "inventor") {
            i = 0;
        }
        else if (player5Class === "magician") {
            i = 0;
        }
        else if (player5Class === "police") {
            i = 0;
        }
        else if (player5Class === "politician") {
            i = 0;
        }
        else if (player5Class === "pornstar") {
            i = 0;
        }
        else if (player5Class === "racing") {
            i = 0;
        }
        else if (player5Class === "rapper") {
            i = 0;
        }
        else if (player5Class === "sales") {
            i = 0;
        }
        else if (player5Class === "spy") {
            i = 0;
        }
        else {
            window.alert("That's not a valid class entry. Try one of the following: assasin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
        }
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
    i = 1;
        while (i > 0) {
        var player6Class = window.prompt("Player 6, what is your class?");
        if (player6Class === "assassin" ) {
            i = 0;
        }
        else if (player6Class === "criminal") {
            i = 0;
        }
        else if (player6Class === "hobo") {
            i = 0;
        }            
        else if (player6Class === "inventor") {
            i = 0;
        }
        else if (player6Class === "magician") {
            i = 0;
        }
        else if (player6Class === "police") {
            i = 0;
        }
        else if (player6Class === "politician") {
            i = 0;
        }
        else if (player6Class === "pornstar") {
            i = 0;
        }
        else if (player6Class === "racing") {
            i = 0;
        }
        else if (player6Class === "rapper") {
            i = 0;
        }
        else if (player6Class === "sales") {
            i = 0;
        }
        else if (player6Class === "spy") {
            i = 0;
        }
        else {
            window.alert("That's not a valid class entry. Try one of the following: assasin, criminal, hobo, inventor, police, politician, pornstar, racing, rapper, sales, spy.");
        }
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

var playerSwitch;










//PLAYER RADIO BUTTONS START
//PLAYER 1 RADIO BUTTON
function player1Button() {
            playerSwitch = 1;
            document.getElementById("nameAndClass").innerHTML = player1Name + " the " + player1Class;
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player1Money;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player1XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player1Children;
                if (player1MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player1MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player1MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player1MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player1MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player1MasterContainerArray[7][3];
            }
function player2Button() {
            playerSwitch = 2;
            document.getElementById("nameAndClass").innerHTML = player2Name + " the " + player2Class;
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player2Money;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player2XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player2Children;
                if (player2MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player2MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player2MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player2MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player2MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player2MasterContainerArray[7][3];
            }
function player3Button() {
            playerSwitch = 3;
            document.getElementById("nameAndClass").innerHTML = player3Name + " the " + player3Class;
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player3Money;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player3XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player3Children;
                if (player3MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player3MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player3MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player3MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player3MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player3MasterContainerArray[7][3];
            }
function player4Button() {
            playerSwitch = 4;
            document.getElementById("nameAndClass").innerHTML = player4Name + " the " + player4Class;
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player4Money;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player4XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player4Children;
                if (player4MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player4MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player4MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player4MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player4MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player4MasterContainerArray[7][3];
            }
function player5Button() {
            playerSwitch = 1;
            document.getElementById("nameAndClass").innerHTML = player5Name + " the " + player5Class;
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player5Money;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player5XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player5Children;
                if (player5MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player5MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player5MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player5MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player5MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player5MasterContainerArray[7][3];
            }
function player6Button() {
            playerSwitch = 6;
            document.getElementById("nameAndClass").innerHTML = player6Name + " the " + player6Class;
            document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player6Money;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player6XP + "XP";                 document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player6Children;
                if (player6MaritalStatus === true)
                    {
                       document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Married";
                    }
                else
                    {
                        document.getElementById("currentPlayerMarriage").innerHTML =  "Marital Status: Single";
                    }    
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player6MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player6MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player6MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player6MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player6MasterContainerArray[7][3];
            }


            







//NEXT TURN SEQUENCE START

function nextTurnButton() {
            if (playerTurnNumberSequencer === 1) {
                //PLAYER 1 LAST 3 TURNS WARNING
                if ((numberofTurnsInt - turnNumber) === 2) {
                    window.alert("All right everyone! Three turns left! Make em' count!"); 
                }
                //PLAYER 1 LAST 1 TURN WARNING
                else if ((numberofTurnsInt - turnNumber) === 0) {
                    window.alert("Last turn! Get your licks in!"); 
                }
                
                
                
                //ENDING SEQUENCE START
                else if ((numberofTurnsInt - turnNumber) === -1) {  
                window.alert("Game Over Man!");
                    player1XP = player1XP + (player1Children * 1000000);
                    player2XP = player2XP + (player2Children * 1000000);
                    player3XP = player3XP + (player3Children * 1000000);
                    player4XP = player4XP + (player4Children * 1000000);
                    player5XP = player5XP + (player5Children * 1000000);
                    player6XP = player6XP + (player6Children * 1000000);

                    var player1Total = player1Money + player1XP;
                    var player2Total = player2Money + player2XP;
                    var player3Total = player3Money + player3XP;
                    var player4Total = player4Money + player4XP;
                    var player5Total = player5Money + player5XP;
                    var player6Total = player6Money + player6XP;
                    
                    var playerTotalsArray = [player1Total, player2Total, player3Total, player4Total, player5Total, player6Total];
                    var firstPlace;
                    var secondPlace;
                    var winningPlayerNames = [];
                    var winningPlayerClasses = [];
                    
                    winningPlayersArray = playerTotalsArray.sort(function (a, b) {  return b - a;  });
                    
                    //FIRST PLACE
                    if (winningPlayersArray[0] === player1Total) {
                        firstPlace = player1Name;
                        winningPlayerNames.push(player1Name);
                        winningPlayerClasses.push(player1Class);
                    }
                    else if (winningPlayersArray[0] === player2Total) {
                        firstPlace = player2Name;
                        winningPlayerNames.push(player2Name);
                        winningPlayerClasses.push(player2Class);
                    }
                    else if (winningPlayersArray[0] === player3Total) {
                        firstPlace = player3Name;                        
                        winningPlayerNames.push(player3Name);
                        winningPlayerClasses.push(player3Class);
                    }
                    else if (winningPlayersArray[0] === player4Total) {
                        firstPlace = player4Name;                        
                        winningPlayerNames.push(player4Name);
                        winningPlayerClasses.push(player4Class);
                    }
                    else if (winningPlayersArray[0] === player5Total) {
                        firstPlace = player5Name;
                        winningPlayerNames.push(player5Name);
                        winningPlayerClasses.push(player5Class);
                    }
                    else if (winningPlayersArray[0] === player6Total) {
                        firstPlace = player6Name;
                        winningPlayerNames.push(player6Name);
                        winningPlayerClasses.push(player6Class);
                    }
                    //SECOND PLACE
                    if (winningPlayersArray[1] === player1Total) {
                        secondPlace = player1Name;
                        winningPlayerNames.push(player1Name);
                    }
                    else if (winningPlayersArray[1] === player2Total) {
                        secondPlace = player2Name;
                        winningPlayerNames.push(player2Name);
                    }
                    else if (winningPlayersArray[1] === player3Total) {
                        secondPlace = player3Name;
                        winningPlayerNames.push(player3Name);
                    }
                    else if (winningPlayersArray[1] === player4Total) {
                        secondPlace = player4Name;
                        winningPlayerNames.push(player4Name);
                    }
                    else if (winningPlayersArray[1] === player5Total) {
                        secondPlace = player5Name;
                        winningPlayerNames.push(player5Name)
                    }
                    else if (winningPlayersArray[1] === player6Total) {
                        secondPlace = player6Name;
                        winningPlayerNames.push(player6Name);
                    }
                    //THIRD PLACE
                    if (winningPlayersArray[2] === player1Total) {
                        secondPlace = player1Name;
                        winningPlayerNames.push(player1Name);
                    }
                    else if (winningPlayersArray[2] === player2Total) {
                        secondPlace = player2Name;
                        winningPlayerNames.push(player2Name);
                    }
                    else if (winningPlayersArray[2] === player3Total) {
                        secondPlace = player3Name;
                        winningPlayerNames.push(player3Name);
                    }
                    else if (winningPlayersArray[2] === player4Total) {
                        secondPlace = player4Name;
                        winningPlayerNames.push(player4Name);
                    }
                    else if (winningPlayersArray[2] === player5Total) {
                        secondPlace = player5Name;
                        winningPlayerNames.push(player5Name);
                    }
                    else if (winningPlayersArray[2] === player6Total) {
                        secondPlace = player6Name;
                        winningPlayerNames.push(player6Name);
                    }
                    
                    window.alert("The results are in!!!")
                    window.alert("In first place we have " + winningPlayerNames[0] + " with a whopping $" + winningPlayersArray[0] + "!");
                    window.alert("In second place we have " + winningPlayerNames[1] + " with $" + winningPlayersArray[1]);
                    if (numberofPlayersInt > 2) {
                    window.alert("And right behind that in a miserable third place is " + winningPlayerNames[2] + " with a measly $" + winningPlayersArray[2]);
                    }
                    
                    
                    //ENDING SCREENS
                    if (winningPlayerClasses[0] === "assassin") {
                        window.location.href = './Endings/assassinEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "criminal"){
                        window.location.href = '/Endings/criminalEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "hobo"){
                        window.location.href = '/Endings/hoboEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "inventor"){
                        window.location.href = '/Endings/inventorEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "magician"){
                        window.location.href = '/Endings/magicianEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "police"){
                        window.location.href = '/Endings/policeEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "politician"){
                        window.location.href = '/Endings/politicianEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "pornstar"){
                        window.location.href = '/Endings/pornstarEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "racing"){
                        window.location.href = '/Endings/racingEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "rapper"){
                        window.location.href = '/Endings/rapperEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "sales"){
                        window.location.href = '/Endings/salesEnding.html';
                    }
                    else if (winningPlayerClasses[0] === "spy"){
                        window.location.href = '/Endings/spyEnding.html';
                    }
                    
                    
                    
                    
                    //ENDING SEQUENCE END    
                }
                
            

                
                
                playerSwitch = 1;
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
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player1MasterContainerArray[7][0][0];
            document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player1MasterContainerArray[7][1][0];
            document.getElementById("currentPlayerMobility").innerHTML =  "Mobility: " + player1MasterContainerArray[7][4];
            document.getElementById("currentPlayerStrengths").innerHTML = player1MasterContainerArray[7][2];
            document.getElementById("currentPlayerWeaknesses").innerHTML = player1MasterContainerArray[7][3];
            playerTurnNumberSequencer = 2;
                
                
            }
            //PLAYER 1 TURN END
    
    
    
    
    
            //PLAYER 2 TURN START
            else if (playerTurnNumberSequencer === 2) {
                playerSwitch = 2;
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
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player2MasterContainerArray[7][0][0]; 
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
                playerSwitch = 3;
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
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player3MasterContainerArray[7][0][0]; 
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
                playerSwitch = 4;
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
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player4MasterContainerArray[7][0][0]; 
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
                playerSwitch = 5;
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
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player5MasterContainerArray[7][0][0]; 
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
                playerSwitch = 6;
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
            document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player6MasterContainerArray[7][0][0]; 
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
    switch (playerSwitch) {
            
        case 1:
        player1Money = moneyInt + player1Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player1Money;             
        break;
        case 2:
        player2Money = moneyInt + player2Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player2Money; 
        break;
        case 3:
        player3Money = moneyInt + player3Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player3Money; 
        break;
        case 4:
        player4Money = moneyInt + player4Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player4Money; 
        break;
        case 5:
        player5Money = moneyInt + player5Money;
        document.getElementById("currentPlayerMoney").innerHTML = "Money: $" + player5Money; 
        break;
        case 6:
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
        switch (playerSwitch) {
            
        case 1:
        player1XP = XPInt + player1XP;
        document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player1XP + "XP";                
                break;
        case 2:
        player2XP = XPInt + player2XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player2XP + "XP";        
                break;
        case 3:
        player3XP = XPInt + player3XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player3XP + "XP";        
                break;
        case 4:
        player4Money = XPInt + player4XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player4XP + "XP";        
                break;
        case 5:
        player5Money = XPInt + player5XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player5XP + "XP";        
                break;
        case 6:
        player6Money = XPInt + player6XP;
            document.getElementById("currentPlayerXP").innerHTML = "Experience: " + player6XP + "XP";        
                break;
    }
}

//PROMO
function promoButton() { 
    
        switch (playerSwitch) {
        case 1:
                if (player1MasterContainerArray[7][0].length < 2) {
                    window.alert("You are at your full potential and there aren't any more promotions for you!");
                }
                else {
                player1MasterContainerArray[7][1].shift();
                player1MasterContainerArray[7][0].shift();                                               
                player1Salary = player1MasterContainerArray[7][1][0];
                player1JobTitle = player1MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player1Salary + " and your new Job Title is " + player1JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player1JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player1Salary;
                }
                break;
                
        case 2:
                if (player2MasterContainerArray[7][0].length < 2) {
                    window.alert("You are at your full potential and there aren't any more promotions for you!");
                }
                else {
                player2MasterContainerArray[7][1].shift();
                player2MasterContainerArray[7][0].shift();                                               
                player2Salary = player2MasterContainerArray[7][1][0];
                player2JobTitle = player2MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player2Salary + " and your new Job Title is " + player2JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player2JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player2Salary;
                }
                break;
                
        case 3:
                if (player3MasterContainerArray[7][0].length < 2) {
                    window.alert("You are at your full potential and there aren't any more promotions for you!");
                }
                else {
                player3MasterContainerArray[7][1].shift();
                player3MasterContainerArray[7][0].shift();                                               
                player3Salary = player3MasterContainerArray[7][1][0];
                player3JobTitle = player3MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player3Salary + " and your new Job Title is " + player3JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player3JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player3Salary;
                }
                break;
                
        case 4:
                if (player4MasterContainerArray[7][0].length < 2) {
                    window.alert("You are at your full potential and there aren't any more promotions for you!");
                }
                else {
                player4MasterContainerArray[7][1].shift();
                player4MasterContainerArray[7][0].shift();                                               
                player4Salary = player4MasterContainerArray[7][1][0];
                player4JobTitle = player4MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player4Salary + " and your new Job Title is " + player4JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player4JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player4Salary;
                }
                break;
                
        case 5:
                if (player5MasterContainerArray[7][0].length < 2) {
                    window.alert("You are at your full potential and there aren't any more promotions for you!");
                }
                else {
                player5MasterContainerArray[7][1].shift();
                player5MasterContainerArray[7][0].shift();                                               
                player5Salary = player5MasterContainerArray[7][1][0];
                player5JobTitle = player5MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player5Salary + " and your new Job Title is " + player5JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player5JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player5Salary;
                }
                break;
                
        case 6:
                if (player6MasterContainerArray[7][0].length < 2) {
                    window.alert("You are at your full potential and there aren't any more promotions for you!");
                }
                else {
                player6MasterContainerArray[7][1].shift();
                player6MasterContainerArray[7][0].shift();                                               
                player6Salary = player6MasterContainerArray[7][1][0];
                player6JobTitle = player6MasterContainerArray[7][0][0];
                window.alert("You've been promoted! Congrats! Your new salary is " + player6Salary + " and your new Job Title is " + player6JobTitle);
                document.getElementById("currentPlayerJobTitle").innerHTML = "Current Job Title: " + player6JobTitle;
                document.getElementById("currentPlayerSalary").innerHTML = "Current Salary: $" + player6Salary;
                }
                break;
        
    }
}
//MARRIAGE
function marriageButton() {
    switch (playerSwitch) {
            
        case 1:
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
            
        case 2:
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
            
        case 3:
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
            
        case 4:
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
            
        case 5:
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
            
        case 6:
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
        switch (playerSwitch) {
            
        case 1:
        player1Children = player1Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player1Children;
                break;
        case 2:
        player2Children = player2Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player2Children;
                break;
        case 3:
        player3Children = player3Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player3Children;
                break;
        case 4:
        player4Children = player4Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player4Children;
                break;
        case 5:
        player5Children = player5Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player5Children;
                break;
        case 6:
        player6Children = player6Children + childrenInt;
        document.getElementById("currentPlayerChildren").innerHTML = "Number of Children: " + player6Children;
                break;
    }
    
}
//MOBILITY
function mobilityButton() {
    switch (playerSwitch) {

        case 1:
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
        case 2:
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
        case 3:
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
        case 4:
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
        case 5:
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
        case 6:
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
//STATS BUTTONS END

//GAME ENDING SEQUENCE

