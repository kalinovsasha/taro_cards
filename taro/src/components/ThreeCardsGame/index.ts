import {cards} from "../../model/cards"
import shufle from "../../scripts/utils/shufle";
import Card from "../card";
export default class ThreeCardGame {
  rootElement: HTMLElement | null = null
  constructor(root:HTMLElement) {
    this.rootElement = root;
    const showCards = document.createElement("button");
    showCards.innerText = "Карты";
    showCards.onclick = ()=> {
      const cardss = shufle(cards);
      const card = new Card(this.rootElement!,['card'],cardss[0])
    }

    this.rootElement?.append(showCards);
  }
}