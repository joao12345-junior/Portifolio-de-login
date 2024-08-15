var StorageService = StorageService('clientes');

//tabela
let tbody = document.getElementById('tbody');
var index;

//inputs values
let ID_value
let NameId_value
let NumberOfClients_value
let NumberOfClientRemove_value

localStorage.removeItem('clientes');

function Enviar() {
    event.preventDefault();
    //inputs values
    ID_value = document.getElementById('insertID').value;
    NameId_value = document.getElementById('insertNameId').value;
    NumberOfClients_value = document.querySelector('#insertNumberOfClients').value;
    NumberOfClientRemove_value = document.getElementById('insertNumberOfClientRemove').value;
}

function getClients() {
    event.preventDefault();
    seed();
    Dados = StorageService.get();
    updateClient();
    console.table(Dados);
    ListaTabela();
}

function removeClient() {
    event.preventDefault();
    for (i = 0; i < JSON.parse(localStorage.getItem('clientes')).length; i++){
        if (index == i){
            tbody.deleteRow(index);
        }
    }
    
    //id = parseInt(NumberOfClientRemove_value);
    //StorageService.remove(id);
}

function updateClient() {
    var novo = {
        id: parseInt(ID_value),
        nome: NameId_value
    }

    StorageService.update(novo);
}

function seed() {
    console.log('chegou')
    let Dados = Array.from({ length: parseInt(NumberOfClients_value) }, function (map, index) {
        let id = index + 1;
        return {
            id: id,
            nome: "Clientes " + id
        };
    });

    localStorage.setItem('clientes', JSON.stringify(Dados));
}
function ListaTabela() {
    tbody.innerHTML = '';

    for (let i = 0; i < JSON.parse(localStorage.getItem('clientes')).length; i++) {

        let tr = tbody.insertRow();

        var td_index = tr.insertCell();
        var td_id = tr.insertCell();
        var td_nome = tr.insertCell();

        td_index.innerText = StorageService.get()[i].id - 1;
        td_id.innerText = StorageService.get()[i].id;
        td_nome.innerText = StorageService.get()[i].nome;

        tbody.rows[i].onclick = function(){
            index = this.rowIndex - 1;
        }
    }
}