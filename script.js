const transacaoUlTBody = document.querySelector('#extratoTBody')
const transacaoUlTfoot = document.querySelector('tfoot')

localStorage.setItem('mercadoria', JSON.stringify(mercadoriasTeste));

var mercadoriasTeste = [{

    "transacao": "compra",
    "mercadoria": "mouse",
    "valor": 65.80
},
{
    "transacao": "venda",
    "mercadoria": "mesa",
    "valor": 500.99
},
{
    "transacao": "compra",
    "mercadoria": "mochila",
    "valor": 265.89
}];

var mercadorias = [];

var stringMercadoria = localStorage.getItem('mercadoria')

if (stringMercadoria) {
    mercadoriasTeste = JSON.parse(stringMercadoria)
}


function formatoExtrato() {

    document.querySelector('#extratoTBody').innerHTML = ''
    let total = 0

    for (produto of mercadoriasTeste) {

        //transação soma ou subtrai//
        total += produto.valor * (produto.transacao == 'venda' ? 1 : -1)
        //transação soma ou subtrai//

        //formato do extrato//
        document.querySelector('#extratoTBody').innerHTML += `
        <tr>
            <td>${produto.transacao == 'venda' ? '+' : '-'} </td>
            <td>${produto.mercadoria}</td>
            <td>${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td> 
        </tr>
        `
        //máscara de valor, acima//

        document.prepend(transacaoUlTBody)

        //tfoot com lucro ou prejuízo//
        document.querySelector('table tfoot').innerHTML += `
    <tr>
        <td></td>
        <td>Total</td>
        <td> R$ ${total < 0 ? total * -1 : total} </td>
    </tr>
    
    <tr>
        <td></td>
        <td></td>
        <td id= "saldo"> ${total < 0 ? '[Prejuízo]' : (total != 0 ? '[Lucro]' : '')} </td>
    </tr>
    `;
        //tfoot com lucro ou prejuízo//
        
        document.append(tfoot)
    }

    formatoExtrato()
}

function adicionarItem(mercadoriasTeste) {
    mercadoriasTeste.forEach(mercadorias);

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
