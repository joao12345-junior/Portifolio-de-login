
const mode = document.getElementById('mode_icon');

//olhos
const eye_1 = document.getElementById('eye_1');
const eye_2 = document.getElementById('eye_2');

//nome
const nome = document.querySelector('#name');
const labelName = document.querySelector('#labelName');
const input_field_name = document.querySelector('#input-field-name');
var validNome = false;

//email
const email = document.querySelector('#email');
const labelEmail = document.querySelector('#labelEmail');
const input_field_email = document.querySelector('#input-field-email');
var validEmail = false;

//senha
const password = document.querySelector('#password');
const labelPassword = document.querySelector('#labelPassword');
const input_field_password = document.querySelector('#input-field-password');
var validPassword = false;

//senha confirm
const password_again = document.querySelector('#password_again');
const labelPasswordAgain = document.querySelector('#labelPasswordAgain');
const input_field_password_again = document.querySelector('#input-field-password-again');
var validPasswordConfirm = false;

//validação botão cadastrar
const msgCorrect = document.querySelector('#msgCorrect');
const msgError = document.querySelector('#msgError');

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

eye_1.addEventListener('click', () => {

    const passwordVisibility_1 = document.querySelector('#password');

    if(eye_1.classList.contains('fa-eye-slash')){
        eye_1.classList.remove('fa-eye-slash');
        eye_1.classList.add('fa-eye');
        passwordVisibility_1.setAttribute('type', 'text');

        return;
    }

    eye_1.classList.add('fa-eye-slash');
    eye_1.classList.remove('fa-eye');
    passwordVisibility_1.setAttribute('type', 'password');
})

eye_2.addEventListener('click', () => {

    const passwordVisibility_2 = document.querySelector('#password_again');

    if(eye_2.classList.contains('fa-eye-slash')){
        eye_2.classList.remove('fa-eye-slash');
        eye_2.classList.add('fa-eye');
        passwordVisibility_2.setAttribute('type', 'text');

        return;
    }

    eye_2.classList.add('fa-eye-slash');
    eye_2.classList.remove('fa-eye');
    passwordVisibility_2.setAttribute('type', 'password');
})

nome.addEventListener('keyup', () => {

    if(nome.value.length <= 3) {
        labelName.setAttribute('style', 'color: red;');
        labelName.innerHTML = '<strong>Name *Insira no mínimo 4 caracteres</strong>';
        input_field_name.setAttribute('style', 'border-bottom: 2px solid red;');
        validNome = false;
    }
    else{
        labelName.setAttribute('style', 'var(--color-dark-50);');
        labelName.innerHTML = 'Name';
        input_field_name.setAttribute('style', 'border-bottom: 2px solid var(--color-gray-100);');
        validNome = true;
    }
})

email.addEventListener('keyup', () => {
    var email_text_input = new String(email.value);

    var SearchminValidEmail = email_text_input.indexOf('@') + 1;
    var SliceWordValidEmail = String(email_text_input.slice(SearchminValidEmail));
    var SearchmaxValidEmail = SliceWordValidEmail.indexOf('.') + SearchminValidEmail + 4;
    var SliceWordName = email_text_input.slice(0, SearchminValidEmail - 1);

    var MaxSliceForPoint = SliceWordValidEmail.length - !SliceWordName.length;
    var MinSliceForPoint = SliceWordValidEmail.indexOf('.');
    
    var EmailValid = SliceWordValidEmail.slice(0, MinSliceForPoint);

    //email input
    console.log(email_text_input);
    console.log(EmailValid);
    console.log(SliceWordValidEmail.length)
    console.log(MaxSliceForPoint)

    //procura do .
    console.log(MaxSliceForPoint + ' Maximo Slice .');
    console.log(MinSliceForPoint + ' Maximo Slice .');
    console.log(SliceWordValidEmail.slice(MinSliceForPoint, MaxSliceForPoint));

    //palavra cortada Email Valid
    console.log(SliceWordValidEmail + ' Word Valid Email');

    //palavra cortada Word Name
    console.log(SliceWordName + ' Word Name');

    //Search
    console.log(SearchminValidEmail + ' minimo');
    console.log(SearchmaxValidEmail + ' maximo');

    console.log(email_text_input.slice(SearchminValidEmail, SearchmaxValidEmail));
    console.log(SliceWordValidEmail.slice(MinSliceForPoint, MaxSliceForPoint));

    if((SliceWordName.length >= 4) & (email_text_input.indexOf("@") !== -1) & (SliceWordValidEmail.indexOf('.') !== -1) & (email_text_input.slice(SearchminValidEmail, SearchmaxValidEmail) !== '' & (SliceWordValidEmail.slice(0, MinSliceForPoint) !== '') & (EmailValid.length >= 5))){
        labelEmail.setAttribute('style', 'var(--color-dark-50);');
        labelEmail.innerHTML = 'E-mail';
        input_field_email.setAttribute('style', 'border-bottom: 2px solid var(--color-gray-100);');
        validEmail = true;
    }
    else{
        labelEmail.setAttribute('style', 'color:red;');
        labelEmail.innerHTML = '<strong>E-mail *Insira um E-mail válido</strong>';
        input_field_email.setAttribute('style', 'border-bottom: 2px solid red;');
        validEmail = false;
    }
})

