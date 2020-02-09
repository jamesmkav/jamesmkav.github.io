//DECLARING ALL THE VARIABLES
//ASSASSIN VARIABLES
var assassinClassName = document.getElementById("assassinClassName");
var assassinImage = document.getElementById("assassinImage");
var assassinClassDescription = document.getElementById("assassinClassDescription");
var assassinLV1Salary = document.getElementById("assassinLV1Salary");
var assassinLV2Salary = document.getElementById("assassinLV2Salary");
var assassinLV3Salary = document.getElementById("assassinLV3Salary");
var assassinLV1PerkDescription = document.getElementById("assassinLV1PerkDescription");
var assassinLV2PerkDescription = document.getElementById("assassinLV2PerkDescription");
var assassinLV3PerkDescription = document.getElementById("assassinLV3PerkDescription");
//HOBO VARIABLES
var hoboClassName = document.getElementById("hoboClassName");
var hoboImage = document.getElementById("hoboImage");
var hoboClassDescription = document.getElementById("hoboClassDescription");
var hoboLV1Salary = document.getElementById("hoboLV1Salary");
var hoboLV2Salary = document.getElementById("hoboLV2Salary");
var hoboLV3Salary = document.getElementById("hoboLV3Salary");
var hoboLV1PerkDescription = document.getElementById("hoboLV1PerkDescription");
var hoboLV2PerkDescription = document.getElementById("hoboLV2PerkDescription");
var hoboLV3PerkDescription = document.getElementById("hoboLV3PerkDescription");
//INVENTOR VARIABLES
var inventorClassName = document.getElementById("inventorClassName");
var inventorImage = document.getElementById("inventorImage");
var inventorClassDescription = document.getElementById("inventorClassDescription");
var inventorLV1Salary = document.getElementById("inventorLV1Salary");
var inventorLV2Salary = document.getElementById("inventorLV2Salary");
var inventorLV3Salary = document.getElementById("inventorLV3Salary");
var inventorLV1PerkDescription = document.getElementById("inventorLV1PerkDescription");
var inventorLV2PerkDescription = document.getElementById("inventorLV2PerkDescription");
var inventorLV3PerkDescription = document.getElementById("inventorLV3PerkDescription");
//MAGICIAN VARIABLES
var magicianClassName = document.getElementById("magicianClassName");
var magicianImage = document.getElementById("magicianImage");
var magicianClassDescription = document.getElementById("magicianClassDescription");
var magicianLV1Salary = document.getElementById("magicianLV1Salary");
var magicianLV2Salary = document.getElementById("magicianLV2Salary");
var magicianLV3Salary = document.getElementById("magicianLV3Salary");
var magicianLV1PerkDescription = document.getElementById("magicianLV1PerkDescription");
var magicianLV2PerkDescription = document.getElementById("magicianLV2PerkDescription");
var magicianLV3PerkDescription = document.getElementById("magicianLV3PerkDescription");
//POLICE VARIABLES
var policeClassName = document.getElementById("policeClassName");
var policeImage = document.getElementById("policeImage");
var policeClassDescription = document.getElementById("policeClassDescription");
var policeLV1Salary = document.getElementById("policeLV1Salary");
var policeLV2Salary = document.getElementById("policeLV2Salary");
var policeLV3Salary = document.getElementById("policeLV3Salary");
var policeLV1PerkDescription = document.getElementById("policeLV1PerkDescription");
var policeLV2PerkDescription = document.getElementById("policeLV2PerkDescription");
var policeLV3PerkDescription = document.getElementById("policeLV3PerkDescription");
//POLITICIAN VARIABLES
var politicianClassName = document.getElementById("politicianClassName");
var politicianImage = document.getElementById("politicianImage");
var politicianClassDescription = document.getElementById("politicianClassDescription");
var politicianLV1Salary = document.getElementById("politicianLV1Salary");
var politicianLV2Salary = document.getElementById("politicianLV2Salary");
var politicianLV3Salary = document.getElementById("politicianLV3Salary");
var politicianLV1PerkDescription = document.getElementById("politicianLV1PerkDescription");
var politicianLV2PerkDescription = document.getElementById("politicianLV2PerkDescription");
var politicianLV3PerkDescription = document.getElementById("politicianLV3PerkDescription");
//RACING VARIABLES
var racingClassName = document.getElementById("racingClassName");
var racingImage = document.getElementById("racingImage");
var racingClassDescription = document.getElementById("racingClassDescription");
var racingLV1Salary = document.getElementById("racingLV1Salary");
var racingLV2Salary = document.getElementById("racingLV2Salary");
var racingLV3Salary = document.getElementById("racingLV3Salary");
var racingLV1PerkDescription = document.getElementById("racingLV1PerkDescription");
var racingLV2PerkDescription = document.getElementById("racingLV2PerkDescription");
var racingLV3PerkDescription = document.getElementById("racingLV3PerkDescription");
//SALES VARIABLES
var salesClassName = document.getElementById("salesClassName");
var salesImage = document.getElementById("salesImage");
var salesClassDescription = document.getElementById("salesClassDescription");
var salesLV1Salary = document.getElementById("salesLV1Salary");
var salesLV2Salary = document.getElementById("salesLV2Salary");
var salesLV3Salary = document.getElementById("salesLV3Salary");
var salesLV1PerkDescription = document.getElementById("salesLV1PerkDescription");
var salesLV2PerkDescription = document.getElementById("salesLV2PerkDescription");
var salesLV3PerkDescription = document.getElementById("salesLV3PerkDescription");
//SPY VARIABLES
var spyClassName = document.getElementById("spyClassName");
var spyImage = document.getElementById("spyImage");
var spyClassDescription = document.getElementById("spyClassDescription");
var spyLV1Salary = document.getElementById("spyLV1Salary");
var spyLV2Salary = document.getElementById("spyLV2Salary");
var spyLV3Salary = document.getElementById("spyLV3Salary");
var spyLV1PerkDescription = document.getElementById("spyLV1PerkDescription");
var spyLV2PerkDescription = document.getElementById("spyLV2PerkDescription");
var spyLV3PerkDescription = document.getElementById("spyLV3PerkDescription");


