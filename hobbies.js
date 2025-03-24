/* 
    2 - hobbies.js
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire  un array di stringhe contenenti gli hobby.
2. Esporta la funzione dal file.

*/

function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
    hobbyOne = process.argv[4];
    hobbyTwo = process.argv[5];
    hobbyThree = process.argv[6];
    return [hobbyOne, hobbyTwo, hobbyThree];
}

module.export = hobbies;