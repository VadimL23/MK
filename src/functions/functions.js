import { HIT, ATTACK, logs } from '../store';

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

const setPlayerWidth = (selector,width) =>{
    selector.querySelector('.life').style.width = width + '%';
}

const $ = (selector)=>{return document.querySelector(selector)}

const $chat = $(".chat");

const createElement = (el, className)=>{
    const E = document.createElement(el);
    className && E.classList.add(className);
    return E;
    }

const playerWin = (name) =>{
    const $winTitle = createElement("div","loseTitle");
   name !== undefined ?   $winTitle.innerHTML = `${name}`+ " win...": $winTitle.innerHTML ="draw";
    return $winTitle;
}

function changeHP(val){
    this.hp=this.hp - val;
    if (this.hp <=0 ) {this.hp=0;return 0;} else{return this.hp;}
};


function renderHP(){
 elHP.call(this).style.width = this.hp + '%';
};

function createReloadButton(){
    let $reloadWrap = createElement("div","reloadWrap");
    let $reloadButton = createElement("button","button");
    $reloadButton.innerHTML = "Restart";
    $reloadButton.addEventListener("click",()=>{window.location.reload()})
    $reloadWrap.appendChild($reloadButton);
    return $reloadWrap;
}

function getRandom(arr){
  return  arr[Math.floor(Math.random()*arr.length)];
}

function enemyAttack(){
    return {
        hit:getRandom(ATTACK),
        defence:getRandom(ATTACK),
        value:HIT[`${getRandom(ATTACK)}`]
    }
}


function generateLogs(type, player1, player2){
 let text = "";
    const date = new Date();


    switch(type){
    case "start":{
           text = logs["start"].replace('[time]',date.toLocaleTimeString()).replace('[player1]',player1.name).replace('[player2]', player2.name); 
        break;     
        }
            
        case ("hit"):{
        text= `[${date.toLocaleTimeString()}]` + '[' +
         logs[type][Math.floor(Math.random()*logs[type].length)].replace('[playerKick]',player1.name).replace('[playerDefence]', player2.name)
         + ']' + ` [- ${player1.hp}] [${player1.hp}/100]`;
        break;
        }
            
    case ("defence"):{
        text= `[${date.toLocaleTimeString()}]` + '[' +
         logs[type][Math.floor(Math.random()*logs[type].length)].replace('[playerKick]',player1.name).replace('[playerDefence]', player2.name)
         + ']' + ` [- ${player1.hp}] [${player1.hp}/100]`;
        break;
        }
            
   case ("end"):{
        text= `[${date.toLocaleTimeString()}]` + '[' +
         logs[type][Math.floor(Math.random()*logs[type].length)].replace('[playerWins]',player1.name).replace('[playerLose]', player2.name)
         + ']';
       
       break; 
   }
            
    case ("draw"):{
         text = logs["draw"]
       
       break; 
   }
            
            
    }
    
    
    const el = `<p> ${text} </p>`;
    $chat.insertAdjacentHTML('afterbegin',el);
 
  
 
    
}

 export {
        $,
        createElement,
        changeHP,
        playerWin,
       
        renderHP,
        createReloadButton,
        enemyAttack,
        generateLogs,
            createPlayer,
 }