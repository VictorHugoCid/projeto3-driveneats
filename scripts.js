let prato, bebida, sobremesa;

let precoPrato, precoBebida, precoSobremesa, valorFinal;

let pratoVerificado, bebidaVerificado, sobremesaVerificado;

function selecaoPratos(item){
    //aquisição dos dados PRATOS   
    let preco = item.querySelector(" h3 strong").innerHTML;
    prato = item.querySelector(" h1 strong").innerHTML;
    precoPrato = tratarValores(preco);

    //marcação do item
    const opcaoSelecionada = document.querySelector(".pratos .selecionado");
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    
    item.classList.add("selecionado");
    verificarSelecao();
}

function selecaoBebidas(item){
    //aquisição dos dados BEBIDAS
    let preco = item.querySelector(" h3 strong").innerHTML;
    bebida = item.querySelector(" h1 strong").innerHTML;
    precoBebida = tratarValores(preco);

    //marcação do item
    const opcaoSelecionada = document.querySelector(".bebidas .selecionado");
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    verificarSelecao();
}

function selecaoSobremesas(item){
    //aquisição dos dados SOBREMESAS
    let preco = item.querySelector(" h3 strong").innerHTML;
    sobremesa = item.querySelector(" h1 strong").innerHTML;
    precoSobremesa = tratarValores(preco);

    //marcação do item
    const opcaoSelecionada = document.querySelector(".sobremesas .selecionado");
    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    verificarSelecao();
}


function verificarSelecao(){
    //verificar se tem 3 seleções(1 de cada) pra deixar o botão verdinho
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
    precoRecebido = Number(precoRecebido);
    precoRecebido = Number(precoRecebido);

    return precoRecebido;
}

function somaFinal(){
    valorFinal = precoPrato + precoBebida + precoSobremesa;
    console.log(valorFinal);
    return valorFinal;
}

function pedido(){
    preencherBoard();

    pratoVerificado =  document.querySelector(".pratos .selecionado");
    bebidaVerificado =  document.querySelector(".bebidas .selecionado");
    sobremesaVerificado =  document.querySelector(".sobremesas .selecionado");
    //Condicional pra o botão só ter ação dps de verdinho
    if (pratoVerificado !== null && bebidaVerificado !== null && sobremesaVerificado !== null) {
        janelaConfirmacao();
    }
} 

function preencherBoard(){

        // Colocar os nomes e valores no board de confirmação   
        //PRATO
        const pratoBoard = document.querySelector(".board .prato h5");
        const pratoBoardPreco = document.querySelector(".board .prato p");
        pratoBoard.innerHTML = prato;
        pratoBoardPreco.innerHTML = precoPrato.toFixed(2);
    
        //BEBIDA
        const bebidaBoard = document.querySelector(".board .bebida h5");
        const bebidaBoardPreco = document.querySelector(".board .bebida p");
        bebidaBoard.innerHTML = bebida;
        bebidaBoardPreco.innerHTML = precoBebida.toFixed(2);
    
        //SOBREMESA
        const sobremesaBoard = document.querySelector(".board .sobremesa h5");
        const sobremesaBoardPreco = document.querySelector(".board .sobremesa p");
        sobremesaBoard.innerHTML = sobremesa;
        sobremesaBoardPreco.innerHTML = precoSobremesa.toFixed(2);
    
        //TOTAL
        somaFinal();
        const totalBoard = document.querySelector(".board .total h5");
        const totalBoardPreco = document.querySelector(".board .total p");
        totalBoardPreco.innerHTML = valorFinal.toFixed(2); 

}

function enviarMsg(){

    let nome = prompt("Quem receberá a entrega?");
    let endereco = prompt("Endereço de entrega:");

    //vem de zap
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${somaFinal().toFixed(2)}\nNome: ${nome}\nEndereço: ${endereco}`;
    const link = `https://wa.me/5521971420505?text=${encodeURIComponent(mensagem)}`;
    window.open(link);
    
    //zerar tudo
    cancelarVeu();
}

function janelaConfirmacao(){
    //Véu + board com preços e confirmação
    const confirmacao = document.querySelectorAll(".Off");
    confirmacao.forEach(element => {
        element.classList.remove("Off");
    });
}

function cancelarVeu(){
    //cancelar vér
    const cancelar = document.querySelectorAll(".On");
    cancelar.forEach(element => {
        element.classList.add("Off");
    });
    //tirar selecionados
    const cancelarSelecionado = document.querySelectorAll(".selecionado");
    cancelarSelecionado.forEach(element => {
        element.classList.remove("selecionado");
    });
    //tirar botão verde
    const cancelarButton = document.querySelector(".fecharPedido");
    cancelarButton.classList.toggle("fecharPedido");
}