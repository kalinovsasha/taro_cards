import ThreeCardGame from './components/ThreeCardsGame/index'
import { cards } from './model/cards';
import shufle from './scripts/utils/shufle';
import './styles/style.scss'



const game = new ThreeCardGame(document.getElementById('gameField')!, cards, shufle);
const gamebtn = document.getElementById('threeCards')!;
gamebtn.onclick = game.start.bind(game);