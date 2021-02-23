if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'principal',
    time: 3000,
  });
  new SimpleSlide({
    slide: 'realizar-evento',
    time: 2500,
  });
}
const items = [
  {
    id: 0,
    nome: 'Açai Puro sem açucar',
    quantidade: 0,
    img: 'imagens/acaiPuroSemAcucar.png',
  },
  {
    id: 1,
    nome: 'Açaí Puro Batido com Demerara',
    quantidade: 0,
    img: 'imagens/acaiBatidoComDemerara.png',
  },
  {
    id: 2,
    nome: 'Açaí Puro Batido com Mel',
    quantidade: 0,
    img: 'imagens/acaiBatidoComMel.png',
  },
  {
    id: 3,
    nome: 'Açai Puro Batido com Açucar Mascavo',
    quantidade: 0,
    img: 'imagens/acaimascavo.png',
  },
  {
    id: 4,
    nome: '1/2 Açaí 1/2 Cupuaçu',
    quantidade: 0,
    img: 'imagens/acaiEcupuacu.png',
  },
  {
    id: 5,
    nome: 'Cupuaçu',
    quantidade: 0,
    img: 'imagens/cupuacu.png',
  },
];

inicializarLoja = () => {
  let containerProdutos = document.querySelector('.cardapio');
  items.forEach((item) => {
    if (item.nome !== 'Açaí Puro Batido com Mel') {
      containerProdutos.innerHTML += `
            <div class="item">
              <p>${item.nome}</p>
              <img src="${item.img}">
              <input type="radio" id="menor" name="produto" value="12.50">
              <label for="menor">300ml R$ 12,50</label>
              <br>
              <input type="radio" id="maior" name="produto" value="12.50">
              <label for="maior">500ml R$ 18,00</label>
              <a key="${item.id}" href="#" class="button">Comprar</a>
            </div>
          `;
    } else {
      containerProdutos.innerHTML += `
      <div class="item">
        <p>${item.nome}</p>
        <img src="${item.img}">
        <input type="radio" id="menor" name="produto" value="12.50">
        <label for="menor">300ml R$ 14,00</label>
        <br>
        <input type="radio" id="maior" name="produto" value="12.50">
        <label for="maior">500ml R$ 19,00</label>
        <a key="${item.id}" href="#" class="button">Comprar</a>
      </div>
    `;
    }
  });
};
inicializarLoja();
let links = document.querySelectorAll('.item a');
atualizarCarrinho = () => {
  let containerCarrinho = document.getElementById('carrinho');
  containerCarrinho.innerHTML = '';
  items.forEach((item) => {
    if (item.quantidade > 0) {
      containerCarrinho.innerHTML += `
          <p>${item.nome} | quantidade: ${item.quantidade}</p>
          <hr>
        `;
    }
  });
};
links.forEach((link) => {
  link.addEventListener('click', () => {
    // faz a identificação de qual produto clicou, a partir da key
    let key = link.getAttribute('key');
    // feito o reconhecimento acessa a propriedade quantidade e incrementa ela conforme clica
    items[key].quantidade++;
    atualizarCarrinho();
  });
});
