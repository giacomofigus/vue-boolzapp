/*
Milestone 1 
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto
Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato

*/

const { createApp } = Vue

createApp({
    data(){
        return{

            newMessage: "",
            currentAvatar: 0,
            contacts: [
                {
                  name: 'Marco',
                  avatar: 'img/avatar_1.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 08:00', message: 'Ciao!', status: 'inviato' },
                    { date: '2024-01-31 10:30', message: 'Come stai?', status: 'inviato' },
                    { date: '2024-02-01 12:45', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Bob',
                  avatar: 'img/avatar_2.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 09:15', message: 'Hey!', status: 'ricevuto' },
                    { date: '2024-01-31 11:45', message: 'Come va?', status: 'ricevuto' },
                    { date: '2024-02-01 13:30', message: 'Bene, grazie!', status: 'inviato' }
                  ]
                },
                {
                  name: 'Charlie',
                  avatar: 'img/avatar_3.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 10:30', message: 'Fatta la spesa?', status: 'inviato' },
                    { date: '2024-01-31 12:15', message: 'eja', status: 'ricevuto' },
                    { date: '2024-02-01 14:20', message: 'Appo', status: 'inviato' }
                  ]
                },
                {
                  name: 'David',
                  avatar: 'img/avatar_4.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 11:00', message: 'Vinto 100€ alla schedina', status: 'ricevuto' },
                    { date: '2024-01-31 13:30', message: 'Brutto burdo', status: 'inviato' },
                    { date: '2024-02-01 15:15', message: 'Ahahahaha', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Christian',
                  avatar: 'img/avatar_5.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 12:45', message: 'Ciao!', status: 'inviato' },
                    { date: '2024-01-31 14:00', message: 'Cavallo', status: 'inviato' },
                    { date: '2024-02-01 16:00', message: 'Ti coddiri', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Franesca',
                  avatar: 'img/avatar_6.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 13:20', message: 'Saluti!', status: 'inviato' },
                    { date: '2024-01-31 15:15', message: 'Molenti', status: 'inviato' },
                    { date: '2024-02-01 17:30', message: 'Demullu', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Giacomo',
                  avatar: 'img/avatar_7.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 14:00', message: 'Ciao!', status: 'inviato' },
                    { date: '2024-01-31 16:00', message: 'Che fai?', status: 'inviato' },
                    { date: '2024-02-01 18:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Henry',
                  avatar: 'img/avatar_8.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 15:30', message: 'Hey!', status: 'inviato' },
                    { date: '2024-01-31 17:45', message: 'Come stai?', status: 'inviato' },
                    { date: '2024-02-01 20:15', message: 'Anche io, grazie!', status: 'ricevuto' }
                  ]
                }
              ]

        }
    },
    methods:{
        changeUser(index){
            this.currentAvatar = index
        },
        gettingHours(dateString){
          const date = new Date(dateString)
          return `${date.getHours()}:${date.getMinutes()}`;
        },
        addMess(){
          if(this.newMessage !== ""){

            let fullDate = new Date()
            let fullHours = `${fullDate.getHours()}:${fullDate.getMinutes()}` 
            
            this.contacts[this.currentAvatar].messages.push({
              date: fullDate,
              message: this.newMessage,
              status: 'inviato',
            })
          }
          this.newMessage=""
        }
    }
}).mount("#app")    