var coletaDados = [{
    "transacao": "venda",
    "mercadoria": "mouse",
    "valor": 655.89
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
}
]


var listaExtrato = [{
    "transacao": "",
    "mercadoria": "",
    "valor": 0
}];

localStorage.setItem('chaveTransacao', JSON.stringify(coletaDados));  //setItem salva no localStorage (chave e valor)// 

var stringDados = localStorage.getItem('chaveTransacao') //getItem pega o valor do da chave utilizada// 
console.log(stringDados) //até aqui está FUNCIONANDO//

if (stringDados) {
    listaExtrato = JSON.parse(stringDados)

    console.log(listaExtrato) //até aqui está FUNCIONANDO, traz o array de objetos //

}

/////////////////////////////////////formato do extrato////////////////////////////////////////////////

function formatoExtrato() {
    
    document.querySelector('#extratoTBody', 'tfoot').innerHTML = ''

    let total = 0

    for (produto of listaExtrato) {

        total += produto.valor * (produto.transacao == 'venda' ? 1 : -1)
        //transação soma ou subtrai - FUNCIONANDO mas sem formatação//
        

        document.querySelector('#extratoTBody').innerHTML += `
        <tr>
            <td>${produto.transacao.value == 'venda' ? '+' : '-'} </td>
            <td>${produto.mercadoria}</td>
            <td>${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }) }</td> 
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
            <td>${total < 0 ? total * -1 : total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 }) } </td>
        </tr>
        
        <tr>
            <td></td>
            <td></td>
            <td id="legenda"> ${total < 0 ? '[Prejuízo]' : (total != 0 ? '[Lucro]' : '')} </td>
        </tr>
        `;

    document.getElementById('#tfooter')
}


formatoExtrato()

/////////////////////////////////////fim do formato do extrato////////////////////////////////////////////

function adicionarItem(listaExtrato) {
    listaExtrato.push(coletaDados);

    localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato))

    formatoExtrato()
}

adicionarItem()
