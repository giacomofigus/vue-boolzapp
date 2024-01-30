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

            currentAvatar: 0,
            contacts: [
                {
                  name: 'Marco',
                  avatar: 'img/avatar_1.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 08:00:00', message: 'Ciao!', status: 'inviato' },
                    { date: '2024-01-31 10:30:00', message: 'Come stai?', status: 'inviato' },
                    { date: '2024-02-01 12:45:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Bob',
                  avatar: 'img/avatar_2.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 09:15:00', message: 'Hey!', status: 'inviato' },
                    { date: '2024-01-31 11:45:00', message: 'Sto bene, tu?', status: 'inviato' },
                    { date: '2024-02-01 13:30:00', message: 'Anche io, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Charlie',
                  avatar: 'img/avatar_3.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 10:30:00', message: 'Salve!', status: 'inviato' },
                    { date: '2024-01-31 12:15:00', message: 'Come va?', status: 'inviato' },
                    { date: '2024-02-01 14:20:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'David',
                  avatar: 'img/avatar_4.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 11:00:00', message: 'Buongiorno!', status: 'inviato' },
                    { date: '2024-01-31 13:30:00', message: 'Che fai?', status: 'inviato' },
                    { date: '2024-02-01 15:15:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Christian',
                  avatar: 'img/avatar_5.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 12:45:00', message: 'Ciao!', status: 'inviato' },
                    { date: '2024-01-31 14:00:00', message: 'Come va?', status: 'inviato' },
                    { date: '2024-02-01 16:00:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Franesca',
                  avatar: 'img/avatar_6.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 13:20:00', message: 'Saluti!', status: 'inviato' },
                    { date: '2024-01-31 15:15:00', message: 'Come ti senti?', status: 'inviato' },
                    { date: '2024-02-01 17:30:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Giacomo',
                  avatar: 'img/avatar_7.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 14:00:00', message: 'Ciao!', status: 'inviato' },
                    { date: '2024-01-31 16:00:00', message: 'Che fai?', status: 'inviato' },
                    { date: '2024-02-01 18:00:00', message: 'Tutto bene, grazie!', status: 'ricevuto' }
                  ]
                },
                {
                  name: 'Henry',
                  avatar: 'img/avatar_8.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 15:30:00', message: 'Hey!', status: 'inviato' },
                    { date: '2024-01-31 17:45:00', message: 'Come stai?', status: 'inviato' },
                    { date: '2024-02-01 20:15:00', message: 'Anche io, grazie!', status: 'ricevuto' }
                  ]
                }
              ]

        }
    }
}).mount("#app")    