import { TaroCard } from '../../model/cards';
import './card.scss';

export default class Card {
  private element: HTMLElement | null = null
  private rootElement: HTMLElement | null = null
  
  constructor(rootElement: HTMLElement, styles: string[] = [], card: TaroCard) {
    this.rootElement = rootElement;

    this.element = document.createElement("div");
    this.element.classList.add('taro-card');
    this.element.classList.add(...styles);

    const title = document.createElement("h3");
    title.classList.add('taro-card__title');
    title.innerText = card.value;
    this.element.append(title)

    const container = document.createElement("div");
    container.classList.add('taro-card__container');
    this.element.append(container)


    const img = document.createElement("img");
    img.classList.add('taro-card__img');
    img.setAttribute('src', card.image);
    container.append(img)

    const descr = document.createElement("p");
    descr.classList.add('taro-card__desc');
    descr.innerText = card.descr;
    descr.innerText += "\n\n" + card.direct;
    container.append(descr)

    rootElement.append(this.element);
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }

  }

  render() {
    if (this.element && this.rootElement) {
      this.rootElement.append(this.element);
    }

  }
}