const url = window.location.origin;
let usersList = []

fetch(`${url}/api/users`)
    .then(function(response){
        return response.json();
    }).then(function(users){
        usersList = [...users.users];
    })

window.addEventListener('load', function(){




// Formulario

let formulario = document.querySelector('#register-form')

// Mensajes de campos
 let msjFormEmail = document.querySelector('.js-validation-email') 
 let msjFormNombre = document.querySelector('.js-validation-first-name') 
 let msjFormApellido = document.querySelector('.js-validation-last-name') 
 let msjFormPassword = document.querySelector('.js-validation-password') 
 let msjFormRetype = document.querySelector('.js-validation-retype') 
 let msjFromAvatar = document.querySelector('.js-validation')
 

 // Imput
 let email = document.querySelector('#email');
 let nombre = document.querySelector('#first_name');
 let apellido = document.querySelector('#last_name');
 let password = document.querySelector('#password');
 let retype = document.querySelector('#retype');
 let avatar = document.querySelector('#image')

// Verificador de email
 let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 const colorVerde  = '#EAFAF1'
 const colorRojo = '#F9EBEA'

// funciones
 function msjCampo (imput,msj){
    msj.onmouseover= function(){      
        imput.style.opacity = '100';
        imput.style.transition = "opacity 0.15s 0s ease";    
    }
    msj.onmouseout= function(){
        imput.style.opacity = '0'
    } 
 }

 let getExtension = function(value){
    return value.slice((value.lastIndexOf(".") - 1 >>> 0) + 2)
}

let isError = function (element){
    element.style.color = "rgb(192, 57, 43)";
    element.style.opacity = '100'
    
}



 msjCampo(msjFormEmail,email)
 msjCampo(msjFormNombre,nombre)
 msjCampo(msjFormApellido,apellido)
 msjCampo(msjFormPassword,password)



email.onblur = function(){

    if(email.value.match(pattern)){
        email.style.BorderColor = colorVerde
        email.style.transition = "0.5s 0s ease";
    }else{
        email.style.backgroundColor = colorRojo
        email.style.transition = "0.5s 0s ease";
    }
}



nombre.onblur = function(){

    if(nombre.value.trim().length > 2){
        nombre.style.backgroundColor = colorVerde;
        nombre.style.transition = "0.5s 0s ease";
    }else{
        nombre.style.backgroundColor = colorRojo;
        nombre.style.transition = "0.5s 0s ease"
    }
}


apellido.onblur = function(){

    if(apellido.value.trim().length > 2){
        apellido.style.backgroundColor = colorVerde;
        apellido.style.transition = "0.5s 0s ease";
    }else{
        apellido.style.backgroundColor = colorRojo;
        apellido.style.transition = "0.5s 0s ease";
    }
}


password.onblur = function(){

    if(password.value.length < 6){
        password.style.backgroundColor = colorRojo
        password.style.transition = "0.5s 0s ease";
    }else{
        password.style.backgroundColor = colorVerde;
        password.style.transition = "0.5s 0s ease";
    }
}


retype.onblur = function(){

    if(retype.value == password.value && password.value >0){
        retype.style.backgroundColor = colorVerde;
        msjFormRetype.style.transition = "0.5s 0s ease";

    }else{
        retype.style.backgroundColor = colorRojo;
        msjFormRetype.style.transition = "0.5s 0s ease";
    }
}



email.onkeydown = function(){
    if(email.value.match(pattern)){
        email.style.backgroundColor = colorVerde;
        email.style.transition = "0.5s 0s ease";
       
    }else
        email.style.backgroundColor = colorRojo;
        email.style.transition = "0.5s 0s ease";
}
nombre.onkeypress = function(){
    if(nombre.value.length > 2){
        nombre.style.backgroundColor = colorVerde;
        nombre.style.transition = "0.5s 0s ease";
       
    }else
        nombre.style.backgroundColor = colorRojo;
        nombre.style.transition = "0.5s 0s ease";
    
}
apellido.onkeypress = function(){
    if(apellido.value.length >= 2){
        apellido.style.backgroundColor = colorVerde;
        apellido.style.transition = "0.5s 0s ease";
       
    }else
        apellido.style.backgroundColor = colorRojo;
        apellido.style.transition = "0.5s 0s ease";
}
password.onkeydown = function(){
    if(password.value.length >= 5){
        password.style.backgroundColor = colorVerde
    }else
        password.style.backgroundColor = colorRojo
}

retype.onkeyup = function(){
    if(retype.value == password.value){
        retype.style.backgroundColor = colorVerde;
        retype.style.transition = "0.5s 0s ease";
        

    }else
        retype.style.backgroundColor = colorRojo;
        retype.style.transition = "0.5s 0s ease";
}



 formulario.addEventListener('submit', function(e){ 
    
const error = []
   

    if(nombre.value.trim().length < 2){
      //  alert('El campo Nombre es obligatorio')
      msjFormNombre.innerHTML = 'El campo nombre esta vacio o es demasiado corto '
      isError(msjFormNombre);
        error.push(1)
    }else{
        msjFormNombre.innerHTML = 'El campo nombre es obligatorio'
        msjFormNombre.style.color = 'black';
    }
     if (!email.value.match(pattern)){
         msjFormEmail.innerHTML = 'El campo e.mail es invalido o esta vacio'
         isError(msjFormEmail);
         error.push(1)
     }else{
        msjFormEmail.innerHTML = 'El campo email es obligatorio'
        msjFormEmail.style.color = 'black';
     }

     if(apellido.value.trim().length < 2){
         msjFormApellido.innerHTML = 'El campo apellido esta vacio o es demasiado corto'
         isError(msjFormApellido);
         error.push (1)
     }

     
        let validExt = ['png', 'jpg', 'jpeg']
        let fileExt = getExtension(avatar.value);
        let foundExt = validExt.find(function(ext){return ext===fileExt})
    
     if(!(avatar.value.length > 0 )|| !foundExt){
         msjFromAvatar.innerHTML = 'Selecciona un Avatar formato .png, .jpg o jpeg'
         isError(msjFromAvatar);
         error.push(1)
     }else{
        msjFromAvatar.innerHTML = ''
     }
     

    /* if(foundExt){
        msjFromAvatar.innerHTML = 'Selecciona un Avatar'
        msjFromAvatar.style.color = colorRojo;
        msjFromAvatar.style.opacity= '100'
        error.push(1)
    }*/
     
    
     if(password.value.length < 6){
         msjFormPassword.innerHTML = 'La contraseña es demasiado corta ( minimo 6 caracteres )'
         isError(msjFormPassword);
         error.push(1)
     }

        if(retype.value !== password.value){
            isError(msjFormRetype);
            error.push(1)
        }

        let userFind = usersList.find((user)=>{
            return user.email == email.value
        })
        if(userFind){
            msjFormEmail.innerHTML = 'El email ya existe'
            isError(msjFormEmail);
        }

        if(error.length >0 ){
            e.preventDefault()
        }
    
 })

})