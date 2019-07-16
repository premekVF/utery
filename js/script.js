// Deklarace proměnné
var pokusu = 0;

// Píši funkci
function ukazCas( ) {

    // Zvýším hodnotu v proměnné pokusu o jedna
    pokusu = pokusu + 1;    
    // Inicializuji objekt Date
    let aktualniCas = new Date();
    // Získám údaje z objektu
    let hodin = 'Hodin: ' + aktualniCas.getHours();
    let minut = 'Minut: ' + aktualniCas.getMinutes();
    let vterin = 'Vteřin: ' + aktualniCas.getSeconds();
  
    // Vytvořím text
    let spojenyCas =  hodin + '<br />' + minut + '<br />' + vterin;
    
    // Zapíši hodnoty do webu
    document.getElementById('hodiny').innerHTML = spojenyCas;
    document.getElementById('pokusCislo').innerHTML = pokusu;

    // Zapnu/Vypnu styl barevne
    document.getElementById('hodiny').classList.toggle('barevne');
}

function ahoj(parametr) {
    alert('Programování ahoj ' + parametr);
}
