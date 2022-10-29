// teste para coleta de informações da localstorage//
// var testeMercadoria = [
//     {
//         "transacao": "compra",
//         "mercadoria": "mouse",
//         "valor": 70.49
//     },

//     {
//         "transacao": "venda",
//         "mercadoria": "teclado",
//         "valor": 254.99
//     },

//     {
//         "transacao": "venda",
//         "mercadoria": "cabo USD",
//         "valor": 148.15
//     }
// ]

localStorage.getItem('mercadoria', JSON.stringify(mercadorias));

var mercadorias = [
    {
        "transacao": getSelection('venda', 'compra'),
        "mercadoria": "",
        "valor": 0
    }
];

stringMercadoria = localStorage.getItem('mercadoria')

if (stringMercadoria) {
    mercadorias = JSON.parse(stringMercadoria)
}



function formatoExtrato() {

    document.querySelector('table tbody').innerHTML = ''

    for (produto of mercadorias) {
        document.querySelector('table tbody').innerHTML += `
        <tr>
            <td>${produto.transacao == 'venda' ? '+' : '-'} </td>
            <td>${produto.mercadoria}</td>
            <td> R$ ${produto.valor}</td>
        </tr>
        `
    }
}

formatoExtrato()



function adicionarItem() {
    mercadoria.push(mercadorias);
    localStorage.setItem('mercadoria', JSON.stringify(mercadorias))

    formatoExtrato()
}


adicionarItem()


//=======================================================================//

// function formatoValor(valor) {
//     const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     return formatoValor;
// }

// formatoValor([0])
