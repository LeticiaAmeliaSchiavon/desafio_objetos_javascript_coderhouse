class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Para calcular o valor total do produto
    calcularValorTotal() {
        return this.preco * this.quantidade;
    }

    // Para exibir informações do produto
    exibirInformacoes() {
        console.log(`Produto: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}, Valor Total: R$${this.calcularValorTotal()}`);
    }
}

// Para adicionar um produto ao carrinho
function adicionarProdutoAoCarrinho(nome, preco, quantidade) {
    let produto = new Produto(nome, preco, quantidade);
    produto.exibirInformacoes();
}

adicionarProdutoAoCarrinho('Notebook', 2500, 2);
