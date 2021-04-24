import {$,createElement,changeHP,playerWin,renderHP,createReloadButton,enemyAttack, generateLogs}  from '../functions';
import heroes, { HIT, ATTACK,logs } from '../store';

class Player {
    constructor(props) {
       const {id, name, hp, img, weapon , attack, player} = props;
        this.id= id;
        this.name= name;
        this.hp= hp;
        this.img= img;
        this.weapon= weapon;
        this.attack= attack;
        this.player = player;
        }
   
    changeHP(val){
    this.hp=this.hp - val;
    if (this.hp <=0 ) {this.hp=0;return 0;} else{return this.hp;}
    }
    
   elHP(){
  let life = $(`.player${this.player} .life`);
  return life;
}
    
    renderHP(){
         this.elHP().style.width = this.hp + '%';
    }
    
    createPlayer(){
        try{
    const $playerDiv = createElement('div',`player${this.player}`);
    const $progressbar = createElement('div',`progressbar`);
    
    const $life = createElement('div',`life`);
    $life.style.width=`${this.hp}%`;
    
    const $name = createElement('div',`name`);
    $name.innerHTML = `${this.name}`;
    
    const $character = createElement('div',`character`);
   
    const $img = createElement('img');
    $img.src=this.img;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $playerDiv.appendChild($progressbar);
    $playerDiv.appendChild($character);
    return $playerDiv;
}
    catch(err){
        console.log("Err create player ",err);
         }
        
    }
        
    }

class Game {
    constructor(props){
    this.players = props.players; 
    }
    
    start(){
        
      
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
          this.players[0].changeHP(enemy.value);
          this.players[0].renderHP();
          generateLogs('hit', this.players[0], this.players[1]);
          generateLogs('defence', this.players[0], this.players[1]);
          
      }
    
        if (enemy.defence !== player.hit){
          this.players[1].changeHP(enemy.value);
          this.players[1].renderHP();
          generateLogs('hit', this.players[1], this.players[0]);
          generateLogs('defence', this.players[1], this.players[0]);
          
      }
    
  
if (this.players[0].hp == 0 || this.players[1].hp == 0 ){
     $randomButton.disabled = true;  
  }
    
if  (this.players[0].hp === 0 && this.players[0].hp< this.players[1].hp){
      arenasAppend(playerWin(this.players[1].name));
      arenasAppend(createReloadButton());
      generateLogs('end', this.players[1], this.players[0]);
 
  }
    else if (this.players[1].hp === 0 && this.players[1].hp< this.players[0].hp){
      arenasAppend(playerWin(this.players[0].name));
      arenasAppend(createReloadButton());
      generateLogs('end', this.players[0], this.players[1]);
    }
    
    else if (this.players[0].hp === 0 &&  this.players[1].hp === 0){
      arenasAppend(playerWin());
      arenasAppend(createReloadButton());
      generateLogs('draw', this.players[0], this.players[1]);
    }
     
});


generateLogs('start', this.players[0], this.players[1]);
 console.log(this.players);   
const $player1 = this.players[0].createPlayer();
const $player2 = this.players[1].createPlayer();

arenasAppend($player1);
arenasAppend($player2);       
     
    }
    
}

export {
Player,
Game,
}