//validando os inputs - ítem 01 do readme//

const novaTransacaoUL = document.querySelector('#novaTransacaoUL');

const novoRegistro = [
    {
        id: () => {
            const dateString = Date.now().toString(36);
            const randomness = Math.random().toString(36);
            return dateString + randomness;
        },
        mercadoria: true,
        preco: true
    }
]

const extrato = transacao => {
    const operador = transacao.amount < 0 ? '-' : '+';
    const CSSClass = transacao.amount < 0 ? 'minus' : 'plus';
    const operadorNegativo = Math.abs(transacao.amount);
    const li = document.createElement('li');

    li.classList.add(CSSClass);
    li.innerHTML = `
        ${transacao.name} <span>${operador} R$ ${operadorNegativo} </span>
    `
    novaTransacaoUL.prepend(li); //mostra a transação + recente primeiro//
}

const addTransacaoDom = () => {
    novoRegistro.forEach(extrato);
}

addTransacaoDom()

//máscara de preço - ítem 02 do readme//

function formatoPreco() {
    let valor = 0;
    const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatoValor;
}

//Armazenar em localStorage - ítem 03 do readme//

function validarBotaoAdicionar() {
    const mercadoria = document.getElementById('mercadoria').value;
    const preco = document.getElementById('preco').value;

    if (mercadoria == "" || preco == "0") {
        return alert("Preencha os campos para seguir.");
    } else {
        const novoProduto = localStorage.getItem("novaTransacaoUL");
        console.log(mercadoria, preco)
        return novoProduto;
    }
}

//Limpar dados - ítem 04 do readme//

