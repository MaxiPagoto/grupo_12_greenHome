let formulario = document.querySelector('#create-form')


let imagenPrincipal = document.querySelector('#image-form')

let nombreProducto = document.querySelector('#form-name')

let precio = document.querySelector('#form-price')
let descuento = document.querySelector('#form-discount')

let categoria = document.querySelector('#form-category')

let line = document.querySelector('#form-line')
let copy = document.querySelector('#form-copy')
let description = document.querySelector('#form-description')

let propLigth = document.querySelector('#form-prop-ligth')
let propWater = document.querySelector('#form-prop-water')
let propPlantPot = document.querySelector('#form-prop-planpot')
let propPlague = document.querySelector('#form-propplague')
let propHeigth = document.querySelector('#form-prop-heigth')
let propPet = document.querySelector('#form-prop-pet')

let beneficios = document.querySelector('#form-filter-benefit')
let espacio = document.querySelector('#form-filter-room')
let dificultad = document.querySelector('#form-filter-dificult')

formulario.addEventListener('submit', function(e){
//console.log(imagenPrincipal,nombreProducto,precio,descuento,categoria,line,copy,description,propLigth,propWater,propPlantPot,propPlague)

//console.log(propHeigth,propPet,beneficios,espacio,dificultad)

//console.log(propWater,propPlantPot,propPlague)

console.log(espacio.value)
e.preventDefault()
})









