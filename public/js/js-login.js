const url = window.location.origin;
console.log(`${url}/api/users`)
let usersList = []
fetch(`${url}/api/users`)
    .then(function(response){
        return response.json();
    }).then(function(users){
        usersList = [...users.users];
    })

let formulario = document.querySelector('#login-form')


let email = document.querySelector('#email')
let emailError = document.querySelector('#email-error')
let password = document.querySelector('#password')
let passwordError = document.querySelector('#password-error')

const colorVerde  = '#EAFAF1'
const colorRojo = '#F9EBEA'


//FUNCIONES

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

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let getExtension = function(value){
    return value.slice((value.lastIndexOf(".") - 1 >>> 0) + 2)}


// EVENTOS

msjCampo(emailError,email)
msjCampo(passwordError,password)

email.onkeydown = function(){
    validationKey(email,(email.value.match(pattern)))
};

email.onblur = function(){
    validationBlur(email,email.value.length>0 &&(email.value.match(pattern)) )
}

password.onkeyup = function(){
    validationKey(password,password.value.length>5)
}




// EVENTOS SUBMIT
formulario.addEventListener('submit', function(e){
    let errors = []
    if(password.value.length<6){
        passwordError.innerHTML  = "Ingrese una contraseña de al menos 6 caracteres"
        passwordError.style.opacity = '100'
        passwordError.style.color = "rgb(192, 57, 43)"
        errors.push(1)
    }

    let userFind = usersList.find((user)=>{
        return user.email == email.value
    })


    if(userFind){
        emailError.style.opacity='0'
        emailError.innerHTML = "  "
    }

    if(!userFind){
        errors.push(2)
    }
    if(!userFind){
            emailError.style.opacity='100'
            emailError.style.color="rgb(192, 57, 43)"
            emailError.innerHTML = "Usuario no registrado"
            email.style.backgroundColor = colorRojo;
            email.style.transition = "0.5s 0s ease"
            password.style.backgroundColor = colorRojo;
            password.style.transition = "0.5s 0s ease"
        } 
    if (!(email.value.match(pattern))){
        emailError.innerHTML = "Ingrese un email válido"
        errors.push(3)
    }


    
        if(errors.length > 0){
            e.preventDefault();     
        }  
})


