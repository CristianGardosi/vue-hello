// ***********************************************************
// BIGLIETTO DA VISITA DINAMICO CREATO DALL'UTENTE COMPILANDO GLI INPUT (sintassi mustache + v-model)
// ***********************************************************

// Creo la costante per targhettizzare la porzione di codice HTML a cui applicare le mie modifiche dinamiche
const biglietto = new Vue({
    el: '#biglietto',
    data: {
        title: '',
        description: '',
        author: ''
    }
});




// ***********************************************************
// CREARE DUE INPUT PER NOME E COGNOME DELL'UTENTE E IN UN <p> UTILIZZARE I DATI OTTENUTI PER SALUTARLO (sintassi mustache + v-model)
// ***********************************************************
const ciao = new Vue ({
    el: '#ciao',
    data: {
        nome: '',
        cognome: ''
    }
});




// ***********************************************************
// CREIAMO UNA PAGINA CON UN TITOLO DI COLORE ROSSO CHE AL CLICK SUL BOTTONE DIVENTA BLU (v-bind + methods + event@click)
// ***********************************************************
const btn = new Vue ({
    el: '#btn',
    data: {
        titleClass: 'red'
    },
    // I methods di VUE corrispondono alla funzioni javascript
    methods: {
        changeColor: function() {
            if(this.titleClass === 'red'){
                this.titleClass = 'blue';
            }else{
                this.titleClass = 'red';
            }
        }
    }
});