function pedido(){
    /* let btn = document.querySelector(".button");
    btn.textContent = "Finalizar pedido"; */
    /* FUNCIONA!!!!!!!!!!!!!!!!!!!!!!!!!!! */
}



function selecaoPratos(item){
    
    const opcaoSelecionada = document.querySelector(".pratos .selecionado")
    //console.log(opcaoSelecionada)

    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado")
    }
    item.classList.add("selecionado");
    //console.log(item)
}

function selecaoBebidas(item){
    
    const opcaoSelecionada = document.querySelector(".bebidas .selecionado")
    //console.log(opcaoSelecionada)

    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado")
    }
    item.classList.add("selecionado");
    //console.log(item)
}

function selecaoSobremesas(item){
    
    const opcaoSelecionada = document.querySelector(".sobremesas .selecionado")
    //console.log(opcaoSelecionada)

    if (opcaoSelecionada !== null){
        opcaoSelecionada.classList.remove("selecionado")
    }
    item.classList.add("selecionado");
    //console.log(item)
}