var firstColumnContent = document.getElementById("firstColumnContent");
var secondColumnContent = document.getElementById("secondColumnContent");


//ASSASSIN ON/OFF FUNCTIONS
function assassinON() {
    assassinClassName.style.display = "block";
    assassinImage.style.display = "block";
    assassinClassDescription.style.display = "block";
    assassinLV1PerkDescription.style.display = "block";
    assassinLV2PerkDescription.style.display = "block";
    assassinLV3PerkDescription.style.display = "block";
    assassinLV1Salary.style.display = "block";
    assassinLV2Salary.style.display = "block";
    assassinLV3Salary.style.display = "block";
}
function assassinOFF() {
    assassinClassName.style.display = "none";
    assassinImage.style.display = "none";
    assassinClassDescription.style.display = "none";
    assassinLV1PerkDescription.style.display = "none";
    assassinLV2PerkDescription.style.display = "none";
    assassinLV3PerkDescription.style.display = "none";
    assassinLV1Salary.style.display = "none";
    assassinLV2Salary.style.display = "none";
    assassinLV3Salary.style.display = "none";
}

//HOBO ON/OFF FUNCTIONS
function hoboON() {
    hoboClassName.style.display = "block";
    hoboImage.style.display = "block";
    hoboClassDescription.style.display = "block";
    hoboLV1PerkDescription.style.display = "block";
    hoboLV2PerkDescription.style.display = "block";
    hoboLV3PerkDescription.style.display = "block";
    hoboLV1Salary.style.display = "block";
    hoboLV2Salary.style.display = "block";
    hoboLV3Salary.style.display = "block";
}
function hoboOFF() {
    hoboClassName.style.display = "none";
    hoboImage.style.display = "none";
    hoboClassDescription.style.display = "none";
    hoboLV1PerkDescription.style.display = "none";
    hoboLV2PerkDescription.style.display = "none";
    hoboLV3PerkDescription.style.display = "none";
    hoboLV1Salary.style.display = "none";
    hoboLV2Salary.style.display = "none";
    hoboLV3Salary.style.display = "none";
}
//INVENTOR ON/OFF FUNCTIONS
function inventorON() {
    inventorClassName.style.display = "block";
    inventorImage.style.display = "block";
    inventorClassDescription.style.display = "block";
    inventorLV1PerkDescription.style.display = "block";
    inventorLV2PerkDescription.style.display = "block";
    inventorLV3PerkDescription.style.display = "block";
    inventorLV1Salary.style.display = "block";
    inventorLV2Salary.style.display = "block";
    inventorLV3Salary.style.display = "block";
}
function inventorOFF() {
    inventorClassName.style.display = "none";
    inventorImage.style.display = "none";
    inventorClassDescription.style.display = "none";
    inventorLV1PerkDescription.style.display = "none";
    inventorLV2PerkDescription.style.display = "none";
    inventorLV3PerkDescription.style.display = "none";
    inventorLV1Salary.style.display = "none";
    inventorLV2Salary.style.display = "none";
    inventorLV3Salary.style.display = "none";
}
//MAGICIAN ON/OFF FUNCTIONS
function magicianON() {
    magicianClassName.style.display = "block";
    magicianImage.style.display = "block";
    magicianClassDescription.style.display = "block";
    magicianLV1PerkDescription.style.display = "block";
    magicianLV2PerkDescription.style.display = "block";
    magicianLV3PerkDescription.style.display = "block";
    magicianLV1Salary.style.display = "block";
    magicianLV2Salary.style.display = "block";
    magicianLV3Salary.style.display = "block";
}
function magicianOFF() {
    magicianClassName.style.display = "none";
    magicianImage.style.display = "none";
    magicianClassDescription.style.display = "none";
    magicianLV1PerkDescription.style.display = "none";
    magicianLV2PerkDescription.style.display = "none";
    magicianLV3PerkDescription.style.display = "none";
    magicianLV1Salary.style.display = "none";
    magicianLV2Salary.style.display = "none";
    magicianLV3Salary.style.display = "none";
}
//POLICE ON/OFF FUNCTIONS
function policeON() {
    policeClassName.style.display = "block";
    policeImage.style.display = "block";
    policeClassDescription.style.display = "block";
    policeLV1PerkDescription.style.display = "block";
    policeLV2PerkDescription.style.display = "block";
    policeLV3PerkDescription.style.display = "block";
    policeLV1Salary.style.display = "block";
    policeLV2Salary.style.display = "block";
    policeLV3Salary.style.display = "block";
}
function policeOFF() {
    policeClassName.style.display = "none";
    policeImage.style.display = "none";
    policeClassDescription.style.display = "none";
    policeLV1PerkDescription.style.display = "none";
    policeLV2PerkDescription.style.display = "none";
    policeLV3PerkDescription.style.display = "none";
    policeLV1Salary.style.display = "none";
    policeLV2Salary.style.display = "none";
    policeLV3Salary.style.display = "none";
}

