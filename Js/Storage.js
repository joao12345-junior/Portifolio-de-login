function StorageService(origin){

    const get = function(){

        var Dados = localStorage.getItem(origin);
        var DadosConvertidos = JSON.parse(Dados);
        return DadosConvertidos;
    }

    const save = function(Dados){

        var DadosConvertidos = JSON.stringify(Dados);
        localStorage.setItem(origin, DadosConvertidos);
    }

    const remove = function(id)
    {

        var itensSalvos = get();

        var filtrado = itensSalvos.filter(function (valor)
        {
            if(valor.id != id)
            {
                return valor;
            }
        });

        save(filtrado);
    }

    const update = function(Dados){
        var itensSalvos = get();

        itensSalvos.forEach(function(valor, index){
            if(valor.id == Dados.id){
                itensSalvos[index] = Dados;
            }
        })

        save(itensSalvos);
    }

    return {get, save, remove, update};
}