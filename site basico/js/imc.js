function escopo() {
    const form = document.querySelector('.formu')

    form.addEventListener('submit', function(evento) {
        evento.preventDefault()
        const peso = Number(document.querySelector('#peso').value)
        const altura = parseFloat(document.querySelector('#altura').value)

        setResu(peso, altura);

    })
}

function setResu(peso, altura) {


    const imc = peso / (altura * altura)
    const mostrar = document.querySelector('#resu')



    if (imc < 18.5) {
        mostrar.innerHTML = `peso: ${peso} altura: ${altura.toFixed(2)} Idice de massa corporal:  ${imc.toFixed(3)} MAGREZA 0;`
    } else if (imc > 18.5 && imc < 24.9) {
        mostrar.innerHTML = `peso: ${peso} altura: ${altura.toFixed(2)} Idice de massa corporal:  ${imc.toFixed(3)} NORMAL 0`
    } else if (imc > 24.9 && imc < 29.9) {
        mostrar.innerHTML = `peso: ${peso} altura: ${altura.toFixed(2)} Idice de massa corporal:  ${imc.toFixed(3)} SOBRE PESO 1 `
    } else if (imc > 30.0 && 39.9) {
        mostrar.innerHTML = `peso: ${peso} altura: ${altura.toFixed(2)} Idice de massa corporal:  ${imc.toFixed(3)} OBESIDADE 2`
    } else if (imc > 40) {
        mostrar.innerHTML = `peso: ${peso} altura: ${altura.toFixed(2)} Idice de massa corporal:  ${imc.toFixed(3)} OBESIDADE GRAVE 3 `
    } else {

        const p = document.createElement('p')
        p.classList.add('clasmuda')
        p.innerHTML = `escreve algo`
        mostrar.appendChild(p);



    }

}


escopo()