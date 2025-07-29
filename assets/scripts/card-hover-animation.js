//Criando função para passar o mouse em para entrar em cada carta
function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

//criando função para quando o mouse sai da carta
function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = '';
}

//criando função para adicionar eventos do mouse
function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);