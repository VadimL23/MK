import { HIT, ATTACK } from '../store';

const setPlayerWidth = (selector,width) =>{
    selector.querySelector('.life').style.width = width + '%';
}

const $ = (selector)=>{return document.querySelector(selector)}

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


function elHP(){
  let life = $(`.player${this.player} .life`);
  return life;
}

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




 export {
        $,
        createElement,
        changeHP,
        playerWin,
        elHP,
        renderHP,
        createReloadButton,
        enemyAttack
 }