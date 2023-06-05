import { TaroCard } from "../../model/cards"
import Card from "../TaroCard/card";
import cardBack from "../CardBack/cardBack";
import shufle from "../../scripts/utils/shufle";

export default class ThreeCardGame {
  private rootElement: HTMLElement | null = null
  private backCards: cardBack[] = [] //карты с рубашкой
  private cards: TaroCard[] // Массив всех карт
  private results: number[] = []; //номера выпавших карт
  private displayCards: Card[] = []; // отрисованные выпавшие карты

  constructor(root: HTMLElement, cards: TaroCard[], shufle: (args: any) => any) {
    this.cards = cards
    this.rootElement = root;
  }

  public start() {
    this.results = [];
    this.displayCards.forEach((el) => el.remove());

    if (this.backCards.length == 0) {
      for (let i = 0; i < 78; i++) {
        this.backCards[i] = new cardBack(this.rootElement, `${i}`);
        this.backCards[i].img.onclick = () => this.selectCard(i);
      }
    } else {
      for (let i = 0; i < 78; i++) {
        this.backCards[i].render();
      }
    }
  }

  private selectCard(i: number) {
    const tarocards = shufle(this.cards);
    if (this.results.length < 2) {
      this.results.push(i)
    } else {
      this.results.push(i)
      for (let i = 0; i < 78; i++) {
        this.backCards[i].remove()
      }
      for (let i = 0; i < 3; i++) {
        this.displayCards[this.results[i]] = new Card(this.rootElement!, [], tarocards[i]);
      }
      
      this.results = [];
    }
  }
}