function learnVariables() {
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
}

function learnIterators() {
  function countTo(n) {
    console.info("Sa numaram pana la " + n);
    // for(init; contition; after)
    for (var i = 1; i <= n; i++) {
      console.info(i);
    }
    i = 1;
    for (; i <= n; ) {
      console.info(i);
      i++;
    }
  }

  function countDown(n) {
    for (var i = n; i > 0; i--) {
      console.info(i);
    }
    var i = n;
    while (i > 0) {
      console.info(i);
      i--;
    }
  }

  countTo(10);
  countDown(10);
}

//learnIterators();

//learnVariables();

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

// TODO implement it home please
function checkExtractPermission() {
  return true;
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
  //ATMFunds = ATMFunds - ammount;
  ATMFunds -= ammount;
  console.info("comision aplicat: " + comision);
  console.info("Sold curent: " + funds + " RON.");
  console.info("==== ==== ==== ====");
}

// extractFromATM(1005); //nu e multiplu de 10
// extractFromATM(100000); // solduri insuficiente - rezolvat
// extractFromATM(3000);
// extractFromATM(3000);
// extractFromATM(100);
// extractFromATM(0); // fara comision

//calculator cu explicatii

// var a;
// var b;
// var i;

// function calculeazaAB(a, b) {
//   var termen1;
//   var termen2;
//   var suma = a + b;
//   if (a > b) {
//     termen1 = a;
//     termen2 = b;
//   } else {
//     termen1 = b;
//     termen2 = a;
//   }
//   if (suma > 99) {
//     console.warn("too big");
//   } else {
//     console.info(a + " + " + b + " = " + suma);
//     while (termen2-- >= 1) {
//       termen1++;
//       console.info("Din " + termen2 + " scadem 1 si il adaugam la " + termen1 + ". Rezultatul nou este " + suma + ".")
//     }
//   }
// }

