const tipoDeCombustivel = prompt(`qual o tipo de cobustivel? \n G -gasolina \n A- alcool`)
const qntDeCombustivel = Number(prompt(`Informe a quantidade de combustivel vendida`))
const valorGasolina = 2.70
const valorAlcool = 1.90

if (tipoDeCombustivel == 'G'){

            if(qntDeCombustivel <=25){
            alert(`O valor total será ${Math.round((valorGasolina * qntDeCombustivel)* 0.97).toFixed(2)} com o desconto de 3`)
            }
            else {
                alert
                (`o valor total sera ${Math.round((valorGasolina * qntDeCombustivel)*0.95).toFixed(2)} e recebeu o desconto de 5%`)
            }
}

if (tipoDeCombustivel == 'A'){

    if(qntDeCombustivel <=25){
    alert(`O valor total será ${((valorAlcool * qntDeCombustivel)* 0.98).toFixed(2)} com o desconto de 2%`)
    }
    else {
        alert
        (`o valor total sera ${Math.round((valorAlcool * qntDeCombustivel)*0.96).toFixed(2)} e recebeu o desconto de 4%`)
    }
}