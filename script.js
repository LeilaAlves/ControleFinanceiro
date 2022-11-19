var mercadoriasTeste = [{
    "transacao": "venda",
    "mercadoria": "mouse",
    "valor": 65.80
},
{
    "transacao": "compra",
    "mercadoria": "mesa",
    "valor": 500.99
},
{
    "transacao": "venda",
    "mercadoria": "mochila",
    "valor": 265.89
}]

var mercadorias = [];

localStorage.setItem('chaveTransacao', JSON.stringify(mercadoriasTeste));  //setItem salva no localStorage (chave e valor)// 

var stringMercadoria = localStorage.getItem('chaveTransacao') //getItem pega o valor do da chave utilizada// 

console.log(stringMercadoria) //até aqui está FUNCIONANDO//


if (stringMercadoria) {
    var mercadoriasArray = JSON.parse(localStorage.getItem('chaveTransacao'))

    console.log(mercadoriasArray) //até aqui está FUNCIONANDO, traz o array de objetos //

}

/////////////////////////////////////formato do extrato////////////////////////////////////////////////

function formatoExtrato() {

    document.querySelector('#extratoTBody', 'tfoot').innerHTML = ''
    let total = 0
    

    for (produto of mercadoriasArray) {
        total += produto.valor * (produto.transacao == 'venda' ? 1 : -1) //transação soma ou subtrai - FUNCIONANDO//

        document.querySelector('#extratoTBody').innerHTML += `
        <tr>
            <td>${produto.transacao == 'venda' ? '+' : '-'} </td>
            <td>${produto.mercadoria}</td>
            <td>${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td> 
        </tr>
        `
        //máscara de valor acima - FUNCIONANDO//

        document.getElementById('#extratoTBody')

    }

    //tfoot com lucro ou prejuízo - FUNCIONANDO//
    document.querySelector('table tfoot').innerHTML += `
        <tr>
            <td></td>
            <td>Total</td>
            <td> R$ ${total < 0 ? total * -1 : total} </td>
        </tr>
        
        <tr>
            <td></td>
            <td></td>
            <td> ${total < 0 ? '[Prejuízo]' : (total != 0 ? '[Lucro]' : '')} </td>
        </tr>
        `;

    document.getElementById('#tfooter')
}


formatoExtrato()




/////////////////////////////////////fim do formato do extrato////////////////////////////////////////////

function adicionarItem(mercadorias) {
    mercadoriasArray.push(mercadorias);

    localStorage.setItem('chaveTransacao', JSON.stringify(mercadorias))

    formatoExtrato()
}

adicionarItem()


//=======================================================================//

// function formatoValor(valor) {
//     const formatoValor = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//     return formatoValor;
// }

// formatoValor([0])
