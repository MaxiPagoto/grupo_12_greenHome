// VARIABLES
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
let descuentoError = document.querySelector('#discount-error-text')

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
let benefitsError = document.querySelector('#benefit-errors')
let benefitsLabel = document.querySelector('#benefit-label')
console.log(benefitsLabel)
let rooms = document.querySelectorAll('.form-filter-room')
let roomsError = document.querySelector('#room-errors')
let roomsLabel = document.querySelector('#rooms-label')
console.log(roomsLabel)
let dificultad = document.querySelector('#form-filter-dificult')


// FUNCIONES



const validationKey = function(variable,condition){
    if(condition){
        variable.style.backgroundColor = colorVerde;
        variable.style.transition = "0.5s 0s ease";
    }else{
        variable.style.backgroundColor = colorRojo
        variable.style.transition = "0.5s 0s ease";
    }
}

const msjCampo = function(imput,msj){
    msj.onmouseover= function(){      
        imput.style.opacity = '100';
        imput.style.transition = "opacity 0.15s 0s ease";    
    }
    msj.onmouseout= function(){
        imput.style.opacity = '0'
    } 
 }

const validationBlur = function(variable,condition){
        if(condition){
            variable.style.backgroundColor = colorVerde;
            variable.style.transition = "0.5s 0s ease";
        }else{
            variable.style.backgroundColor = colorRojo;
            variable.style.transition = "0.5s 0s ease"
        }
    }

// EVENTOS



msjCampo(nameError,nombreProducto)
msjCampo(priceError,precio)
msjCampo(descriptionError,description)
msjCampo(descriptionError,copy)
msjCampo(descriptionError,line)
msjCampo(heightError,propHeigth)
msjCampo(benefitsError,benefitsLabel)
msjCampo(roomsError,roomsLabel)


nombreProducto.onkeyup = function(){
    validationKey(nombreProducto,nombreProducto.value.length>=4)
 }


precio.onblur = function(){
    validationBlur(precio, (precio.value.length>0))
 }

descuento.onkeyup = function(){
    validationKey(descuento,descuento.value>=0 &&descuento.value <100 )
 }


line.onkeyup = function(){
        validationKey(line,(line.value.length>=4 && line.value.length<=30))
}

copy.onkeyup = function(){
    validationKey(copy,(copy.value.length>=4 && copy.value.length<=130))
}

description.onkeyup = function(){
    validationKey(description,(description.value.length>=4))
}

propHeigth.onblur = function(){
    validationBlur(propHeigth, (propHeigth.value>0))
}
 

// EVENTOS DE SUBMIT

formulario.addEventListener('submit', function(e){
const errorCreate = []

    // Imagen
    if(imagenPrincipal.value.length == 0){
        
        imageBorder.style.borderColor =colorRojoText
        errorCreate.push(1)
    }
    // Nombre de producto
        if(nombreProducto.value.length == 0){
            nameError.style.opacity = '100'
            nameError.style.color = colorRojoText
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

    if(descuento.value < 0 || descuento.value > 99 ){
        descuentoError.style.opacity = '100'
        descuentoError.style.color =colorRojoText
        errorCreate.push(1)
    }else{
        descuento.style.color = 'black'
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
            roomsError.style.opacity = '100'
            roomsError.style.color = colorRojoText
            errorCreate.push(2)
        }else{
            roomsError.style.borderColor = 'black'
        }

    //Verificacion check benefits
    let benefitsErr = benefits.length
    for (benefit of benefits){
        if(benefit.checked){
            benefitsErr--
            }
        }
        if(benefitsErr == benefits.length){
            benefitsError.style.opacity = '100'
            benefitsError.style.color = colorRojoText
            errorCreate.push(2)
        }else{
            benefitsError.style.borderColor = 'black'
        }
        

if(errorCreate.length > 0){
    e.preventDefault()
}

})








 
