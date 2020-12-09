escopo()






function escopo() {



    var votei1 = document.getElementById('votei1');
    var votei1cali = document.getElementById('votei1cali');
    var votei1texas = document.getElementById('votei1texas');
    var votei1ny = document.getElementById('votei1ny');
    var votei1florida = document.getElementById('votei1florida');



    var votei2cali = document.getElementById('votei2cali');
    var votei2texas = document.getElementById('votei2texas');
    var votei2ny = document.getElementById('votei2ny');
    var votei2florida = document.getElementById('votei2florida');


    var quantivoto1 = 0;
    var quantivoto2 = 0;
    var california = 0;
    var california2 = 0;
    var texas = 0;
    var texas2 = 0;
    var ny = 0;
    var ny2 = 0;
    var florida = 0;
    var florida2 = 0;




    enviar.addEventListener('submit', function(evento) {


        evento.preventDefault()
        var candidatos = document.getElementById('candidatos').value
        var nome = document.getElementById('usuario').value
        var titulo = Number(document.getElementById('numeroEle').value);


        if (nome == '' || titulo == 0) {
            alert("Nome e Titulo obrigatorio")
        } else {
            if (candidatos == 'Candidato1') {

                quantivoto1 = quantivoto1 + 1;



                votei1.innerHTML = quantivoto1;

                votei1.classList.add(`w-${quantivoto1}`);


                var estado = document.getElementById('estados').value
                if (estado == "Califórnia") {

                    california = california + 1;
                    votei1cali.innerHTML = california;
                    votei1cali.classList.add(`w-${california}`);

                } else if (estado == "Texas") {

                    texas = texas + 1;
                    votei1texas.innerHTML = texas;
                    votei1texas.classList.add(`w-${texas}`);

                } else if (estado == "Nova Iorque") {
                    ny = ny + 1;
                    votei1ny.innerHTML = ny;
                    votei1ny.classList.add(`w-${ny}`);

                } else if (estado == "Flórida") {
                    florida = florida + 1;
                    votei1florida.innerHTML = florida;
                    votei1florida.classList.add(`w-${florida}`);

                }


            } else if (candidatos == 'Candidato2') {
                quantivoto2 = quantivoto2 + 1;

                votei2.innerHTML = quantivoto2;
                votei2.classList.add(`w-${quantivoto2}`);



                var estado = document.getElementById('estados').value
                if (estado == "Califórnia") {

                    california2 = california2 + 1;
                    votei2cali.innerHTML = california2;
                    votei2cali.classList.add(`w-${california2}`);

                } else if (estado == "Texas") {

                    texas2 = texas2 + 1;
                    votei2texas.innerHTML = texas2;
                    votei2texas.classList.add(`w-${texas2}`);

                } else if (estado == "Nova Iorque") {
                    ny2 = ny2 + 2;
                    votei2ny.innerHTML = ny2;
                    votei2ny.classList.add(`w-${ny2}`);

                } else if (estado == "Flórida") {
                    florida2 = florida2 + 1;
                    votei2florida.innerHTML = florida2;
                    votei2florida.classList.add(`w-${florida2}`);

                }
            }
        }



    })










}