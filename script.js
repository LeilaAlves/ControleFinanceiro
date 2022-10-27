// teste para coleta de informações da localstorage//
var testeMercadoria = [
    {
        "transacao": "compra",
        "mercadoria": "mouse",
        "valor": 70.49
    },

    {
        "transacao": "venda",
        "mercadoria": "teclado",
        "valor": 254.99
    },

    {
        "transacao": "venda",
        "mercadoria": "cabo USD",
        "valor": 148.15
    }
]

localStorage.getItem('mercadoria', JSON.stringify(testeMercadoria));

var mercadorias = [];

stringMercadoria = localStorage.getItem('mercadoria')

if (stringMercadoria) {
    mercadorias = JSON.parse(stringMercadoria)
}

formatoExtrato()

function formatoExtrato() {

    document.querySelector('table tbody').innerHTML = ''

    for (produto of mercadorias) {
        document.querySelector('table tbody').innerHTML += `
        <tr>
            <td>${produto.mercadorias} == 'venda' ? '+' : '-' </td>
            <td>${produto.mercadoria}</td>
            <td> R$ ${produto.valoralor}</td>
        </tr>
        `
    }
}

function adicionarItem(mercadorias) {
    mercadoria.push(mercadorias);
    localStorage.setItem('mercadoria', JSON.stringify(mercadorias))

    formatoExtrato()
}







// const novoRegistro = [
//     {
//         transacao: InputDeviceInfo.option,
//         mercadoria: "",
//         valor: 0
//     }
// ]

// const extrato = transacao => {
//     const operador = transacao.value < 0 ? '-' : '+';
//     const estTransacao = transacao.value < 0 ? 'compra' : 'venda';
//     const mercadoriaTipo = mercadoria.value;
//     const mascValor = Math.abs(valor.value);
//     const li = document.createElement('li');

//     li.classList.add(estTransacao);
//     li.innerHTML = `
//     <span>${operador} ${mercadoriaTipo} R$ ${mascValor}</span>
//     `
//     extratoTBody.prepend(li);
//     console.log(extratoTBody)
// }

// extrato(novoRegistro[0])

// const valoresAtualizados = () => {
//     const volumeTransacoes = novoRegistro.map(transacao => transacao.valor)
//     const total = volumeTransacoes.reduce((acumulator, number) => acumulator + number, 0).toFixed(2)
//     return total
// }

// const addTransacaoDom = () => { novoRegistro.forEach(extrato) }

// valoresAtualizados()

// function formatoValor(valor) {
//     const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     return formatoValor;
// }

// formatoValor([0])




// function validarBotaoAdicionar() {
//     const mercadoria = document.getElementById('mercadoria').value;
//     const valor = document.getElementById('valor').value;

//     if (mercadoria == "" || valor == "0") {
//         return alert("Preencha os campos para seguir.");
//     } else {
//         const novoProduto = localStorage.getItem("extratoTBody");
//         return novoProduto;
//     }
// }



//*****validando os inputs - ítem 01 do readme*****//
//*****Máscara de preço - ítem 02 do readme*****//
// especificando operadores//
//matemáticos na listagem //




//fim de especificando operadores//
//matemáticos na listagem //


//*****Armazenar em localStorage // atualizar calculo - ítem 03 do readme*****//

//*****Limpar dados - ítem 04 do readme*****//

