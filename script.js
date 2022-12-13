var listaExtrato = [];

localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato));

var stringDados = localStorage.getItem('chaveTransacao');


if (localStorage.getItem('chaveTransacao')) {
    listaExtrato = JSON.parse(stringDados)
    addEventListener("oninput", formatoExtrato)
}

function formatoExtrato() {

    document.querySelector('#extratoTBody').innerHTML = ''

    let total = 0;

    for (produto of listaExtrato) {

        total += produto.valor * (produto.transacao == "compra" ? -1 : 1)
        document.querySelector('#extratoTBody').innerHTML += `
        <tr>
            <td>${produto.transacao != "compra" && produto.transacao == "venda" ? "+" : "-"} </td>
            <td>${produto.mercadoria}</td>
            <td>${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}</td> 
        </tr>
        `
    }

    document.querySelector('table tfoot').innerHTML = ''
    document.querySelector('table tfoot').innerHTML += `
        <tr>
            <td></td>
            <td>Total</td>
            <td>${produto.valor < 0 ? total * -1 : total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })} </td>
        </tr>
        
        <tr>
            <td></td>
            <td></td>
            <td id="legenda"> ${total < -0 ? '[Prejuízo]' : (total > 0 ? '[Lucro]' : '')} </td>
        </tr>
        `;

}

formatoExtrato()

function adicionarItem() {

    listaExtrato.push({
        transacao: document.getElementById('transacao').value,
        mercadoria: document.getElementById('mercadoria').value,
        valor: parseFloat(document.getElementById('valor').value.replaceAll('.', '').replace(',', '.'))
    });

    localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato));

    formatoExtrato()

}

adicionarItem()

function validacao() {



    if (localStorage.getItem('chaveTransacao')) {

        let valido = document.getElementById("formulario");

        document.getElementById('mercadoria').value !== "" ||
        document.getElementById('mercadoria').value !== undefined ||
        document.getElementById('valor').value !== null ||
        document.getElementById('valor').value > 0 ||
        document.getElementById('transacao').value !== "selecione" ||
        document.getElementById('transacao').value == "venda" ||
        document.getElementById('transacao').value == "compra"

        return valido;

    } else {

        let erro = document.getElementById('erro');
        erro.classList.add("visible");
        mercadoria.classList.add("invalid");
        erro.setAttribute("aria-hidden", false);
        erro.setAttribute("aria-invalid", true);

        return erro;
    }


}

validacao()
 
function limparDados() {

    prompt("Qual transação você deseja excluir?")

    listaExtrato.mercadoria.splice(ld, 1);

    formatoExtrato();
    localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato))
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//-> arrumar máscara de preço no input de valor
//ok-> ajustar os sinais aritméticos do cáculo no extrato
//-> ler mais sobre localStorage
//-> criar validação dos inputs
//-> se der tempo, ajustar a tabela no padrão do figma