var listaExtrato = [];

localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato));  //setItem salva no localStorage (chave e valor)// 

var stringDados = localStorage.getItem('chaveTransacao'); //getItem pega o valor da chave utilizada// 


if (localStorage.getItem('chaveTransacao')) {
    listaExtrato = JSON.parse(stringDados) //até aqui está FUNCIONANDO, traz o array de objetos //
}

/////////////////////////////////////formato do extrato////////////////////////////////////////////////

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
        //máscara de valor acima - FUNCIONANDO//
    }
        //tfoot com lucro ou prejuízo - FUNCIONANDO//     

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

/////////////////////////////////////fim do formato do extrato////////////////////////////////////////////

///////////////////////////////////////////////adicionar item ////////////////////////////////////////////

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
////////////////////////////////////fim de adicionar item///////////////////////////////////////////



////////////////////////////////validadores de inputs///////////////////////////////////////////////



function validacao() {

    let valido = document.getElementById("formulario");
    console.log()
    valido.addEventListener("oninput", formatoExtrato);

    if (localStorage.getItem('chaveTransacao')) {

        document.getElementById('mercadoria').value !== "" ||
            console.log(document.getElementById('mercadoria').value !== "")

        document.getElementById('mercadoria').value !== undefined ||
            console.log(document.getElementById('mercadoria').value !== undefined)

        document.getElementById('valor').value !== null ||
            console.log(document.getElementById('valor').value !== null)

        document.getElementById('valor').value > 0 ||
            console.log(document.getElementById('valor').value > 0)

        document.getElementById('transacao').value !== "selecione" ||
            console.log(ocument.getElementById('transacao').value !== "selecione")

        document.getElementById('transacao').value == "venda" ||
            console.log(document.getElementById('transacao').value == "venda")

        document.getElementById('transacao').value == "compra"
        console.log(document.getElementById('transacao').value == "compra")

        console.log(valido)
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


////////////////////////////////fim de validadores de inputs///////////////////////////////////

///////////////////////excluir dados///////////////////////////// 
function limparDados() {
        
    prompt("Qual transação você deseja excluir?")
        
        listaExtrato.mercadoria.splice(ld, 1);

    formatoExtrato();
    localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato))
} 



///////////////////////////////////////////////////////////////////////////////////////////////////////////

//-> arrumar máscara de preço no input de valor
//-> ajustar os sinais aritméticos do cáculo no extrato
//-> ler mais sobre localStorage
//-> criar validação dos inputs
//-> se der tempo, ajustar a tabela no padrão do figma