//POLITICIAN ON/OFF FUNCTIONS
function politicianON() {
    politicianClassName.style.display = "block";
    politicianImage.style.display = "block";
    politicianClassDescription.style.display = "block";
    politicianLV1PerkDescription.style.display = "block";
    politicianLV2PerkDescription.style.display = "block";
    politicianLV3PerkDescription.style.display = "block";
    politicianLV1Salary.style.display = "block";
    politicianLV2Salary.style.display = "block";
    politicianLV3Salary.style.display = "block";
}
function politicianOFF() {
    politicianClassName.style.display = "none";
    politicianImage.style.display = "none";
    politicianClassDescription.style.display = "none";
    politicianLV1PerkDescription.style.display = "none";
    politicianLV2PerkDescription.style.display = "none";
    politicianLV3PerkDescription.style.display = "none";
    politicianLV1Salary.style.display = "none";
    politicianLV2Salary.style.display = "none";
    politicianLV3Salary.style.display = "none";
}

//RACING ON/OFF FUNCTIONS
function racingON() {
    racingClassName.style.display = "block";
    racingImage.style.display = "block";
    racingClassDescription.style.display = "block";
    racingLV1PerkDescription.style.display = "block";
    racingLV2PerkDescription.style.display = "block";
    racingLV3PerkDescription.style.display = "block";
    racingLV1Salary.style.display = "block";
    racingLV2Salary.style.display = "block";
    racingLV3Salary.style.display = "block";
}
function racingOFF() {
    racingClassName.style.display = "none";
    racingImage.style.display = "none";
    racingClassDescription.style.display = "none";
    racingLV1PerkDescription.style.display = "none";
    racingLV2PerkDescription.style.display = "none";
    racingLV3PerkDescription.style.display = "none";
    racingLV1Salary.style.display = "none";
    racingLV2Salary.style.display = "none";
    racingLV3Salary.style.display = "none";
}
//SALES ON/OFF FUNCTIONS
function salesON() {
    salesClassName.style.display = "block";
    salesImage.style.display = "block";
    salesClassDescription.style.display = "block";
    salesLV1PerkDescription.style.display = "block";
    salesLV2PerkDescription.style.display = "block";
    salesLV3PerkDescription.style.display = "block";
    salesLV1Salary.style.display = "block";
    salesLV2Salary.style.display = "block";
    salesLV3Salary.style.display = "block";
}
function salesOFF() {
    salesClassName.style.display = "none";
    salesImage.style.display = "none";
    salesClassDescription.style.display = "none";
    salesLV1PerkDescription.style.display = "none";
    salesLV2PerkDescription.style.display = "none";
    salesLV3PerkDescription.style.display = "none";
    salesLV1Salary.style.display = "none";
    salesLV2Salary.style.display = "none";
    salesLV3Salary.style.display = "none";
}

