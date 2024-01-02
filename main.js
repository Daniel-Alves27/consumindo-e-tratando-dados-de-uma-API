async function consultarEnderco(cep) {
    let mensagemErro = document.getElementById("erro")
    mensagemErro.innerHTML = "";

    try {
        const buscarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const buscarCepConvertido = await buscarCep.json()
        console.log(buscarCepConvertido)
        if(buscarCepConvertido.erro) {
            throw Error ('esse cep não existe!');
        }

        let cidade = document.getElementById("cidade");
        let bairro = document.getElementById("bairro");
        let complemento = document.getElementById("complemento")
        let endereco = document.getElementById("endereco")

        cidade.value = buscarCepConvertido.localidade;
        bairro.value = buscarCepConvertido.bairro;
        complemento.value = buscarCepConvertido.complemento;
        endereco.value = buscarCepConvertido.logradouro

    }catch(erro) {
        console.log(erro)
        mensagemErro.innerHTML = `<p>Cep inválido.Tente novamente!</p>`
    }
}

let pesquisarCep = document.getElementById("cep");
pesquisarCep.addEventListener("focusout",() => consultarEnderco(cep.value));


