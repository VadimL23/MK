import './style.css';
import heroes, { HIT, ATTACK,logs } from './store';
import { Player, Game } from "./classes";

let game = new Game({players:[new Player({...heroes[Math.floor(Math.random()*5)],player:1}),new Player({...heroes[Math.floor(Math.random()*5)],player:2})]}); // Используем агрегацию. В дальнейшем передадим любого героя.

game.start();
