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
while (i < 84 && punteggio < 84 && controller != false) {
  numeroUtente = parseInt(prompt("inserisci un numero"));
  if (numeroUtente == numeriBomba[i]) {
    controller = false;
    console.log(numeroUtente);
  } else {
    punteggio++
  }
  i++
}
console.log(punteggio);

// il codice confronta il numero inserito dall'utente con i numeri generati dal pc, se uno di questi combacia il gioco si ferma.

// il computer riporta il punteggio totale del giocatore
