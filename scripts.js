function pedido(){
    /* let btn = document.querySelector(".button");
    btn.textContent = "Finalizar pedido"; */
    /* FUNCIONA!!!!!!!!!!!!!!!!!!!!!!!!!!! */
}



function selecaoPratos(item){
    
    const opcaoSelecionada = document.querySelector(".pratos .selecionado");
    //console.log(opcaoSelecionada)

    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    //console.log(item)
    verificarSelecao()
}

function selecaoBebidas(item){
    
    const opcaoSelecionada = document.querySelector(".bebidas .selecionado");
    //console.log(opcaoSelecionada)

    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    //console.log(item)
    verificarSelecao()
}

function selecaoSobremesas(item){
    
    const opcaoSelecionada = document.querySelector(".sobremesas .selecionado")
    //console.log(opcaoSelecionada)

    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
    //console.log(item)
    verificarSelecao()
}

function verificarSelecao(){
    const prato =  document.querySelector(".pratos .selecionado");
    const bebida =  document.querySelector(".bebidas .selecionado");
    const sobremesa =  document.querySelector(".sobremesas .selecionado");

    if (prato !== null && bebida !== null && sobremesa !== null ){
        const button = document.querySelector(".button")
        //console.log(button)
        button.classList.add("fecharPedido")
        button.innerHTML = "Fechar pedido";
        

    }
}