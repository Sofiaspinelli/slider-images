import "./style.css";
import 'boxicons/css/boxicons.min.css';
import 'boxicons';

const arrayImagenesSlider = [
    { id: 1, ruta: 'img/gato-1.jpg', texto: 'Gatito 1'},
    { id: 2, ruta: 'img/gato-2.jpg', texto: 'Gatito 2'},
    { id: 3, ruta: 'img/gato-3.jpg', texto: 'Gatito 3'},
    { id: 4, ruta: 'img/gato-4.jpg', texto: 'Gatito 4'},
    { id: 5, ruta: 'img/gato-5.jpg', texto: 'Gatito 5'},
    { id: 6, ruta: 'img/gato-6.jpg', texto: 'Gatito 6'},
]
window.addEventListener('DOMContentLoaded', function () {

    const divSlider = document.querySelector('#slider')
    console.log(divSlider);

    arrayImagenesSlider.forEach(function(imagen) {

        const divSliderSection = document.createElement('div')
        const imgTag = document.createElement('img')
        imgTag.src = imagen.ruta
        imgTag.alt = imagen.texto
        divSliderSection.classList.add('slider-section')
        divSliderSection.appendChild(imgTag)
        divSlider.appendChild(divSliderSection)
    })

})

