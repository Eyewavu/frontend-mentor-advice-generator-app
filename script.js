
async function getAdvice() {
  const adviceDiv = document.querySelector(".advice")
  const adviceId =document.querySelector(".advice-id")

  adviceDiv.textContent ="Loading Advice..."
  adviceId.textContent ="ADVICE #?"

  const response =await fetch(`https://api.adviceslip.com/advice?slip_id=${Math.floor(Math.random() * 200)}`)
  const json =await response.json()
  const {slip:{advice,id}} =json


  if ( !advice || !id ) {
    adviceDiv.textContent = "There was a network error. Please try again later."
    adviceId ="ERROR"

    return
  }

  adviceDiv.textContent =`"${advice}"`
  adviceId.textContent =`ADVICE #${id}`
}


getAdvice()

document.querySelector("button.advice-btn")
.addEventListener("click",getAdvice)