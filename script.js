//máscara de preço//

function formatoPreco() {
    let valor = 0;
    const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatoValor;
}


//validando os inputs//

function validarBotaoAdicionar() {
    const mercadoria = document.getElementById('mercadoria').value
    const preco = document.getElementById('preco').value

    if (mercadoria == ""|| preco == "0" ){
            return alert("Preencha os campos para seguir.")
        }else {
            const novoProduto = localStorage.getItem("primeiraLinhaTabela");
        console.log(mercadoria, preco)
            return novoProduto;
    }
}

//Limpar dados//