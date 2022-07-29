let randomNumber = Math.round(Math.random() * 10)
const buttonSubmit = document.querySelector('#submit')
const buttonReset = document.querySelector('#reset')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let xAttempts = 1

function handleSubmitClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    if(xAttempts == 1) {
      document.querySelector('h2').innerText = `Acertou em 1 tentativa!`
    } else
      document.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++

}

function handleResetClick() {
    randomNumber = Math.round(Math.random() * 10)
    toggleScreen()
    xAttempts = 1 
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

buttonSubmit.addEventListener('click', handleSubmitClick)
buttonReset.addEventListener('click', handleResetClick)
