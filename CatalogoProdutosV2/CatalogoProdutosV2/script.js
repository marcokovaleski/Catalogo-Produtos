// Dados dos produtos.
var produtos = [
    {
        nome: 'Smartphone', // Nome do produto.
        categoria: 'eletronicos', // Categoria.
        imagem: 'eletronicos/Smartphone-Png-1.png', // Imagem. 
        descricao: 'Um smartphone de última geração.', // Descrição.
        preco: 1500.00 // Preços.
    },
    {
        nome: 'Camiseta',
        categoria: 'vestuario',
        imagem: 'vestuario/camiseta.png',
        descricao: 'Uma camiseta confortável e estilosa.',
        preco: 29.90
    },
    {
        nome: 'Refrigerante',
        categoria: 'comidas',
        imagem: 'comidas/refrigerante.png',
        descricao: 'Sabor e refrescância.',
        preco: 4.99
    },
    {
        nome: 'Tênis',
        categoria: 'vestuario',
        imagem: 'vestuario/tenis.png',
        descricao: 'Um par de tênis esportivos.',
        preco: 199.90
    },
    {
        nome: 'Bolsa',
        categoria: 'vestuario',
        imagem: 'vestuario/bolsa.png',
        descricao: 'Uma bolsa elegante para o dia a dia.',
        preco: 99.99
    },
    {
        nome: 'Relógio',
        categoria: 'eletronicos',
        imagem: 'eletronicos/relogio.png',
        descricao: 'Um relógio sofisticado e moderno.',
        preco: 299.00
    },
    {
        nome: 'Fone de ouvido',
        categoria: 'eletronicos',
        imagem: 'eletronicos/fone.png',
        descricao: 'Um fone de ouvido com cancelamento de ruído.',
        preco: 79.90
    },
    {
        nome: 'Calça jeans',
        categoria: 'vestuario',
        imagem: 'vestuario/calca.png',
        descricao: 'Uma calça jeans confortável e estilosa.',
        preco: 89.90
    },
    {
        nome: 'Câmera',
        categoria: 'eletronicos',
        imagem: 'eletronicos/camera.png',
        descricao: 'Uma câmera profissional para fotografia.',
        preco: 799.00
    },
    {
        nome: 'Perfume',
        categoria: 'vestuario',
        imagem: 'vestuario/perfume.png',
        descricao: 'Um perfume marcante e duradouro.',
        preco: 129.90
    },
    {
        nome: 'Tablet',
        categoria: 'eletronicos',
        imagem: 'eletronicos/tablet.png',
        descricao: 'Um tablet compacto e versátil.',
        preco: 499.00
    },
    {
        nome: 'Fita de LED',
        categoria: 'eletronicos',
        imagem: 'eletronicos/fita-led.png',
        descricao: 'Uma fita de LED para iluminação personalizada.',
        preco: 19.90
    },
    {
        nome: 'Caixa de som Bluetooth',
        categoria: 'eletronicos',
        imagem: 'eletronicos/caixa-som.png',
        descricao: 'Uma caixa de som portátil com conexão Bluetooth.',
        preco: 149.90
    },
    {
        nome: 'Monitor',
        categoria: 'eletronicos',
        imagem: 'eletronicos/monitor.png',
        descricao: 'Um monitor de alta definição para computadores.',
        preco: 499.00
    },
    {
        nome: 'Console de videogame',
        categoria: 'eletronicos',
        imagem: 'eletronicos/console.png',
        descricao: 'Um console de videogame para entretenimento.',
        preco: 1999.00
    },
    {
        nome: 'Vestido',
        categoria: 'vestuario',
        imagem: 'vestuario/vestido.png',
        descricao: 'Um vestido elegante para ocasiões especiais.',
        preco: 149.90
    },
    {
        nome: 'Sapato',
        categoria: 'vestuario',
        imagem: 'vestuario/sapato.png',
        descricao: 'Um par de sapatos confortáveis e estilosos.',
        preco: 79.90
    },
    {
        nome: 'Jaqueta',
        categoria: 'vestuario',
        imagem: 'vestuario/jaqueta.png',
        descricao: 'Uma jaqueta resistente e moderna.',
        preco: 149.90
    },
    {
        nome: 'Saia',
        categoria: 'vestuario',
        imagem: 'vestuario/saia.png',
        descricao: 'Uma saia leve e versátil para o verão.',
        preco: 49.90
    },
    {
        nome: 'Moletom',
        categoria: 'vestuario',
        imagem: 'vestuario/moletom.png',
        descricao: 'Uma blusa quente e confortável para o inverno.',
        preco: 99.90
    },
    {
        nome: 'Pizza',
        categoria: 'comidas',
        imagem: 'comidas/pizza.png',
        descricao: 'Uma deliciosa pizza para saborear.',
        preco: 29.90
    },
    {
        nome: 'Hambúrguer',
        categoria: 'comidas',
        imagem: 'comidas/hamburguer.png',
        descricao: 'Um suculento hambúrguer para matar a fome.',
        preco: 15.90
    },
    {
        nome: 'Batata frita',
        categoria: 'comidas',
        imagem: 'comidas/batata-frita.png',
        descricao: 'Batatas fritas crocantes e saborosas.',
        preco: 9.90
    },
    {
        nome: 'Sorvete',
        categoria: 'comidas',
        imagem: 'comidas/sorvete.png',
        descricao: 'Um sorvete refrescante para os dias quentes.',
        preco: 6.90
    },
    {
        nome: 'Chocolate',
        categoria: 'comidas',
        imagem: 'comidas/chocolate.png',
        descricao: 'Um delicioso chocolate para adoçar o paladar.',
        preco: 4.99
    },
    {
        nome: 'Salada',
        categoria: 'comidas',
        imagem: 'comidas/salada.png',
        descricao: 'Uma salada fresca e saudável.',
        preco: 12.90
    },
    {
        nome: 'Sanduíche',
        categoria: 'comidas',
        imagem: 'comidas/sanduiche.png',
        descricao: 'Um sanduíche recheado e saboroso.',
        preco: 8.90
    },
    {
        nome: 'Bolo',
        categoria: 'comidas',
        imagem: 'comidas/bolo.png',
        descricao: 'Um bolo macio e irresistível.',
        preco: 19.90
    },
    {
        nome: 'Café',
        categoria: 'comidas',
        imagem: 'comidas/cafe.png',
        descricao: 'Uma xícara de café aromático e energizante.',
        preco: 3.50
    },
    {
        nome: 'Sushi',
        categoria: 'comidas',
        imagem: 'comidas/sushi.png',
        descricao: 'Uma seleção de sushis frescos e saborosos.',
        preco: 39.90
    }
];

