import './cardback.scss'
import img from '../../assets/img/back.jpg'

export default class cardBack {
  private root: HTMLElement | null = null
  public img = document.createElement("img");
  private callback: () => void
  constructor(root: HTMLElement | null = null, dataAtribute: string = "", callback: () => void = () => { },  classlist: string[] = []) {
    this.root = root;
    this.callback = callback;

    this.img.setAttribute('src', img);
    this.img.setAttribute('data', dataAtribute);
    this.img.classList.add(...classlist);
    this.img.classList.add('card-back');
    this.root?.append(this.img);
    this.img.addEventListener ("click", this.click.bind(this));
  }

  public remove() {
    this.img.remove();
    this.img.removeEventListener("click", this.click.bind(this));
  }

  public render() {
    if (this.root) {
      this.root.append(this.img);
      this.img.classList.remove("card-back__hidden");
    }
  }

  public hide() {
    this.img.classList.add("card-back__hidden");
  }

  public show() {
    this.img.classList.remove("card-back__hidden");
  }

  private click() {
    this.callback();
    this.hide();
  }
}