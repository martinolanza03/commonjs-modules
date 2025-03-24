/* 
    1 - names.js
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.

*/

function names(firstName, lastName) {
    firstName = process.argv[2];
    lastName = process.argv[3];
    return { firstName, lastName };
}

module.export = names;