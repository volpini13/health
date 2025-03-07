/**
 * APP GET
 * @author Arthur Garcia Volpini
 * 
 */

let peso, altura, idade, imc, fcm, get, litros

function calcular() {
    idade = frmIMC.txtIdade.value
    peso = frmIMC.txtPeso.value
    altura = (frmIMC.txtAltura.value)/100
    if (frmIMC.txtIdade.value === "") {
        alert("Preencha a idade")
        frmIMC.txtIdade.focus()
    } else if (frmIMC.txtPeso.value === "") {
        alert("Preencha o peso")
        frmIMC.txtPeso.focus()
    } else if (frmIMC.txtAltura.value === "") {
        alert("Preencha a altura")
        frmIMC.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o sexo")
    } else if (frmIMC.nivel.value === "") {
        alert("Selecione o nível de atividade")
        frmIMC.nivel.focus()
    } else {
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = (`IMC: ${imc.toFixed(2)}`)
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "img/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade1"
            document.getElementById("grafico").src = "img/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade2"
            document.getElementById("grafico").src = "img/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade extrema"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm
        let select = document.getElementById("atividade")
        let opcaoValor = Number(select.options[select.selectedIndex].value)
        if (document.getElementById("m").checked === true) {
            get = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * opcaoValor
        }
        if (document.getElementById("f").checked === true) {
            get = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * opcaoValor
        }
        document.getElementById("calorias").innerHTML = `${Math.floor(get)} calorias/dia`
        litros = (peso * 35) / 1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} litros/dia`
    }
}

function limpar() {
    document.getElementById("imc").innerHTML = "IMC"
    document.getElementById("status").innerHTML = "status"
    document.getElementById("freq").innerHTML = "FCM"
    document.getElementById("grafico").src = "icons/reset.png"
    document.getElementById("calorias").innerHTML = "calorias"
    document.getElementById("agua").innerHTML = "litros"
}
