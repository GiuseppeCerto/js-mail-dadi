
/***** EMAIL CONFIRM *****/

// creare un array con una lista di mail

const emailList = ['rus3085@gmailni.com', 'belyanskajai@cashbackr.com', 'ewanmc@turuwae.tech', 'en555@enhanceronly.com', 'rooktoqueen@scatterteam.com',]

console.log(emailList)
console.log(emailList.length)

// creare un form che chiede una email all utente

// se non è presente nell' array mandare messaggio di conferma

const newMailUtent = document.getElementById('emailfromutent')

// controllare se l'email inserita è presente nel array con ciclo for

const btnConfirm = document.getElementById('buttonconfirm')

btnConfirm.addEventListener('click', function() {

    const emailUtent = newMailUtent.value

    console.log(emailUtent)

    let emailCheck = false

    for (i = 0; i < emailList.length; i++){

        console.log(i)

        console.log(emailList[i])    
        
        console.log(emailCheck)

        if(emailList[i] === emailUtent){
            emailCheck = true
        }
    }     

    let emailConfirm = document.getElementById('nuovaemail')

    if (emailCheck === true){

        emailConfirm.innerHTML = 'La tua email è già stata usata'
    }else{

        emailConfirm.innerHTML = 'La tua email è ; ' + emailUtent + ' è stata confermata'
    }
})

/***** DICE GAME *****/ 

const btnPlay = document.getElementById('buttonplay')

btnPlay.addEventListener('click', function() {

    // generare un numero random per l' utente

    const dadoUtente = Math.floor(Math.random() * 6) + 1

    // generare un numero random per l' il computer

    const dadoComputer = Math.floor(Math.random() * 6) + 1

    if (dadoUtente > dadoComputer){

        window.alert('HAI VINTO!')

        let risultatoUtente = document.getElementById('dadoutente')

    }else{

        window.alert('HAI PERSO!')
        
    }

    console.log(dadoComputer)

})



