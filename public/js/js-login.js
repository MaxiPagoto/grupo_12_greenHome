let formulario = document.querySelector('#login-form')

let email = document.querySelector('#email')
let password = document.querySelector('#password')

formulario.addEventListener('submit', function(e){
    const error = []
    console.log(password)

    if(email.value == ''){
        alert('Email vacio o incorrecto')
        error.push(1)
        console.log(email.value)
    }

    if(password.value == ''){
        alert('Contraseña incorrecta')
        error.push(1)
    }
    if(error.length > 0){
        e.preventDefault();
    }
})

