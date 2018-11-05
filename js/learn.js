console.info(0);

var nume = "Domnescu";
var prenume = "Daniel";
var owner = "Daniel's";
var msg = 'ai zis "Nick?"';
var msg2 = 'Nu, am zis "Nicolae"';
var template = `Text cu ghilimele " sau '`;
var skills = ["html", "css", "js"];

console.debug("Auzi..? dar cum te cheama? -" + prenume);
sayWelcome();

prenume = "Dany";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("Cum te cheama? -" + prenume);

// function executCeva(mesaj){console.log("eu sunt" + mesaj)};

function sayWelcome() {
  console.info("Salut " + prenume + ",bine ai venit la noi!");
}
sayWelcome();

// schimb valutar
// operatori * / + -

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;

myRON = myEUR * cursEUR;
console.info("Eu am " + myRON + " RON.");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info("Tu ai " + friendRON + " RON.");

//retragere bancomat
var ATMFunds = 5000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  return comision;
}

function extractFromATM(ammount) {
  console.info("==== ==== ==== ====");
  console.info("suma extrasa este: " + ammount);
  var comision = getExtractFee(ammount);
  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("Insufficient founds,");
    return;
  }
  if (ATMFunds < totalExtract) {
    console.error("ATM insufficient founds,");
  }
  funds = funds - totalExtract;

  console.info("comision aplicat: " + comision);
  console.info("Sold curent: " + funds + " RON.");
  console.info("==== ==== ==== ====");
}

extractFromATM(1005); //nu e multiplu de 10
extractFromATM(100000); // solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);
