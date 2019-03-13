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
var policeContainerArray = [policeJobTitleArray, policeSalaryArray, policeStrengths, policeWeaknesses];
var assassinContainerArray = [assassinJobTitleArray, assassinSalaryArray, assassinStrengths, assassinWeaknesses];
var criminalContainerArray = [criminalJobTitleArray, criminalSalaryArray, criminalStrengths, criminalWeaknesses];
var hoboContainerArray = [hoboJobTitleArray, hoboSalaryArray, hoboStrengths, hoboWeaknesses];
var inventorContainerArray = [inventorJobTitleArray, inventorSalaryArray, inventorStrengths, inventorWeaknesses];
var magicianContainerArray = [magicianJobTitleArray, magicianSalaryArray, magicianStrengths, magicianWeaknesses];
var politicianContainerArray = [politicianJobTitleArray, politicianSalaryArray, politicianStrengths, politicianWeaknesses];
var pornstarContainerArray = [pornstarJobTitleArray, pornstarSalaryArray, pornstarStrengths, pornstarWeaknesses];
var racingContainerArray = [racingJobTitleArray, racingSalaryArray, racingStrengths, racingWeaknesses];
var rapperContainerArray = [rapperJobTitleArray, rapperSalaryArray, rapperStrengths, rapperWeaknesses];
var salesContainerArray = [salesJobTitleArray, salesSalaryArray, salesStrengths, salesWeaknesses];
var spyContainerArray = [spyJobTitleArray, spySalaryArray, spyStrengths, spyWeaknesses];


//JOB CONTAINER ARRAYS END












//PLAYER 1 CURRENT STATS SCRIPTS START
var player1Children = 0;
var player1XP = 0;
var player1Mobility = 2;   
document.getElementById("player1Money").innerHTML = "Money: $" + policeSalaryArray[0].toString();
document.getElementById("player1XP").innerHTML = "Experience: " + player1XP.toString() + "XP";
document.getElementById("player1Children").innerHTML = "Number of Children: " + player1Children.toString();
var player1Marriage = false;
if (player1Marriage === true)
    {
       document.getElementById("player1Marriage").innerHTML =  "Marital Status: Married";
    }
else
    {
        document.getElementById("player1Marriage").innerHTML =  "Marital Status: Single";
    }    
document.getElementById("player1JobTitle").innerHTML = "Current Job Title: " + policeJobTitleArray[0]; 
document.getElementById("player1Salary").innerHTML = "Current Salary: $" + policeSalaryArray[0].toString();
document.getElementById("player1Mobility").innerHTML =  "Mobility: " + player1Mobility;
document.getElementById("currentPlayerStrengths").innerHTML = policeStrengths;
document.getElementById("currentPlayerWeaknesses").innerHTML = policeWeaknesses;
//PLAYER 1 CURRENT STATS SCRIPTS END
//MY SCRIPTS INTIALIZING DATA
//MY SCRIPTS END