var p1 = document.getElementById("panel1")
var p2 = document.getElementById("panel2")
var p3 = document.getElementById("panel3")
var p4 = document.getElementById("panel4")



function myFunction1() {
    saber(p1, p2, p3, p4);
}



function myFunction2() {
    saber(p2, p1, p3, p4);
}

function myFunction3() {

    saber(p3, p2, p1, p4);
}


function myFunction4() {
    saber(p4, p2, p3, p1);


}


function saber(n1, n2, n3, n4) {
    n1.style.color = "rgb(28, 28, 31)3, 58, 58)"
    n1.style.display = "block";
    n2.style.display = "none"
    n3.style.display = "none"
    n4.style.display = "none"
}
//calcular data e hora
var dataAtu = new Date().toLocaleDateString();
var hora = new Date().getHours();
var horario = new Date().toLocaleTimeString()
var data = document.querySelector('#data');
var dataa = document.querySelector('#data');


if (hora >= 0 && hora < 5) {
    data.innerHTML += `BOA NOITE   &nbsp;  &nbsp;    &nbsp;          Rio de janeiro: Data ${dataAtu}      &nbsp;    &nbsp;    &nbsp;             Horario Atual:       ${horario}`
    dataa.innerHTML += `<img id= "img" src=" img/bnoite.png " alt=" "> `

} else if (hora <= 12) {
    data.innerHTML += `BOA DIA   &nbsp;  &nbsp;    &nbsp;          Rio de janeiro: Data ${dataAtu}      &nbsp;    &nbsp;    &nbsp;             Horario Atual:       ${horario}`
    dataa.innerHTML += `<img id= "img" src=" img/bdia.png " alt=" "> `

} else if (hora > 12 && hora <= 18) {
    data.innerHTML += `BOA TARDE   &nbsp;  &nbsp;    &nbsp;          Rio de janeiro: Data ${dataAtu}      &nbsp;    &nbsp;    &nbsp;             Horario Atual:       ${horario}`
    dataa.innerHTML += `<img id= "img" src=" img/btarde.png " alt=" "> `

} else if (hora > 18) {
    data.innerHTML += `BOA NOITE   &nbsp;  &nbsp;    &nbsp;          Rio de janeiro: Data ${dataAtu}      &nbsp;    &nbsp;    &nbsp;             Horario Atual:       ${horario}`
    dataa.innerHTML += `<img id= "img" src=" img/bnoite.png " alt=" "> `

}