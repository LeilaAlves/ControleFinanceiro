const novaTransacaoUL = document.querySelector('#novaTransacaoUL');

localStorage.setItem('mercadoria','valor');

const novoRegistro = [
    {
        transacao: InputDeviceInfo.option,
        mercadoria: "",
        valor: 0
    }
]

const extrato = transacao => {
    const operador = transacao.value < 0 ? '-' : '+';
    const estTransacao = transacao.value < 0 ? 'compra' : 'venda';
    const mercadoriaTipo = mercadoria.value;
    const mascValor = Math.abs(valor.value);
    const li = document.createElement('li');

    li.classList.add(estTransacao);
    li.innerHTML = `
    <span>${operador} ${mercadoriaTipo} R$ ${mascValor}</span>
    `
    novaTransacaoUL.prepend(li);
    console.log(novaTransacaoUL)
}

extrato(novoRegistro[0])

const valoresAtualizados = () => {
    const volumeTransacoes = novoRegistro.map(transacao => transacao.valor)
    const total = volumeTransacoes.reduce((acumulator, number) => acumulator + number, 0).toFixed(2)
    return total
}

const addTransacaoDom = () => { novoRegistro.forEach(extrato) }

valoresAtualizados()

function formatoValor(valor) {
    const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatoValor;
}

formatoValor([0])




function validarBotaoAdicionar() {
    const mercadoria = document.getElementById('mercadoria').value;
    const valor = document.getElementById('valor').value;

    if (mercadoria == "" || valor == "0") {
        return alert("Preencha os campos para seguir.");
    } else {
        const novoProduto = localStorage.getItem("novaTransacaoUL");
        return novoProduto;
    }
}



//*****validando os inputs - ítem 01 do readme*****//
//*****Máscara de preço - ítem 02 do readme*****//
// especificando operadores//
//matemáticos na listagem //



//fim de especificando operadores//
//matemáticos na listagem //


//*****Armazenar em localStorage // atualizar calculo - ítem 03 do readme*****//

//*****Limpar dados - ítem 04 do readme*****//

