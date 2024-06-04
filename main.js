import './style.css';
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

window.addEventListener('DOMContentLoaded', function() {
    
    const divSlider = document.querySelector('#slider')
    //console.log(divSlider)

    arrayImagenesSlider.forEach(function(imagen) {
        const divSliderSection = document.createElement('div')
        const imgTag = document.createElement('img')

        imgTag.src = imagen.ruta
        imgTag.alt = imagen.texto
        divSliderSection.classList.add('slider-section')
        divSliderSection.appendChild(imgTag)
        divSlider.appendChild(divSliderSection)
    })

    
    const btnLeft = document.querySelector('.btn-left')
    const btnRight = document.querySelector('.btn-right')
    //console.log(btnLeft, btnRight)
    const sliderSection = document.querySelectorAll('.slider-section')
    //console.log(sliderSection)

    let operacion = 0
    let widthImg = 100 / sliderSection.length 
    let counter = 0
    console.log(widthImg)

    function moverAlaDerecha() {
        //debugger
        if (counter >= sliderSection.length-1) {
            //debugger
            counter = 0
            operacion = 0
            console.log('mover a la derecha')
            divSlider.style.transform = `translate(-${operacion}%)` 
        } else {
            //debugger
            counter++
            operacion = operacion + widthImg
            divSlider.style.transform = `translate(-${operacion}%)`
            divSlider.style.transition = 'transform ease .6s'
        }
    }

    function moverAlaIzquierda() {
        console.log('mover izquierda')
        //debugger
        counter--
        if (counter < 0) {
            //debugger
            counter = sliderSection.length-1
            operacion = widthImg * (sliderSection.length-1)
            divSlider.style.transform = `translate(-${operacion}%)` 
        } else {
            //debugger
            operacion = operacion - widthImg
            divSlider.style.transform = `translate(-${operacion}%)`
            divSlider.style.transition = 'transform ease .6s'
        }
    }

    setInterval(function() {
        moverAlaDerecha()
    }, 3000)

    
    btnLeft.addEventListener('click', moverAlaIzquierda)
    btnRight.addEventListener('click', moverAlaDerecha)

})

