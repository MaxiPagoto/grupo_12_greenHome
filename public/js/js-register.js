window.addEventListener('load', function(){
// Formulario

let formulario = document.querySelector('#register-form')

// Mensajes de campos
 let msjFormEmail = document.querySelector('.js-validation-email') 
 let msjFormNombre = document.querySelector('.js-validation-first-name') 
 let msjFormApellido = document.querySelector('.js-validation-last-name') 
 let msjFormPassword = document.querySelector('.js-validation-password') 
 let msjFormRetype = document.querySelector('.js-validation-retype') 
 

 // Imput
 let email = document.querySelector('#email');
 let nombre = document.querySelector('#first_name');
 let apellido = document.querySelector('#last_name');
 let password = document.querySelector('#password');
 let retype = document.querySelector('#retype');

// Verificador de email
 let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 const colorVerde  = '#1080008a'
 const colorRojo = '#e1721aa8'

// funciones
 function msjCampo (imput,msj){
    msj.onmouseover= function(){      
        imput.style.opacity = '100'    
    }
    msj.onmouseout= function(){
        imput.style.opacity = '0'
    } 
 }

 msjCampo(msjFormEmail,email)
 msjCampo(msjFormNombre,nombre)
 msjCampo(msjFormApellido,apellido)
 msjCampo(msjFormPassword,password)



email.onblur = function(){

    if(email.value.match(pattern)){
        email.style.backgroundColor = colorVerde
    }else{
        email.style.backgroundColor = colorRojo
    }
}



nombre.onblur = function(){

    if(nombre.value.trim().length > 0){
        nombre.style.backgroundColor = colorVerde
    }else{
        nombre.style.backgroundColor = colorRojo
    }
}


apellido.onblur = function(){

    if(apellido.value.trim().length > 0){
        apellido.style.backgroundColor = colorVerde
    }else{
        apellido.style.backgroundColor = colorRojo
    }
}


password.onblur = function(){

    if(password.value.length < 6){
        password.style.backgroundColor = colorRojo
    }else{
        password.style.backgroundColor = colorVerde
    }
}


retype.onblur = function(){

    if(retype.value == password.value){
        retype.style.backgroundColor = colorVerde
        msjFormRetype.style.opacity='0'

    }else{
        retype.style.backgroundColor = colorRojo
        msjFormRetype.style.opacity='100'
    }
}



email.onkeydown = function(){
    if(email.value.match(pattern)){
        email.style.backgroundColor = colorVerde
       
    }else
        email.style.backgroundColor = colorRojo 
}
/*nombre.onkeypress = function(){
    if(nombre.value.length >= 0){
        nombre.style.backgroundColor = colorVerde
       
    }else
        nombre.style.backgroundColor = colorRojo
    
}
apellido.onkeypress = function(){
    if(apellido.value.length >= 0){
        apellido.style.backgroundColor = colorVerde
       
    }else
        apellido.style.backgroundColor = colorRojo
}
password.onkeydown = function(){
    if(password.value.length >= 5){
        password.style.backgroundColor = colorVerde
    }else
        password.style.backgroundColor = colorRojo
}

retype.onkeyup = function(){
    if(retype.value == password.value){
        retype.style.backgroundColor = colorVerde
        

    }else
        retype.style.backgroundColor = colorRojo 
}*/



 formulario.addEventListener('submit', function(e){ 
    e.preventDefault();
    let nombre = document.querySelector('#first_name');

   

    if(nombre.value == ''){
        alert('El campo Nombre es obligatorio')
    }

 })

})