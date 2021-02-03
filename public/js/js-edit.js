let formulario = document.querySelector('#create-form')

const colorVerde  = '#EAFAF1'
const colorRojo = '#F9EBEA'
const colorRojoText = '#C0392B'

let imagenPrincipal = document.querySelector('#image-form')
let imageBorder = document.querySelector('#image-form-border')


let nombreProducto = document.querySelector('#form-name')
let nameError = document.querySelector('#name-error-text')

let precio = document.querySelector('#form-price')
let priceError = document.querySelector('#price-error-text')

let descuento = document.querySelector('#form-discount')

let categoria = document.querySelector('#form-category')
let categoryError = document.querySelector('#category-error-text')

let line = document.querySelector('#form-line')
let copy = document.querySelector('#form-copy')

let description = document.querySelector('#form-description')
let descriptionError = document.querySelector('#description-error-text')


let propLigth = document.querySelector('#form-prop-ligth')
let propWater = document.querySelector('#form-prop-water')
let propPlantPot = document.querySelector('#form-prop-planpot')
let propPlague = document.querySelector('#form-propplague')

let propHeigth = document.querySelector('#form-prop-heigth')
let heightError = document.querySelector('#height-error-text')

let propPet = document.querySelector('#form-prop-pet')

let benefits = document.querySelectorAll('.form-filter-benefit')
let rooms = document.querySelectorAll('.form-filter-room')
let dificultad = document.querySelector('#form-filter-dificult')

function msjCampo (imput,msj){
    msj.onmouseover= function(){      
        imput.style.opacity = '100';
        imput.style.transition = "opacity 0.15s 0s ease";    
    }
    msj.onmouseout= function(){
        imput.style.opacity = '0'
    } 
 }

 msjCampo(nameError,nombreProducto)
 msjCampo(priceError,precio)
 msjCampo(descriptionError,description)
 msjCampo(descriptionError,copy)
 msjCampo(descriptionError,line)
 msjCampo(heightError,propHeigth)

 line.onkeyup = function(){
     console.log(onkeyup)
    if(line.value.length > 4){
        line.style.backgroundColor = colorVerde;
        line.style.transition = "0.5s 0s ease";
       
    }else
        line.style.backgroundColor = colorRojo;
        line.style.transition = "0.5s 0s ease";
    
}

copy.onkeyup = function(){
    if(copy.value.length > 4){
        copy.style.backgroundColor = colorVerde;
        copy.style.transition = "0.5s 0s ease";
       
    }else
        copy.style.backgroundColor = colorRojo;
        copy.style.transition = "0.5s 0s ease";
    
}

description.onkeyup = function(){
    if(description.value.length > 4){
        description.style.backgroundColor = colorVerde;
        description.style.transition = "0.5s 0s ease";
       
    }else
        description.style.backgroundColor = colorRojo;
        description.style.transition = "0.5s 0s ease";
    
}
 

formulario.addEventListener('submit', function(e){
const errorCreate = []


// Nombre de producto
    if(nombreProducto.value.length == 0){
        nameError.style.opacity = '100'
        nameError.style.color = colorRojoText
        console.log("Paso por acá")
        errorCreate.push(1)
    }else{
        nameError.style.color = 'black'
    }
// Precio 
    if(precio.value < 0 || precio.value.length == 0 ){
        priceError.style.opacity = '100'
        priceError.style.color =colorRojoText
        errorCreate.push(1)
    }else{
        priceError.style.color = 'black'
    }

// Descuento 
if(descuento.value < 0 || descuento.value >100){
    alert('Descuento invalido')
}

// Categoria

// Line

if(line.value.length == 0 || line.value.length > 100){
        descriptionError.style.opacity = '100'
        descriptionError.style.color =colorRojoText
        errorCreate.push(1)
}else{
        descriptionError.style.color = 'black'
}

// Copy

if (copy.value.length == 0 || copy.value.length > 200){
        descriptionError.style.opacity = '100'
        descriptionError.style.color = colorRojoText
    errorCreate.push(1)
}else{
        descriptionError.style.color = 'black'
}

// Description

if(description.value.length == 0 || description.value.length > 1000){
        descriptionError.style.opacity = '100'
        descriptionError.style.color = colorRojoText
    errorCreate.push(1)
}else{
        descriptionError.style.color = 'black'
}

// Altura 

if(propHeigth.value.length == 0){
        heightError.style.opacity = '100'
        heightError.style.color = colorRojoText
    errorCreate.push(1)
}else{
        heightError.style.borderColor = 'black'
}

//Verificacion check rooms
let roomsErr = rooms.length
for (room of rooms){
    if(room.checked){
        roomsErr--
        }
    }       
    if(roomsErr == rooms.length){
        document.querySelector('#room-errors').innerHTML = "Elegí una opción."
        errorCreate.push(2)
    }

//Verificacion check benefits
let benefitsErr = benefits.length
for (benefit of benefits){
    if(benefit.checked){
        benefitsErr--
        }
    }
    if(benefitsErr == benefits.length){
        document.querySelector('#benefit-errors').innerHTML = "Elegí una opción."
        errorCreate.push(2)
    }
    console.log(errorCreate)
    

if(errorCreate.length > 0){
    e.preventDefault()
}

})


