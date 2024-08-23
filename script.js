function AdicionarNumero(numero) {
   const ValorInput = document.querySelector ('.display').value

   document.querySelector ('.display').value = ValorInput + numero
}

function LimparTela(){
    document.querySelector ('.display').value = ''
}

function Calcular(){

    const ValorInput = document.querySelector ('.display').value 

    document.querySelector ('.display').value = eval(ValorInput)

}

function inverte(){

    const ValorInput = document.querySelector ('.display').value 

    document.querySelector ('.display').value = ValorInput * -1
}