//SPY ON/OFF FUNCTIONS
function spyON() {
    spyClassName.style.display = "block";
    spyImage.style.display = "block";
    spyClassDescription.style.display = "block";
    spyLV1PerkDescription.style.display = "block";
    spyLV2PerkDescription.style.display = "block";
    spyLV3PerkDescription.style.display = "block";
    spyLV1Salary.style.display = "block";
    spyLV2Salary.style.display = "block";
    spyLV3Salary.style.display = "block";
}
function spyOFF() {
    spyClassName.style.display = "none";
    spyImage.style.display = "none";
    spyClassDescription.style.display = "none";
    spyLV1PerkDescription.style.display = "none";
    spyLV2PerkDescription.style.display = "none";
    spyLV3PerkDescription.style.display = "none";
    spyLV1Salary.style.display = "none";
    spyLV2Salary.style.display = "none";
    spyLV3Salary.style.display = "none";
}


//ASSASSIN BUTTON
function assassinClassButton() {
  if (assassinClassName.style.display === "none") {
    assassinON();
    hoboOFF();
    inventorOFF();
    magicianOFF();
    policeOFF();
    politicianOFF();
    racingOFF();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    assassinOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}

//HOBO BUTTON FUNCTION
function hoboClassButton() {
  if (hoboClassName.style.display === "none") {
    assassinOFF();
    hoboON();
    inventorOFF();
    magicianOFF();
    policeOFF();
    politicianOFF();
    racingOFF();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    hoboOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//INVENTOR BUTTON FUNCTION
function inventorClassButton() {
  if (inventorClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorON();
    magicianOFF();
    policeOFF();
    politicianOFF();
    racingOFF();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    inventorOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//MAGICIAN BUTTON FUNCTION
function magicianClassButton() {
  if (magicianClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorOFF();
    magicianON();
    policeOFF();
    politicianOFF();
    racingOFF();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    magicianOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//POLICE BUTTON FUNCTION
function policeClassButton() {
  if (policeClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorOFF();
    magicianOFF();
    policeON();
    politicianOFF();
    racingOFF();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    policeOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//POLITICIAN BUTTON FUNCTION
function politicianClassButton() {
  if (politicianClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorOFF();
    magicianOFF();
    policeOFF();
    politicianON();
    racingOFF();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    politicianOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//RACING BUTTON FUNCTION
function racingClassButton() {
  if (racingClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorOFF();
    magicianOFF();
    policeOFF();
    politicianOFF();
    racingON();
    salesOFF();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    racingOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//SALES BUTTON FUNCTION
function salesClassButton() {
  if (salesClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorOFF();
    magicianOFF();
    policeOFF();
    politicianOFF();
    racingOFF();
    salesON();
    spyOFF();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    salesOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}
//SPY BUTTON FUNCTION
function spyClassButton() {
  if (spyClassName.style.display === "none") {
    assassinOFF();
    hoboOFF();
    inventorOFF();
    magicianOFF();
    policeOFF();
    politicianOFF();
    racingOFF();
    salesOFF();
    spyON();
    secondColumnContent.style.display = "block";
    firstColumnContent.style.display = "block";
  } else {
    spyOFF();
    secondColumnContent.style.display = "none";
    firstColumnContent.style.display = "none";
  }
}