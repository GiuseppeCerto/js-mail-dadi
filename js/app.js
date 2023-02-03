// creare un array con una lista di mail

const emailList = ['rus3085@gmailni.com', 'belyanskajai@cashbackr.com', 'ewanmc@turuwae.tech', 'en555@enhanceronly.com', 'rooktoqueen@scatterteam.com',]

console.log(emailList)
console.log(emailList.length)

// creare un prompt che chiede una email all utente

// se non è presente nell' array mandare messaggio di conferma

const newMailUtent= document.getElementById('emailfromutent')

// controllare se l'email inserita è presente nel array

const emailUtent = newMailUtent.value

let emailConfirm = document.getElementById('nuovaemail')

if (emailList.includes(emailUtent)){
    
    emailConfirm.innerHTML = 'La tua email è già stata scelta'
    
} else { emailConfirm.innerHTML = 'La tua email: ' + emailUtent + ' è stata confermata'

   
}












// generare un numero random per l' utente
// generare un numero random per l' il computer
// stabilire chi vince in base al numero piu alto

