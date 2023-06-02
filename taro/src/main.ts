import './style.css'
import shufle from './scripts/utils/shufle'
import {cards} from "./model/cards"

let div = document.getElementById('app') as HTMLElement ;
const cards2 = shufle(cards);
for(let i = 0; i < 78; i++){
  div.insertAdjacentHTML('beforebegin', `<img src=${cards[i].image} alt="${cards[i].value}">`);
}