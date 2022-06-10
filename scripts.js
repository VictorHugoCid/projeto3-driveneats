let prato, bebida, sobremesa;

let precoPrato, precoBebida, precoSobremesa, valorFinal;

function selecaoPratos(item){
    //aquisição dos dados    
    let preco = item.querySelector(" h3 strong").innerHTML;
    prato = item.querySelector(" h1 strong").innerHTML;
    precoPrato = tratarValores(preco);
    console.log(prato + precoPrato);

    //marcação do item
    const opcaoSelecionada = document.querySelector(".pratos .selecionado");
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    //console.log(item)
    verificarSelecao()
}

function selecaoBebidas(item){
    //aquisição dos dados 
    let preco = item.querySelector(" h3 strong").innerHTML;
    bebida = item.querySelector(" h1 strong").innerHTML;
    precoBebida = tratarValores(preco);
    console.log(bebida + precoBebida);

    //marcação do item
    const opcaoSelecionada = document.querySelector(".bebidas .selecionado");
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    //console.log(item)
    verificarSelecao()
}

function selecaoSobremesas(item){
    //aquisição dos dados 
    let preco = item.querySelector(" h3 strong").innerHTML;
    sobremesa = item.querySelector(" h1 strong").innerHTML;
    precoSobremesa = tratarValores(preco);
    console.log(sobremesa + precoSobremesa);

    //marcação do item
    const opcaoSelecionada = document.querySelector(".sobremesas .selecionado")
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    //console.log(item)
    verificarSelecao()
}

let pratoVerificado, bebidaVerificado, sobremesaVerificado;

function verificarSelecao(){
    // RESOLVIDO
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    pratoVerificado =  document.querySelector(".pratos .selecionado");
    bebidaVerificado =  document.querySelector(".bebidas .selecionado");
    sobremesaVerificado =  document.querySelector(".sobremesas .selecionado");

    if (pratoVerificado !== null && bebidaVerificado !== null && sobremesaVerificado !== null ){
        const button = document.querySelector(".button")
        button.classList.add("fecharPedido")
        button.innerHTML = "Fechar pedido";
    }
}



function tratarValores(precoRecebido){

    precoRecebido = precoRecebido.replace("R$ ","").replace(",",".");
    precoRecebido = Number(precoRecebido).toFixed(2);
    precoRecebido = Number(precoRecebido);

    console.log(precoRecebido);//testado É NÚMERO
    return precoRecebido
}

function somaFinal(){
    valorFinal = precoPrato + precoBebida + precoSobremesa;
    console.log(valorFinal);
    console.log(valorFinal);
    return valorFinal;
}

function pedido(){

    if (pratoVerificado !== null && bebidaVerificado !== null && sobremesaVerificado !== null) {
        enviarMsg()
    }
} 


function enviarMsg(){
    // ex  https://wa.me/1XXXXXXXXXX?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda
    
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${somaFinal().toFixed(2)}`;
    console.log(mensagem);
    const link = `https://wa.me/5521971420505?text=${encodeURIComponent(mensagem)}`;

    window.open(link);
    
   /*  Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70 */

}