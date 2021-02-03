
const URL = window.location.origin;
let formulario = document.querySelector('#login-form')


let email = document.querySelector('#email')
let emailError = document.querySelector('#email-error')
let password = document.querySelector('#password')
let passwordError = document.querySelector('#password-error')

formulario.addEventListener('submit', function(e){
    const error = []

    if(password.value == ''){
        passwordError.style.opacity = '100'
        error.push(1)
    }
    
    

    fetch(URL+'/api/users')
        .then(function(response){
            return response.json();
        }).then(function(users){
            const userslogged = users.data
            const usuario = []
            for(user of userslogged){
                if(user.email == email.value){
                    usuario.push(user.email)
                
                }

                if(usuario.length == 0 || email.value == ''){
                    emailError.style.opacity='100'
                    error.push(1)
                }

                console.log('error',error)
            
            }
           
        })
        if(error.length > 0){
            e.preventDefault();     
        }
       
             
            
})


