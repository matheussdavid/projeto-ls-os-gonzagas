import camisas from './model/camisas.js';

const camisasArray = camisas
const itensCarrinho = []

function loadCamisas() {
  for (const camisa of camisasArray) {
    createCamisasView(camisa)
  }
}

function createCamisasView(camisa) {
const camisasView = `
  <div class="principal-camisa-card">
    <div class="principal-camisa-img"><img src="${camisa.imagem}" alt=""></div>
    <div class="principal-camisa-nome camisa-item"><h1>${camisa.modelo}<h1></div>
    <div class="principal-camisa-preco"><p>Preço: R$${camisa.preco.toFixed(2)}</p></div>
    <div class="camisa-item">
      <button class="principal-camisa-botao" id=${camisa.id}>ADICIONAR</button>
    </div>  
    `

    const camisasDeck = document.querySelector('.principal-camisas');

    camisasDeck.insertAdjacentHTML('beforeend', camisasView);
    return camisa.modelo
  }


function adicionarNoCarrinho() {
  const idItem = this.id
  itensCarrinho.push(camisasArray[idItem - 1])
  fillTotal()
}

loadCamisas()
const botoes = document.querySelectorAll('.principal-camisa-botao')

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', adicionarNoCarrinho)
}


function fillTotal() {

  const totalView = `${somaCarrinho().toFixed(2)}`
  const total = document.querySelector('.total-carrinho')
  total.innerHTML = totalView

  const quantidadeItensView = `${itensCarrinho.length}`
  const quantidadeItens = document.querySelector('.quantidade-itens')
  quantidadeItens.innerHTML = quantidadeItensView


}

function somaCarrinho() {
  console.log('teste somaCarrinho')

  const totalCarrinho = itensCarrinho.map(item => item.preco).reduce((acc, atual) => acc + atual, 0)

  console.log(totalCarrinho)

  return totalCarrinho
}









