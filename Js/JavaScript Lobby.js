//local storage
var AtualLocalStorage = JSON.parse(localStorage.getItem('ListaUser'));

//user
var userValid = JSON.parse(localStorage.getItem('userValid'));
var user = document.getElementById('user');

//horario
var text_horario = document.getElementById('horário');

//users
var select = document.querySelector('#users');
var option = document.createElement('option');
var passwordH1 = document.getElementById('Password');

if(userValid == null){
    user.innerHTML = 'Sem Usuário'
}

document.addEventListener("DOMContentLoaded", function(event){
    console.log(userValid.Admin);
    if(userValid.Admin == true){
        const Local_Storage = document.getElementById('Local_Storage');
        const select_Forgot = document.getElementById('select_Forgot');

        Local_Storage.setAttribute('style', 'display: flex');
        select_Forgot.setAttribute('style', 'display: block');
    }
})

usuario();
function usuario(){
    var userHtml = new String(userValid.nome);
    var userSlit = userHtml.split(' ');

    console.log(userHtml)
    if(userValid !== null){
        user.innerHTML = userSlit.map((userSlit) =>{
            return userSlit[0].toUpperCase() + userSlit.substring(1);
        }).join(' ');
    }
}

horario();
function horario(){
    //data
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    //horas, minutos e segundos
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds

    //colando no html o horario
    text_horario.innerHTML = 'Horário: ' + `${hour}:${minute}:${second}`
}

//timer de 1 segundo
setInterval(() => {
  horario()
}, 1000)

function GetLocalStorage(){
    AtualLocalStorage = JSON.parse(localStorage.getItem('ListaUser'));
    console.table(AtualLocalStorage);
    console.table(userValid);
    return
}

function RemoveLocalStorage(){
    localStorage.clear();
}

function Redirencionar_site1(){
    window.location.href = 'Site 1.html';
}

function Redirencionar_site2(){
    window.location.href = 'Site 2.html';
}

AtualLocalStorage.map((item) => {
    Email = new Option(item.emailCadastrado, item.emailCadastrado);
    select.add(Email);
});

function ResetSelection(){
    AtualLocalStorage.forEach((item) => {
        if(select.value == item.emailCadastrado){
            passwordH1.innerHTML = item.passwordCadastrado;
        }
        else if(select.value == ''){
            passwordH1.innerHTML = '';
        }
    });
}