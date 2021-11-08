"use strict";

// ToDo Variablen Deklarieren
let a, b, c, sum, question, user, tip, userResult;
let level = 1;

// ToDo Buttons ausblenden und deaktivieren

// ToDo 
function username() {
  // Namen des Spielers abfragen und in eine Variable speichern

  // Funktion aufrufen um den richtigen Button zu aktivieren

  // Play Button verstecken

  // Restart Button einblenden

}

// ToDo 
function activeButton(id) {
  // Button klickbar machen

  // Button die Klasse active zufügen

  // vorherigen Button deaktivieren

  // vorherigen Button Klasse active entfernen

  // Game mit Level aufrufen

}

// ToDo 
function start() {
  // input leeren

  // Seite neu laden

}

// ToDo 
function checkResult() {
  // Input auslesen

  // Überprüfen ob Userergebnis richtig ist

    // wenn ja dann Ausgabe gut

    // Input Feld wieder leeren

    // Level rauf zählen

    // nächsten Button aktivieren
  
  // ansonsten

    // Ausgabe falsch

  // Wenn level 9 erreicht

    // FadeOut

}

// Die Aufgaben in den Runden
function game(num) {
  switch (num) {
    case 1:
      a = Math.floor(Math.random() * 49 + 1);
      b = Math.floor(Math.random() * 49 + 1);
      question = "Was ist das Ergebnis aus " + a + " + " + b + "?";
      sum = a + b;
      break;
    case 2:
      a = Math.floor(Math.random() * 49 + 51);
      b = Math.floor(Math.random() * 49 + 1);
      question = "Was ist das Ergebnis aus " + a + " - " + b + "?";
      sum = a - b;
      break;
    case 3:
      a = Math.floor(Math.random() * 19 + 1);
      b = Math.floor(Math.random() * 19 + 1);
      question = "Was ist das Ergebnis aus " + a + " * " + b + "?";
      sum = a * b;
      break;
    case 4:
      a = Math.floor(Math.random() * 9 + 1); // der Divisor
      b = Math.floor(Math.random() * 49 + 1); // sum des Divisor
      question = "Was ist das Ergebnis aus " + a + "*" + b + " / " + a + "?";
      sum = a * b / a;
      break;
    case 5:
      a = Math.floor(Math.random() * 49 + 1);
      b = Math.floor(Math.random() * 49 + 1);
      c = Math.floor(Math.random() * 9 + 1);
      question = "Was ist das Ergebnis aus " + a + " + " + b + " * " + c + "?";
      sum = a + b * c;
      break;
    case 6:
      a = Math.floor(Math.random() * 49 + 1);
      b = Math.floor(Math.random() * 49 + 1);
      c = Math.floor(Math.random() * 9 + 1);
      question = "Was ist das Ergebnis aus (" + a + " + " + b + ") * " + c + "?";
      sum = (a + b) * c;
      break;
    case 7:
      a = Math.floor(Math.random() * 9 + 1);
      b = Math.floor(Math.random() * 49 + 1);
      c = Math.floor(Math.random() * 49 + 1);
      question = "Was ist das Ergebnis aus " + a + "*" + b + " / " + a + " - " + c + "?";
      sum = a * b / a - c;
      break;
    case 8:
      a = Math.floor(Math.random() * 19 + 1); //das sum
      question = "Was ist die Quadratwurzel von " + a * a + "?";
      sum = Math.sqrt(a*a);
      break;
    case 9:
      a = Math.floor(Math.random() * 9 + 2); //die Basis
      b = Math.floor(Math.random() * 9 + 1); //das sum
      question = "Was ist der Logarithmus von " + Math.pow(a, b) + " zur Basis " + a + "?";
      sum = Math.pow(a, b);
      break;
  }
  console.log(sum);
  // ToDo Ausgabe der Frage 

}