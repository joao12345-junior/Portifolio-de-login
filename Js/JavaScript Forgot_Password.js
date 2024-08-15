
///lista user
var ListaUser = JSON.parse(localStorage.getItem('ListaUser'));

//email
var emailInput = document.getElementById('emailInput');
var passwordH1 = document.getElementById('Password');

//icon
const mode = document.getElementById('mode_icon');

//error
const error = document.getElementById('msgError');

mode.addEventListener('click', () => {
    const form = document.getElementById('forgot_form');

    
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

function Search(){
    event.preventDefault();

    var user = {
        email: '',
        senha: ''
    }

    ListaUser.forEach((item, index) => {
        if(emailInput.value == item.emailCadastrado){
            user = {
                email: item.emailCadastrado,
                senha: item.passwordCadastrado
            }
        }
    });

    if(emailInput.value !== user.email){
        passwordH1.innerHTML = ' ';
        error.setAttribute('style', 'display:block');
        error.innerHTML = 'Email errado, tente novamente'
    }
    else{
        error.setAttribute('style', 'display:none');
        passwordH1.innerHTML = user.senha;
    }
}
