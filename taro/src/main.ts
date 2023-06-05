import './styles/style.scss'
import shufle from './scripts/utils/shufle'
import {cards} from "./model/cards"
import Card from './components/card';
import ThreeCardGame from './components/ThreeCardsGame/index';
import cardBack from './components/CardBack/cardBack';

let div = document.getElementById('app') as HTMLElement ;
const cards2 = shufle(cards);

//const tst = new Card(document.getElementById("app")!,['card'],cards[0])
//const game = new ThreeCardGame(document.getElementById("app")!)
const back = [];

for(let i=0; i<78;i++) {
  back[i] =  new cardBack(document.getElementById("app"),"1");
}
