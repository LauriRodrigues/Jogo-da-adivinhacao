const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttempts = 1

const button = document.querySelector('#submit')

button.addEventListener('click', function handleClick(event) {
  event.preventDefault()
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide")
    document.querySelector(".screen2").classList.remove("hide")

    if(xAttempts == 1) {
      document.querySelector('h2').innerText = `Acertou em 1 tentativa!`
    } else
      document.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas!`
   
  }

  xAttempts++

})





