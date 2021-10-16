"use strict";
// Alert & Prompt Befehl

function uebung1() {
    alert('Hello World' /* kommentar */ );
    /*
    mehrzeilige Kommentare
    */
    // Einzeilige Kommentare

    prompt('wie alt bist du?', "Gib dein Alter ein");
    alert("Du bist " + prompt("Wie alt bist du?" /*, "Gib dein Alter ein"*/ ) + " Jahre alt");
}

// Variablen
function uebung2() {
    let firstVariable;
    firstVariable = 5;
    let secondVariable = "ich bin ein String";
    // Nicht empfehlenswert aufgrund Übersichtlichkeit und nicht kompatibel zu ES5
    /*let myVariable = 5, otherVariable = "hallo du", sowiesoVariable = 10; */
}


// alert Befehl
function uebung3() {
    let text = "Guten Morgen allerseits";
    alert(text);
}

// Konstanten
// const myCon = 'ich bin nicht veränderbar';
// myCon = 5;

// Datentyp ermitteln

function uebung4() {
    let ganzeZahl = 3;
    let kommaZahl = 2.34;
    let buchstabe = "a";
    let wort = "hallo";
    let wahrheitswert = true;
    let ohneWert;

    document.write('ganzeZahl: ' + typeof ganzeZahl + '<br>');
    document.write('kommaZahl: ' + typeof kommaZahl + "<br>");
    document.write('buchstabe: ' + typeof buchstabe + "<br>");
    document.write('wort: ' + typeof wort + "<br>");
    document.write('wahrheitswert: ' + typeof wahrheitswert + "<br>");
    document.write('ohne Wert: ' + typeof ohneWert + "<br>");

    let eingabe = prompt("Gib eine Zahl ein");
    document.write("Eingabe Datentyp " + typeof eingabe + "<br>");
    document.write(eingabe + 3 + "<br>");
    eingabe = Number(eingabe);
    document.write(eingabe + 3 + "<br>");
}

// Operatoren
/*
    + Addition
    - Subtration
    / Division
    * Multiplikation
    ** Potenz
    % Modulo
    += ERhöhung
    -= Verringerung
    *= Variable mit angegeben wert multipliziert
    /= Variable mit angegebenen Wert geteilt
    ++ Erhöhung um 1
    -- Verringerung um 1
*/
let myVariable = 3;
myVariable = myVariable * 2;
myVariable *= 2;
myVariable++;

// IF  Verzweigung
function uebung5() {
    let eingabe1 = Number(prompt('Ergebnis aus 2 + 3'));
    let eingabe2 = Number(prompt('Ergebnis aus 2 * 3'));
    /* let eingabe1 = prompt('Ergebnis aus 2 + 3');
    let eingabe2 = prompt('Ergebnis aus 2 * 3'); */

    if (eingabe1 === 5 || eingabe2 === 6) {
        document.write('Mindestens eine Antwort ist richtig<br>');
    } else {
        document.write('Beide Antworten sind falsch<br>');
    }
    document.write(typeof eingabe1 + "<br>");
}

// Switch Case
function uebung6() {
    let article = prompt("Welches Produkt suchst du?");
    switch (article) {
        case "Semmel":
        case "Kornspitz":
        case "Brot":
            alert("Preis: 2,99 €");
            break;
        case "Krapfen":
            alert("Preis: 1,99 €");
            break;
        default:
            alert('Produkt nicht gefunden');
    }
}

function uebung7() {
    // Variante 1
    let myArray01 = new Array();
    // Variante 2
    let myArray = [];
    // Array befüllt erstellen
    let newArray = ['Hund', 'Katze', 'Maus', 2021];
    document.getElementById('output').innerHTML = newArray + '<br>';
    console.log(newArray);
    console.log(newArray[2]);
    console.log(newArray.length);
    newArray[newArray.length] = 'Neuen Eintrag';
    document.getElementById('output').innerHTML += newArray;
}

function uebung8() {
    let myArray = [];
    myArray[0] = ['Hund', 15.5, true];
    myArray[1] = ['Katze', 7.8, true];
    myArray[2] = ['Maus', .4, false];

    document.getElementById('output').innerHTML = myArray + '<br>';
    console.log(myArray);
    document.getElementById('output').innerHTML = 
        'Tier: ' + myArray[1][0] + '<br>' + 
        'Größe: ' + myArray[2][1] + '<br>' + 
        'Besitzt: ' + myArray[1][2] + '<br>';
}