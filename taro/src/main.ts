import './styles/style.scss'
import shufle from './scripts/utils/shufle'
import {cards} from "./model/cards"
import Card from './components/card';
import ThreeCardGame from './components/ThreeCardsGame/index';

let div = document.getElementById('app') as HTMLElement ;
const cards2 = shufle(cards);
for(let i = 0; i < 78; i++){
 //div.insertAdjacentHTML('beforebegin', `<img src=${cards[i].image} alt="${cards[i].value}">`);
}

//const tst = new Card(document.getElementById("app")!,['card'],cards[0])
const game = new ThreeCardGame(document.getElementById("app")!)