const cardArray = [
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let chosenCardsIds = []
let cardsWon = []

function createBoard(){
  cardArray.forEach((cardObj, i) => {
    const card = document.createElement('img')
    card.setAttribute('data-id', i)
    card.setAttribute('src', 'images/blank.png')
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  })
}

function flipCard(){
  let chosenCardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[chosenCardId].name)
  this.setAttribute('src', cardArray[chosenCardId].img)
  chosenCardsIds.push(chosenCardId)
  if (cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
  }
}

function checkMatch(){
  const cards = document.querySelectorAll('img')
  let cardOneId = chosenCardsIds[0]
  let cardTwoId = chosenCardsIds[1]
  if (cardOneId == cardTwoId){
    cards[cardOneId].setAttribute('src', 'images/blank.png')
    cards[cardTwoId].setAttribute('src', 'images/blank.png')
    // alert('You have clicked the same image!')
  } else if (cardsChosen[0] == cardsChosen[1]){
    // alert('You have found a match!')
    // cards[chosenCardsIds[0]].setAttribute('src', 'images/white.png')
    // cards[chosenCardsIds[1]].setAttribute('src', 'images/white.png')
    cards[cardOneId].style.opacity = '0'
    cards[cardTwoId].style.opacity = '0'
    cards[cardOneId].removeEventListener('click', flipCard)
    cards[cardTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[cardOneId].setAttribute('src', 'images/blank.png')
    cards[cardTwoId].setAttribute('src', 'images/blank.png')
  }
  resultDisplay.textContent = `You have found ${cardsWon.length} matche(s) so far`
  cardsChosen = []
  chosenCardsIds = []
  if (cardsWon.length === (cardArray.length / 2)){
    resultDisplay.textContent = 'You have found all matches! Congratulations!'
    gridDisplay.querySelectorAll('img').forEach(el => gridDisplay.removeChild(el))
    let win = document.createElement('h1')
    win.innerHTML = 'IT\'S A WIN!'
    win.className = 'name'
    win.style.fontSize = '150px'
    gridDisplay.appendChild(win)
  }
}

createBoard()

