// creare un array con una lista di mail

const emailList = ['rus3085@gmailni.com', 'belyanskajai@cashbackr.com', 'ewanmc@turuwae.tech', 'en555@enhanceronly.com', 'rooktoqueen@scatterteam.com',]

console.log(emailList)
console.log(emailList.length)

// creare un prompt che chiede una email all utente

const newMailUtent= document.getElementById('emailfromutent')

// salvare il valore del prompt dentro una variabile

const btnConfirm = document.getElementById('buttonconfirm')

btnConfirm.addEventListener('click', function() {

const mailUtent = newMailUtent.value
console.log(mailUtent)

// aggiungere l' email al array

emailList.push(mailUtent)

// cotrollare se l'email e' presente nell array

console.log(emailList)

let emailConfirm = document.getElementById('nuovaemail')

// stampare un messaggio nel DOM con l'esito del controllo

emailConfirm.innerHTML = 'La tua email: '+ mailUtent + ' è stata confermata'

})








// generare un numero random per l' utente
// generare un numero random per l' il computer
// stabilire chi vince in base al numero piu alto

