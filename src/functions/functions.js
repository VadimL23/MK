
const setPlayerWidth = (selector,width) =>{
    selector.querySelector('.life').style.width = width + '%';
}

   const $ = (selector)=>{return document.querySelector(selector)}

    const createElement = (el, className)=>{
    const E = document.createElement(el);
    className && E.classList.add(className);
    return E;
    }


//const changeHP = (selector,playerObj)=>{
//    
//  playerObj.hp -= Math.ceil(Math.random()*20);
//  if (playerObj.hp <= 0) { playerObj.hp=0; setPlayerWidth(selector,0);return 0;}else{setPlayerWidth(selector,playerObj.hp);return playerObj.hp;};
//  }




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
    return this.player;
}

function renderHP(selector){
 selector.querySelector('.life').style.width = this.hp + '%';
};

function createReloadButton(){
    $reloadWrap = createElement("div","reloadWrap");
     $reloadButton = createElement("button","button");
    $reloadWrap.innerHtml=$reloadButton;
}



 export {
        $,
        createElement,
        changeHP,
        playerWin,
        elHP,
        renderHP,
        createReloadButton
 }