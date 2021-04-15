const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot']; 


const heroes = [
    {
        id:1,
        name:'Scorpion',
        hp:100,
        img:"http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
        weapon:[],
        attack:()=>{
            console.log(this.name+' '+'Fight..');
        }
        
    },
    
        {
        id: 2,
        name:'Kitana',
        hp:100,
        img:"http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
        weapon:[],
        attack:()=>{
            console.log(this.name+' '+'Fight..');
        }
        
    },
    
            {
        id: 3,
        name:'Liukang',
        hp:100,
        img:"http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
        weapon:[],
        attack:()=>{
            console.log(this.name+' '+'Fight..');
        }
        
    },
    
               {
        id: 4,
        name:'Sonya',
        hp:100,
        img:"http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
        weapon:[],
        attack:()=>{
            console.log(this.name+' '+'Fight..');
        }
        
    },
               {
        id: 5,
        name:'Subzero',
        hp:100,
        img:"http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
        weapon:[],
        attack:()=>{
            console.log(this.name+' '+'Fight..');
        }
        
    },
    
];
 
 export default heroes;

export {
    HIT,
    ATTACK,
  }