password.addEventListener('keyup', () => {

    if(password.value.length <= 3){
        labelPassword.setAttribute('style', 'color: red;');
        labelPassword.innerHTML = '<strong>Password *Insira no mínimo 4 digitos';
        input_field_password.setAttribute('style', 'border-bottom: 2px solid red;')
        validPassword = false;
    }
    else{
        labelPassword.setAttribute('style', 'var(--color-dark-50);');
        labelPassword.innerHTML = 'Password';
        input_field_password.setAttribute('style', 'border-bottom: 2px solid var(--color-gray-100);')
        validPassword = true;
    }
})

password_again.addEventListener('keyup', () => {

    if(password_again.value != password.value){
        labelPasswordAgain.setAttribute('style', 'color: red;');
        labelPasswordAgain.innerHTML = '<strong>Password *Insira a mesma senha';
        input_field_password_again.setAttribute('style', 'border-bottom: 2px solid red;')
        validPasswordConfirm = false;
    }
    else{
        labelPasswordAgain.setAttribute('style', 'var(--color-dark-50);');
        labelPasswordAgain.innerHTML = 'Password Confirm';
        input_field_password_again.setAttribute('style', 'border-bottom: 2px solid var(--color-gray-100);')
        validPasswordConfirm = true;
    }
})

function cadastrar(){

    event.preventDefault();

    let ListaUser = JSON.parse(localStorage.getItem('ListaUser') || '[]');

    var email_Cadastrado= {
        e_mail: " "
    }

    ListaUser.forEach((item, index) => {

        if(email.value == item.emailCadastrado){
            email_Cadastrado = {
                e_mail: item.emailCadastrado
            }
        }   
    });

    console.log(email_Cadastrado.e_mail);
    console.log(validNome, validEmail, validPassword, validPasswordConfirm)
    if(validNome && validEmail && validPassword && validPasswordConfirm){
        if(email.value !== email_Cadastrado.e_mail){

            msgError.setAttribute('style', 'display: none;');
            msgCorrect.setAttribute('style', 'display: block;');
            msgCorrect.innerHTML = '<strong>Cadastrando usuário...</strong>';
            ListaUser.push({
                nomeCadastrado: nome.value,
                emailCadastrado: email.value,
                passwordCadastrado: password.value
            });
            localStorage.setItem('ListaUser', JSON.stringify(ListaUser));

            setTimeout(() => {
                msgCorrect.setAttribute('style', 'dysplay: none;');
                window.location.href = 'Login.html';
            }, 1000);
        }
        else{
            msgCorrect.setAttribute('style', 'display: none;');
            msgError.setAttribute('style', 'display: block;');
            msgError.innerHTML = '<strong>Este E-mail já está cadastrado</strong>';

            setTimeout(() => {
                window.location.href = 'Login.html';
            }, 1000);
        }
    }
    else{
        msgCorrect.setAttribute('style', 'display: none;');
        msgError.setAttribute('style', 'display: block;');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente</strong>'; 
    }
}