import './style.css';
import {$,createElement,a}  from './functions'
import heroes  from './store'




const $arenas  = $('.arenas');

const createPlayer = (name,heroObj)=>{
try{
    const $playerDiv = createElement('div');
    $playerDiv.classList.add(`${name}`);
       
    const $progressbar = createElement('div');
    $progressbar.classList.add(`progressbar`);
    
    const $life = createElement('div');
    $life.classList.add(`${heroObj.hp}`);
    
     const $name = createElement('div');
     $name.classList.add(`name`);
    $name.innerHTML = `${heroObj.name}`;
    
    const $character = createElement('div');
    $character.classList.add(`character`);
    
    const $img = createElement('img');
    $img.src=heroObj.img;
    
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
   
    $character.appendChild($img);
    
    $playerDiv.appendChild($progressbar);
    $playerDiv.appendChild($character);
    
    $arenas.appendChild($playerDiv);
    return 1;
}
    catch(err){
        console.log("Err create player ",err);
         }
    
}

createPlayer('player1',heroes[0]);

createPlayer('player2',heroes[1]);

//console.log(F.$);
