var listaExtrato = [];

localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato));  //setItem salva no localStorage (chave e valor)// 

var stringDados = localStorage.getItem('chaveTransacao') //getItem pega o valor da chave utilizada// 

if (localStorage.getItem('chaveTransacao')) {
    listaExtrato = JSON.parse(stringDados) //até aqui está FUNCIONANDO, traz o array de objetos //
}

/////////////////////////////////////formato do extrato////////////////////////////////////////////////

function formatoExtrato() {

    document.querySelector('#extratoTBody').innerHTML = '';
    let total = 0;

    for (produto of listaExtrato) {

        total += produto.valor * (produto.transacao == 'venda' ? 1 : -1)
        //transação soma ou subtrai - FUNCIONANDO

        document.querySelector('#extratoTBody').innerHTML += `
        <tr>
            <td>${produto.transacao.value === 'venda' ? "+" : "-"} </td>
            <td>${produto.mercadoria}</td>
            <td>${produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}</td> 
        </tr>
        `
        //máscara de valor acima - FUNCIONANDO//


        //tfoot com lucro ou prejuízo - FUNCIONANDO//

        document.querySelector('table tfoot').innerHTML = '';
        document.querySelector('table tfoot').innerHTML += `
        <tr>
            <td></td>
            <td>Total</td>
            <td>${produto.valor < 0 ? total * -1 : total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })} </td>
        </tr>
        
        <tr>
            <td></td>
            <td></td>
            <td id="legenda"> ${total < 0 ? '[Prejuízo]' : (total != 0 ? '[Lucro]' : '')} </td>
        </tr>
        `;
    }

}


formatoExtrato()

/////////////////////////////////////fim do formato do extrato////////////////////////////////////////////


//////////////adicionar item e validadores de inputs/////////////////

function adicionarItem() {
        
    listaExtrato.push({
        transacao: document.getElementById('transacao').value,
        mercadoria: document.getElementById('mercadoria').value,
        valor: parseFloat(document.getElementById('valor').value.replaceAll('.', '').replace(',', '.'))
    });

        localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato));

    formatoExtrato()     

    validacao()
    
}

adicionarItem()


const enviar = document.getElementById("adicionar");

enviar.addEventListener("click", validacao);

function validacao(a) {

    e.preventDefault();

    //validacao da opção de transacao//
    let opcaoTransac = document.getElementById('transacao');
    !opcaoTransac.value == "venda" && !opcaoTransac.value == "compra";

    //validacao dos inputs mercadoria e valor//
    document.getElementById('mercadoria').value !== "" && document.getElementById('valor').value > 0

    
    let valido = true;

    if (mercadoria.value && !valor.value) {
        const erro = document.getElementById("erro");
        erro.classList.add("visible");
        mercadoria.classList.add("invalid");
        erro.setAttribute("aria-hidden", false);
        erro.setAttribute("aria-invalid", true);
    }
    
    return valido;


}

//////////////fim de adicionar item e validadores de inputs/////////////////

///////////////////////excluir dados///////////////////////////// 
// function limparDados(listaExtrato) {
    
    
//     prompt("Qual transação você deseja excluir?")
        
//         listaExtrato.mercadoria.splice(ld, 1);



//     formatoExtrato();
//     localStorage.setItem('chaveTransacao', JSON.stringify(listaExtrato))
// } 



///////////////////////////////////////////////////////////////////////////////////////////////////////////

//-> arrumar máscara de preço no input de valor
//-> ajustar os sinais aritméticos do cáculo no extrato
//-> ler mais sobre localStorage
//-> criar validação dos inputs
//-> se der tempo, ajustar a tabela no padrão do figma