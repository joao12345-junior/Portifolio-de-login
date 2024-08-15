
//icon
const mode = document.getElementById('mode_icon');

//eye
const eye = document.getElementById('eye');

//social media
const social_media = document.querySelector("#social_media");

//msgs
const msgCorrect = document.querySelector("#msgCorrect");
const msgError = document.querySelector("#msgError");

//email
const email = document.querySelector('#email');
const emailLabel = document.getElementById("emailLabel");
const emailInput_field = document.querySelector("#emailInput-field");
var validEmail = false;

//password
const password = document.querySelector('#password');
const passwordLabel = document.getElementById("passwordLabel");
const passwordInput_field = document.querySelector("#passwordInput-field");
var validPassword = false;

//login button
const LoginButton = document.querySelector('#login_button');

//login text
var Login_Text = document.querySelector('#Login_Text');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    
    if(mode.classList.contains('fa-moon')){ 
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
})

eye.addEventListener('click', () => {

    const passwordVisibility = document.querySelector('#password');

    if(eye.classList.contains('fa-eye-slash')){
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        passwordVisibility.setAttribute('type', 'text');

        return;
    }

    eye.classList.add('fa-eye-slash');
    eye.classList.remove('fa-eye');
    passwordVisibility.setAttribute('type', 'password');
})

email.addEventListener('keyup', () => {
    
    var email_text_input = new  String(email.value);

    //search
    var Searchmin = email_text_input.indexOf('@') +1;
    var Searchmax = email_text_input.indexOf('.');
    var SliceWord = email_text_input.slice(Searchmin, Searchmax);
    var SliceWordName = email_text_input.slice(0, Searchmin - 1);

    if((SliceWordName.length >= 4) & (email_text_input.indexOf("@") !== -1) & (email_text_input.indexOf('.') !== -1) & (email_text_input.slice(Searchmin, Searchmax) !== '' & (SliceWord.length >= 5))){
        emailLabel.setAttribute('style', 'var(--color-dark-50);');
        emailLabel.innerHTML = 'E-mail';
        emailInput_field.setAttribute('style', 'border-bottom: 2px solid var(--color-gray-100);');
        validEmail = true;
    }
    else{
        emailLabel.setAttribute('style', 'color:red;');
        emailLabel.innerHTML = '<strong>E-mail *Insira um E-mail válido</strong>';
        emailInput_field.setAttribute('style', 'border-bottom: 2px solid red;');
        validEmail = false;
    }
})

password.addEventListener('keyup', () => {

    if(password.value.length <= 3){
        passwordLabel.setAttribute('style', 'color: red;');
        passwordLabel.innerHTML = '<strong>Password *Insira no mínimo 4 digitos';
        passwordInput_field.setAttribute('style', 'border-bottom: 2px solid red;')
        validPassword = false;
    }
    else{
        passwordLabel.setAttribute('style', 'var(--color-dark-50);');
        passwordLabel.innerHTML = 'Password';
        passwordInput_field.setAttribute('style', 'border-bottom: 2px solid var(--color-gray-100);')
        validPassword = true;
    }
})

LoginButton.addEventListener('click', () => {
    event.preventDefault();

    var userValid = {
        nome: '',
        email: '',
        password: '',
        Admin: false
    }

    let ListaUser = JSON.parse(localStorage.getItem('ListaUser') || '[]');

    ListaUser.forEach((item, index) => {
        if(email.value == item.emailCadastrado && password.value == item.passwordCadastrado){
            var user = index + 1;
            userValid = {
                user: user,
                nome: item.nomeCadastrado,
                email: item.emailCadastrado,
                password: item.passwordCadastrado,
                Admin: false
            }
            
            localStorage.setItem('userValid', JSON.stringify(userValid));
        }
    })

    console.log(validEmail, validPassword)

    if(validEmail == true && validPassword == true){
        if(password.value == userValid.password && email.value == userValid.email){
            if(email.value == 'joaovpfarias@gmail.com' && password.value == 1234){
                userValid.Admin = true;
                localStorage.setItem('userValid', JSON.stringify(userValid));
                console.log(userValid.Admin);             
            }
            msgError.setAttribute('style', 'display: none;');
            social_media.setAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");

            setTimeout(() => {
                msgCorrect.setAttribute('style', 'display: block;');
                msgCorrect.innerHTML = '<strong>Login sendo efetuado...</strong>';
                social_media.removeAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
                social_media.classList.add('desaparecer');

                setTimeout(() => {
                    msgCorrect.setAttribute('style', 'dysplay: none;')
                    window.location.href = 'Lobby.html';
                }, 2000);
            }, 1990);
        }
        else{     
            ListaUser.forEach((item) => {
                if(email.value !== item.emailCadastrado){
                    console.log('email errado');
                    msgCorrect.setAttribute('style', 'display: none;');
                    social_media.setAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
                    msgError.innerHTML = '<strong>E-mail incorreto</strong>';
                
                    setTimeout(() => {
                        msgError.setAttribute('style', 'display: block;');
                        msgError.classList.add('block');
                        social_media.removeAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
                        social_media.classList.add('desaparecer');
                    }, 1990);
                }
                else if(password.value !== item.passwordCadastrado){
                    console.log('senha incorreta');
                    msgCorrect.setAttribute('style', 'display: none;');
                    social_media.setAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
                    msgError.innerHTML = '<strong>Senha incorreta</strong>';
                    
                    setTimeout(() => {
                        msgError.setAttribute('style', 'display: block;');
                        msgError.classList.add('block');
                        social_media.removeAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
                        social_media.classList.add('desaparecer');
                    }, 1990);
                }
            })
        }
    }
    else{
        msgCorrect.setAttribute('style', 'display: none;');
        social_media.setAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>';

        setTimeout(() => {
            msgError.setAttribute('style', 'display: block;');
            msgError.classList.add('block');
            social_media.removeAttribute('style', "animation: zoom-out-social-media 2s ease-in-out;");
            social_media.classList.add('desaparecer');
        }, 1990);
    }
})

function Login_TextButton(){
    if(msgError.classList.contains('block') || msgCorrect.classList.contains('block')){
        msgCorrect.setAttribute('style', 'display:none;');
        msgError.setAttribute('style', 'display:none;');
        social_media.classList.remove('desaparecer');
    }
}