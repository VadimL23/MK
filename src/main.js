import './style.css';
import {$,createElement,changeHP,playerWin,elHP,renderHP,createReloadButton,enemyAttack, generateLogs, createPlayer}  from './functions';
import heroes, { HIT, ATTACK,logs } from './store';

const player1 = heroes[Math.floor(Math.random()*5)];
player1.player = 1;
player1.changeHP = changeHP;
player1.renderHP = renderHP;

const player2 = heroes[Math.floor(Math.random()*5)];
player2.player = 2;
player2.changeHP = changeHP;
player2.renderHP = renderHP;

const players = [heroes[Math.floor(Math.random()*5)],heroes[Math.floor(Math.random()*5)]];

players.forEach((pl,index)=>{
    pl.player=index+1;
    pl.changeHP = changeHP;
    pl.renderHP = renderHP;
});


const $control = $('.control');
const $arenas  = $('.arenas');
const $randomButton = $('#button');
const arenasAppend = (child)=>{
   return $arenas.appendChild(child);
}


$randomButton.addEventListener('click',()=>{
       window.location.reload();
});


let formObj = {};

$control.addEventListener("submit",(e)=>{
    e.preventDefault();
  
    for (let value of e.target){
       if (value.checked){
          formObj[value.name] = value.value;
       }
    }
    
     
      const enemy = enemyAttack();
      const player = enemyAttack();
      
      if (player.defence !== enemy.hit){
          players[0].changeHP(enemy.value);
          players[0].renderHP();
          generateLogs('hit', players[0], players[1]);
          generateLogs('defence', players[0], players[1]);
          
      }
    
        if (enemy.defence !== player.hit){
          players[1].changeHP(enemy.value);
          players[1].renderHP();
          generateLogs('hit', players[1], players[0]);
          generateLogs('defence', players[1], players[0]);
          
      }
    
  
if (players[0].hp == 0 || players[1].hp == 0 ){
     $randomButton.disabled = true;  
  }
    
if  (players[0].hp === 0 && players[0].hp< players[1].hp){
      arenasAppend(playerWin(players[1].name));
      arenasAppend(createReloadButton());
      generateLogs('end', players[1], players[0]);
 
  }
    else if (players[1].hp === 0 && players[1].hp< players[0].hp){
      arenasAppend(playerWin(players[0].name));
      arenasAppend(createReloadButton());
      generateLogs('end', players[0], players[1]);
    }
    
    else if (players[0].hp === 0 &&  players[1].hp === 0){
      arenasAppend(playerWin());
      arenasAppend(createReloadButton());
      generateLogs('draw', players[0], players[1]);
    }
     
});


generateLogs('start', players[0], players[1]);
    
const $player1 = createPlayer('player1',players[0]);
const $player2 = createPlayer('player2',players[1]);

arenasAppend($player1);
arenasAppend($player2);
