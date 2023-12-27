//LLamar boton
const btnrandom = document.getElementById("DiceRandom");
const advice = document.getElementById("advice")
const idAdvice = document.getElementById("adviceID")

//funcion de llamada del api

btnrandom.addEventListener('click',async function() {
     await fetch("https://api.adviceslip.com/advice")
    .then(Response => Response.json())
    .then(data =>{
      const adviceMsg = data.slip.advice
      advice.innerText = adviceMsg;
      idAdvice.innerText = `Advice #${data.slip.id}`
    })

    .catch(e => console.error(`api call could not be completed ${e} ⚠️`))

  });

  