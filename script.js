// faccio generare al computer 16 numeri casuali da 1 a 100, assicurandomi che non siano uguali tra loro

var numeriBomba = [];

for (var i = 0; i < 16; i++) {
  numeriBomba.push([Math.floor(Math.random() * 100)])
}

console.log(numeriBomba);

// chiedo all'utente di inserire 100 - 16 numeri da inserire uno alla volta sempre compreso tra 1 e 100.  Non si può inserire lo stesso numero più di una volta.

var i = 0;
var punteggio = 0;
var numeroUtente
var controller = true;
var numeriUtenteInseriti = []
while (i < 20 && punteggio < 84 && controller != false) {
  numeroUtente = parseInt(prompt("inserisci un numero"));
  if (numberController(numeroUtente, numeriBomba) == true) {
    controller = false;
  } else if (numberController(numeroUtente, numeriUtenteInseriti) == true) {
   alert("il valore inserito non è valido perchè già presente")
   i--
  } else {
    punteggio++
    numeriUtenteInseriti.push(numeroUtente)
  }
  i++
}

// il computer riporta il punteggio totale del giocatore
console.log(numeriUtenteInseriti);

console.log("il tuo punteggio è di: " + punteggio + " punti.");





//  funzione per controllare se un numero è già presente in un arrey.

function numberController(num1, arrey) {
  for (var i = 0; i < arrey.length; i++) {
    if (arrey[i] == num1) {
      return true ;
    }
  }
  return false;
}
