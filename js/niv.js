const caja_1 = document.getElementById('caja-conteo-inicial');
let conteo_1 = 3;
const circulo = document.querySelector('.box-conteo-inicial');

const caja_2 = document.querySelector('.caja');

const setConteo = setInterval(() => {

    conteo_1 -= 1;
    caja_1.innerHTML = `${conteo_1}`;

    if(conteo_1 == -1){
        clearInterval(setConteo);
        circulo.style.opacity = '0';
        caja_2.classList.add('aparecer');
    }

}, 1000);