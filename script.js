// GENERATORE DI PASSWORD

// Chiedi all’utente il suo nome
const userName = prompt('Scrivi il tuo nome');

// poi chiedi il suo cognome
const userLastName = prompt('Scrivi il tuo cognome');

// poi chiedi il suo colore preferito
const color = prompt('Scrivi il tuo colore preferito');


// Infine scrivi sulla pagina nomecognomecolorepreferito23
let Result = `la tua password è: ${userName}${userLastName}${color}${'23'}`;
document.getElementById('result').innerHTML = Result;
console.log(Result);