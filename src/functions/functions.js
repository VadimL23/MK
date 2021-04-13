
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
    return this.player;
}

function renderHP(selector){
 selector.querySelector('.life').style.width = this.hp + '%';
};

function createReloadButton(){
    let $reloadWrap = createElement("div","reloadWrap");
    let $reloadButton = createElement("button","button");
    $reloadButton.innerHTML = "Restart";
    $reloadButton.addEventListener("click",()=>{window.location.reload()})
    $reloadWrap.appendChild($reloadButton);
    return $reloadWrap;
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