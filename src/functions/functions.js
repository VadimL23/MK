
const $ = (selector)=>{return document.querySelector(selector)}
const createElement = (el)=>{return document.createElement(el);}
const a = ()=>{alert('hi')}
 
 export {
    $,
    createElement,
    a
 }