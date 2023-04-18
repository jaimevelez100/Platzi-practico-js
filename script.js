const h1 = document.querySelector("h1")
const form = document.querySelector("#form")
const input1 = document.querySelector ("#calculo1")
const input2 = document.querySelector ("#calculo2")
const btnCalcular = document.querySelector ("#btnCalcular")
const resultado = document.querySelector("#resultado")

// form.addEventListener("submit", sumarInputsValues)

// function sumarInputsValues(event){
//     event.preventDefault()
//     const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
//     resultado.innerHTML = "Resultado = " + sumaInputs
// }

btnCalcular.addEventListener("click", sumarInputsValues)

function sumarInputsValues(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerHTML = "Resultado = " + sumaInputs
}