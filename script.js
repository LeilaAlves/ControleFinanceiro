//*****validando os inputs - ítem 01 do readme*****//

const novaTransacaoUL = document.querySelector('#novaTransacaoUL');

//cadastro novo item (obj)//

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

localStorage.setItem('mercadoria', 'preco');

//fim de cadastro novo item (obj)//

// especificando operadores//
//matemáticos na listagem //

const extrato = transacao => {
    const operador = transacao.amount < 0 ? '-' : '+';
    const CSSClass = transacao.amount < 0 ? 'compra' : 'venda';
    const operadorNegativo = Math.abs(transacao.amount);
    const li = document.createElement('li');

    li.classList.add(CSSClass);
    li.innerHTML = `
        ${transacao.name} <span>${operador} R$ ${operadorNegativo}</span>
    `
    novaTransacaoUL.prepend(li); 
}

const valoresAtualizados = ()  => {
    const volumeTransacoes = novoRegistro.map(transacao => transacao.amount)
    const total = volumeTransacoes.reduce((acumulator, number) => acumulator + number, 0).toFixed(2)
}

valoresAtualizados(total(0))

const addTransacaoDom = () => {
    novoRegistro.forEach(extrato)

}

valoresAtualizados(extrato)

//fim de especificando operadores//
//matemáticos na listagem //

//*****Máscara de preço - ítem 02 do readme*****//

let valor = 0

function formatoPreco() {
    const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log()
    return formatoValor;
}
formatoPreco(formatoValor)


//*****Armazenar em localStorage // atualizar calculo - ítem 03 do readme*****//

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



//*****Limpar dados - ítem 04 do readme*****//