// Função para exibir os produtos no catálogo.
function Renderizar(filtro, nomeFiltro, precoFiltro) {
    const listaDeProdutos = document.getElementById('lista-produtos'); // Obtém a referência para o elemento que irá conter a lista de produtos.
    listaDeProdutos.innerHTML = ''; // Limpa o conteúdo atual da lista de produtos.

    // Filtra os produtos com base nos filtros selecionados.
    const filtrarProdutos = produtos.filter(produtos =>
        (filtro === 'todos' || produtos.categoria === filtro) && // Verifica a categoria.
        (nomeFiltro === '' || produtos.nome.toLowerCase().includes(nomeFiltro.toLowerCase())) // Verifica o nome.
    );

    // Ordena os produtos com base no filtro de preço selecionado.
    if (precoFiltro === 'maiorVal') {
        filtrarProdutos.sort((a, b) => b.preco - a.preco); // Organiza produtos do maior para o menor.
    } else if (precoFiltro === 'menorVal') {
        filtrarProdutos.sort((a, b) => a.preco - b.preco); // Organiza produtos do menor para o maior.
    }

    // Cria os elementos HTML para cada produto filtrado.
    filtrarProdutos.forEach(produtos => {
        const item = document.createElement('div');
        item.classList.add('produtos-item');
        item.addEventListener('click', maximizar)

        const imagem = document.createElement('img');
        imagem.src = produtos.imagem;
        item.appendChild(imagem); // Adiciona a imagem de cada produto.

        const nome = document.createElement('h3');
        nome.textContent = produtos.nome;
        item.appendChild(nome); // Adiciona o nome de cada produto.

        const preco = document.createElement('p');
        preco.textContent = 'Preço: R$' + produtos.preco.toFixed(2);
        item.appendChild(preco); // Adiciona o preço de cada produto.

        const descricao = document.createElement('p');
        descricao.textContent = produtos.descricao;
        item.appendChild(descricao); // Adiciona a descrição de cada produto.
        listaDeProdutos.appendChild(item); // Adiciona o item na lista de produtos.
    });
}

var produtoMaximizado = null; // Variável para rastrear o produto maximizado atualmente.

// Função para maximizar o produto e alternar entre maximizado e minimizado.
function maximizar(event) {
    const item = event.currentTarget; // Obtém o elemento clicado.

    if (produtoMaximizado && produtoMaximizado !== item) {
        produtoMaximizado.classList.remove('maximizado');
    }
    // Verifica se há um produto maximizado anteriormente e se é diferente do produto atual.

    if (item !== produtoMaximizado) {
        item.classList.add('maximizado'); // Adiciona a classe 'maximizado' ao produto atual.
        produtoMaximizado = item; // Define o produto atual como o produto maximizado.
    } else {
        item.classList.remove('maximizado'); // Remove a classe 'maximizado' do produto atual.
        produtoMaximizado = null; // Define 'null' para indicar que nenhum produto está maximizado.
    }
}

// EventListener para verificar a categoria selecionada.
const categoriaFiltro = document.getElementById('categoria-filtro');
categoriaFiltro.addEventListener('change', function () {
    const categoriaSelecionada = categoriaFiltro.value;
    const nomeFiltro = document.getElementById('nome-filtro').value;
    const precoFiltro = document.getElementById('preco-filtro').value;
    Renderizar(categoriaSelecionada, nomeFiltro, precoFiltro); // Chama a função Renderizar com os filtros selecionados.
});

// EventListener para o filtro por nome.
const pesquisaInput = document.getElementById('nome-filtro');
pesquisaInput.addEventListener('input', function () {
    const categoriaSelecionada = categoriaFiltro.value;
    const nomeFiltro = pesquisaInput.value;
    const precoFiltro = document.getElementById('preco-filtro').value;
    Renderizar(categoriaSelecionada, nomeFiltro, precoFiltro); // Chama a função Renderizar com os filtros selecionados.
});

// EventListener para o filtro de preço.
const precoFiltro = document.getElementById('preco-filtro');
precoFiltro.addEventListener('change', function () {
    const categoriaSelecionada = categoriaFiltro.value;
    const nomeFiltro = document.getElementById('nome-filtro').value;
    const filtroPrecoValor = precoFiltro.value;
    Renderizar(categoriaSelecionada, nomeFiltro, filtroPrecoValor); // Chama a função Renderizar com os filtros selecionados.
});

// Renderiza os produtos iniciais.
Renderizar('todos', '', 'nenhum'); // Chama a função Renderizar com filtros iniciais.