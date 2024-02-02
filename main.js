/*
Milestone 5 - opzionale
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato

*/

const { createApp } = Vue

createApp({
    data(){
        return{
            currentContact: 0,
            counter: 0, 
            show: null,
            searchName: "",
            newMessage: "",
            currentAvatar: 0,
            contacts: [
                {
                  name: 'Marco',
                  avatar: 'img/avatar_1.jpg',
                  visible: true,
                  messages: [
                    { date: '2024-01-30 08:00', message: 'we!', status: 'inviato' },
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

            setTimeout(() => {
              this.contacts[this.currentAvatar].messages.push({
                date: new Date(),
                message: "ok",
                status: 'ricevuto',
              })
            }, 1000)
            
          }
          this.newMessage=""
        },
        searchContact(){

          this.contacts.forEach((element) =>{

            if(element.name.toLowerCase().includes(this.searchName.toLowerCase())){
              element.visible = true
            } else {
              element.visible = false
            }
          })

        },
        openMessage(index){
          this.show = index
          this.counter++
          

          if(this.counter % 2 === 0){
            this.show = null
          }
        },
        deleteMessage(index){
          
          const currentContact = this.contacts[this.currentAvatar]

          currentContact.messages.splice(index, 1);
          
        }
        
    }
}).mount("#app")    