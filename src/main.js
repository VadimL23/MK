import './style.css';
import {$,createElement,changeHP,playerWin,elHP,renderHP,createReloadButton}  from './functions'
import heroes  from './store'


const player1 = heroes[Math.floor(Math.random()*5)];
player1.player = 1;

const player2 = heroes[Math.floor(Math.random()*5)];
player2.player = 2;




const $arenas  = $('.arenas');
const arenasAppend = (child)=>{
   return $arenas.appendChild(child);
}

const $randomButton = $('#button');

const createPlayer = (name,heroObj)=>{
try{
    const $playerDiv = createElement('div',`${name}`);

       
    const $progressbar = createElement('div',`progressbar`);
 
    
    const $life = createElement('div',`life`);
    $life.style.width=`${heroObj.hp}%`;
    
    const $name = createElement('div',`name`);
    $name.innerHTML = `${heroObj.name}`;
    
    const $character = createElement('div',`character`);
   
    const $img = createElement('img');
    $img.src=heroObj.img;
    
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


$randomButton.addEventListener('click',()=>{
   
  changeHP.call(player1,Math.ceil(Math.random()*20));
  changeHP.call(player2,Math.ceil(Math.random()*20));
  renderHP.call(player1,$player1);
  renderHP.call(player2,$player2);
 
    
if (player1.hp == 0 || player2.hp == 0 ){
     $randomButton.disabled = true;  
  }
    
if  (player1.hp === 0 && player1.hp< player2.hp){
      arenasAppend(playerWin(player2.name));
      arenasAppend(createReloadButton());
 
  }
    else if ( player2.hp === 0 && player2.hp< player1.hp){
      arenasAppend(playerWin(player1.name));
      arenasAppend(createReloadButton());
    }
    
    else if (player1.hp === 0 &&  player2.hp === 0){
      arenasAppend(playerWin());
      arenasAppend(createReloadButton());
    }

    
});
    
const $player1 = createPlayer('player1',player1);
const $player2 = createPlayer('player2',player2);


$arenas.appendChild($player1);

$arenas.appendChild($player2);
