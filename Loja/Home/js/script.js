// criar a variável modalKey sera global
let modalKey = 0;

// variavel para controlar a quantidade inicial de produtos na modal
let quantProdutos = 1;

let cart = []; // carrinho

// funcoes auxiliares ou uteis
const seleciona = (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const formatoReal = (valor) => {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};

const formatoMonetario = (valor) => {
  if (valor) {
    return valor.toFixed(2);
  }
};

const abrirModal = () => {
  seleciona(".produtosWindowArea").style.opacity = 0; // transparente
  seleciona(".produtosWindowArea").style.display = "flex";
  setTimeout(() => (seleciona(".produtosWindowArea").style.opacity = 1), 150);
};

const fecharModal = () => {
  seleciona(".produtosWindowArea").style.opacity = 0; // transparente
  setTimeout(() => (seleciona(".produtosWindowArea").style.display = "none"), 500);
};

const botoesFechar = () => {
  // BOTOES FECHAR MODAL
  selecionaTodos(
    ".produtosInfo--cancelButton, .produtosInfo--cancelMobileButton"
  ).forEach((item) => item.addEventListener("click", fecharModal));
};

const preencheDadosDasprodutoss = (produtoItem, item, index) => {
  // setar um atributo para identificar qual elemento foi clicado
  produtoItem.setAttribute("data-key", index);
  produtoItem.querySelector(".produtos-item--img img").src = item.img;
  produtoItem.querySelector(".produtos-item--price").innerHTML = formatoReal(
    item.price[2]
  );
  produtoItem.querySelector(".produtos-item--name").innerHTML = item.name;
  produtoItem.querySelector(".produtos-item--desc").innerHTML = item.description;
};

const preencheDadosModal = (item) => {
  seleciona(".produtosBig img").src = item.img;
  seleciona(".produtosInfo h1").innerHTML = item.name;
  seleciona(".produtosInfo--desc").innerHTML = item.description;
  seleciona(".produtosInfo--actualPrice").innerHTML = formatoReal(item.price[2]);
};

const pegarKey = (e) => {
  // .closest retorna o elemento mais proximo que tem a class que passamos
  // do .produtos-item ele vai pegar o valor do atributo data-key
  let key = e.target.closest(".produtos-item").getAttribute("data-key");
  console.log("produtos clicada " + key);
  console.log(adaptaJson[key]);

  // garantir que a quantidade inicial de produtoss é 1
  quantProdutos = 1;

  // Para manter a informação de qual produto foi clicada
  modalKey = key;

  return key;
};

const preencherTamanhos = (key) => {
  // tirar a selecao de tamanho atual e selecionar o tamanho grande
  seleciona(".produtosInfo--size").classList.remove("selected");

  // selecionar todos os tamanhos
  selecionaTodos(".produtosInfo--size").forEach((size, sizeIndex) => {
    // selecionar o tamanho grande
    sizeIndex == 2 ? size.classList.add("selected") : "";
    size.querySelector("span").innerHTML = adaptaJson[key].sizes[sizeIndex];
  });
};

const escolherTamanhoPreco = (key) => {
  // Ações nos botões de tamanho
  // selecionar todos os tamanhos
  selecionaTodos(".produtosInfo--size").forEach((size, sizeIndex) => {
    size.addEventListener("click", (e) => {
      // clicou em um item, tirar a selecao dos outros e marca o q vc clicou
      // tirar a selecao de tamanho atual e selecionar o tamanho grande
      seleciona(".produtosInfo--size").classList.remove("selected");
      // marcar o que vc clicou, ao inves de usar e.target use size, pois ele é nosso item dentro do loop
      size.classList.add("selected");

      // mudar o preço de acordo com o tamanho
      seleciona(".produtosInfo--actualPrice").innerHTML = formatoReal(
        adaptaJson[key].price[sizeIndex]
      );
    });
  });
};

const mudarQuantidade = () => {
  // Ações nos botões + e - da janela modal
  seleciona(".produtosInfo--qtmais").addEventListener("click", () => {
    quantProdutos++;
    seleciona(".produtosInfo--qt").innerHTML = quantProdutos;
  });

  seleciona(".produtosInfo--qtmenos").addEventListener("click", () => {
    if (quantProdutos > 1) {
      quantProdutos--;
      seleciona(".produtosInfo--qt").innerHTML = quantProdutos;
    }
  });
};

const adicionarNoCarrinho = () => {
  seleciona(".produtosInfo--addButton").addEventListener("click", () => {
    console.log("Adicionar no carrinho");

    // pegar dados da janela modal atual
    // qual produtos? pegue o modalKey para usar adaptaJson[modalKey]
    console.log("produtos " + modalKey);
    // tamanho
    let size = seleciona(".produtosInfo--size").getAttribute("data-key");
    console.log("Tamanho " + size);
    // quantidade
    console.log("Quant. " + quantProdutos);
    // preco
    let price = seleciona(".produtosInfo--actualPrice").innerHTML.replace(
      "R$&nbsp;",
      ""
    );

    // crie um identificador que junte id e tamanho
    // concatene as duas informacoes separadas por um símbolo, vc escolhe
    let identificador = adaptaJson[modalKey].id + "t" + size;

    // antes de adicionar verifique se ja tem aquele codigo e tamanho
    // para adicionarmos a quantidade
    let key = cart.findIndex((item) => item.identificador == identificador);
    console.log(key);

    if (key > -1) {
      // se encontrar aumente a quantidade
      cart[key].qt += quantProdutos;
    } else {
      // adicionar objeto produtos no carrinho
      let produto = {
        identificador,
        id: adaptaJson[modalKey].id,
        size, // size: size
        qt: quantProdutos,
        price: parseFloat(price), // price: price
      };
      cart.push(produto);
      console.log(produto);
      console.log("Sub total R$ " + (produto.qt * produto.price).toFixed(2));
    }

    fecharModal();
    abrirCarrinho();
    atualizarCarrinho();
  });
};

const abrirCarrinho = () => {
  console.log("Qtd de itens no carrinho " + cart.length);
  if (cart.length > 0) {
    // mostrar o carrinho
    seleciona("aside").classList.add("show");
    seleciona("header").style.display = "flex"; // mostrar barra superior
  }

  // exibir aside do carrinho no modo mobile
  seleciona(".menu-openner").addEventListener("click", () => {
    if (cart.length > 0) {
      seleciona("aside").classList.add("show");
      seleciona("aside").style.left = "0";
    }
  });
};

const fecharCarrinho = () => {
  // fechar o carrinho com o botão X no modo mobile
  seleciona(".menu-closer").addEventListener("click", () => {
    seleciona("aside").style.left = "100vw"; // usando 100vw ele ficara fora da tela
    seleciona("header").style.display = "flex";
  });
};

const atualizarCarrinho = () => {
  // exibir número de itens no carrinho
  seleciona(".menu-openner span").innerHTML = cart.length;

  // mostrar ou não o carrinho
  if (cart.length > 0) {
    // mostrar o carrinho
    seleciona("aside").classList.add("show");

    // zerar meu .cart para nao fazer insercoes duplicadas
    seleciona(".cart").innerHTML = "";

    // crie as variaveis antes do for
    let subtotal = 0;
    let desconto = 0;
    let total = 0;

    // para preencher os itens do carrinho, calcular subtotal
    for (let i in cart) {
      // use o find para pegar o item por id
      let produtoItem = adaptaJson.find((item) => item.id == cart[i].id);
      console.log(produtoItem);

      // em cada item pegar o subtotal
      subtotal += cart[i].price * cart[i].qt;
      console.log(cart[i].price)

      // fazer o clone, exibir na telas e depois preencher as informacoes
      let cartItem = seleciona(".models .cart--item").cloneNode(true);
      seleciona(".cart").append(cartItem);

      let produtosSizeName = cart[i].size;

      let produtosName = `${produtoItem.name} (${produtosSizeName})`;

      // preencher as informacoes
      cartItem.querySelector("img").src = produtoItem.img;
      cartItem.querySelector(".cart--item-nome").innerHTML = produtosName;
      cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qt;

      // selecionar botoes + e -
      cartItem
        .querySelector(".cart--item-qtmais")
        .addEventListener("click", () => {
          console.log("Clicou no botão mais");
          // adicionar apenas a quantidade que esta neste contexto
          cart[i].qt++;
          // atualizar a quantidade
          atualizarCarrinho();
        });

      cartItem
        .querySelector(".cart--item-qtmenos")
        .addEventListener("click", () => {
          console.log("Clicou no botão menos");
          if (cart[i].qt > 1) {
            // subtrair apenas a quantidade que esta neste contexto
            cart[i].qt--;
          } else {
            // remover se for zero
            cart.splice(i, 1);
          }

          cart.length < 1 ? (seleciona("header").style.display = "flex") : "";

          // atualizar a quantidade
          atualizarCarrinho();
        });

      seleciona(".cart").append(cartItem);
    } // fim do for

    // fora do for
    // calcule desconto 10% e total
    //desconto = subtotal * 0.1
    desconto = subtotal * 0;
    total = subtotal - desconto;

    // exibir na tela os resultados
    // selecionar o ultimo span do elemento
    seleciona(".subtotal span:last-child").innerHTML = formatoReal(subtotal);
    seleciona(".desconto span:last-child").innerHTML = formatoReal(desconto);
    seleciona(".total span:last-child").innerHTML = formatoReal(total);
  } else {
    // ocultar o carrinho
    seleciona("aside").classList.remove("show");
    seleciona("aside").style.left = "100vw";
  }
};

const finalizarCompra = () => {
  seleciona(".cart--finalizar").addEventListener("click", () => {
    console.log("Finalizar compra");
    seleciona("aside").classList.remove("show");
    seleciona("aside").style.left = "100vw";
    seleciona("header").style.display = "flex";
  });
};

// MAPEAR adaptaJson para gerar lista de produtoss
adaptaJson.map((item, index) => {
  //console.log(item)
  let produtoItem = document
    .querySelector(".models .produtos-item")
    .cloneNode(true);
  //console.log(produtoItem)
  //document.querySelector('.produtos-area').append(produtoItem)
  seleciona(".produtos-area").append(produtoItem);

  // preencher os dados de cada produtos
  preencheDadosDasprodutoss(produtoItem, item, index);

  // produtos clicada
  produtoItem.querySelector(".produtos-item a").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicou na produtos");

    let chave = pegarKey(e);

    // abrir janela modal
    abrirModal();

    // preenchimento dos dados
    preencheDadosModal(item);

    // pegar tamanho selecionado
    preencherTamanhos(chave);

    // definir quantidade inicial como 1
    seleciona(".produtosInfo--qt").innerHTML = quantProdutos;

    // selecionar o tamanho e preco com o clique no botao
    escolherTamanhoPreco(chave);
  
  });

  botoesFechar();
}); // fim do MAPEAR adaptaJson para gerar lista de produtoss


// mudar quantidade com os botoes + e -
mudarQuantidade();



adicionarNoCarrinho();
atualizarCarrinho();
fecharCarrinho();
finalizarCompra();

