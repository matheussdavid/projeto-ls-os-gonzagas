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
      <button class="principal-camisa-botao adicionar-camisa" id="${camisa.id}">ADICIONAR</button>
    </div>
    <div class="camisa-item">
      <button class="principal-camisa-botao remover-camisa" id="${camisa.id}">REMOVER</button>
    </div> `

    const camisasDeck = document.querySelector('.principal-camisas');
    camisasDeck.insertAdjacentHTML('beforeend', camisasView);
    return camisa.modelo
  }

function adicionarNoCarrinho() {
  console.log(itensCarrinho)
  const idItem = this.id
  console.log(idItem)
  itensCarrinho.push(camisasArray[idItem - 1])
  fillTotal()
  console.log(itensCarrinho)

}

function removerDoCarrinho() {
  console.log(itensCarrinho)
  const idItem = this.id
  
  for (let i = 0; i < itensCarrinho.length; i++) {
    if (itensCarrinho[i].id == idItem) {
      itensCarrinho.splice(i, 1)
      break
    }
  }

  fillTotal()
  console.log(itensCarrinho)

  }

loadCamisas()

const botoesAdicionar = document.querySelectorAll('.adicionar-camisa')
const botoesRemover = document.querySelectorAll('.remover-camisa')

for (let i = 0; i < botoesAdicionar.length; i++) {
  botoesAdicionar[i].addEventListener('click', adicionarNoCarrinho)
}

for (let i = 0; i < botoesRemover.length; i++) {
  botoesRemover[i].addEventListener('click', removerDoCarrinho)
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

  const totalCarrinho = itensCarrinho.map(item => item.preco).reduce((acc, atual) => acc + atual, 0)

  console.log(totalCarrinho)

  return totalCarrinho
}









