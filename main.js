// Dichiarazione variabili
var larghezzaGriglia = '40%'; // Larghezza della griglia in percentuale
var righeGriglia = 6; // Quadratini per ogni riga
var margini = '2px'; // Margine sinistro + margine destro in px dei quadratini
var numero_estratto;
// Document Ready
$(document).ready(function(){
    // Chiamiamo la funzione per la creazione della Griglia
    creaGriglia(larghezzaGriglia, righeGriglia);
    // Evento click di un quadratino (per colorarlo verde o rosso)
    $(".quadratino").click(function() {
        // Memorizzo in una variabile il click attuale
        var click_attuale = $(this);
        // Iniziouna chiamata Ajax
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                // Memorizzo il risultato restituito in una variabile
                numero = data.response;
                // Controllo se il numero restituito dall' API è <= 5
                if (numero <= 5) {
                    // Coloro il quadratino giallo se  numero è <= 5
                    click_attuale.addClass("yellow");
                    // Stampo al centro del quadratino il  numero restituito  dall ' API
                    click_attuale.html(numero);
                } else {
                    // Coloro il quadratino verde se  numero è > 5
                    click_attuale.addClass("green");
                    // Stampo al centro del quadratino il  numero restituito  dall ' API
                    click_attuale.html(numero);
                }
            },
            error: function() {
                alert('Error')
            }
        });
    });
});

// Ridimensiona la griglia in modo responsive
$(window).resize(function() {
    creaQuadratini();
});


// Funzione per la generazione dei quadratini
function creaGriglia(larghezzaGriglia, righeGriglia) {
  // Calcolo il totale dei quadratini della griglia
  var totaleQuadratini = righeGriglia * righeGriglia;
  // Creo la struttura della griglia in html con un ciclo for in base alla dimensione della griglia data dalla variabile totaleQuadratini
  for (j = 0; j < totaleQuadratini; j++) {
      // Aggiungo il div quadratino alla griglia
      $("<div class='quadratino'></div>").appendTo($(".contenitore"));
  }
  // Assegno la larghezza impostata nella variabile altezzaGriglia alla griglia
  $('.contenitore').width(larghezzaGriglia);
  creaQuadratini();
}
// Funzione che imposta le misure della griglia e dei quadratini
function creaQuadratini() {
    // Creo la stringa che contiene il calcolo dinamico della larghezza del Quadratino
    calcLargQuadratino = "calc((100% / " + righeGriglia + ") - " + margini;
    // Imposto la larghezza del quadratino
    $(".quadratino").width(calcLargQuadratino);
    // Creo una variabile per memorizzare la larghezza del quadratino
    var altezzaQuadratino = $(".quadratino").width();
    // Imposto l'altezza del quadratino uguale alla larghezza
    $(".quadratino").height(altezzaQuadratino);
}
