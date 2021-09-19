//Section 12

const getStats = (arr) =>{
    const max= Math.max(...arr);
    const min= Math.min(...arr);
    const sum= arr.reduce((sum, r)=>sum + r);
    const avg= sum/arr.length;
    return {
        max:max,
        min:min,
        sum:sum,
        avg:avg
    }
}

const getStats = (arr) =>{
    const max= Math.max(...arr);
    const min= Math.min(...arr);
    const sum= arr.reduce((sum, r)=>sum + r);
    const avg= sum/arr.length;
    return {
        max,
        min,
        sum,
        avg
    }
}


const reviews = [4.5,5.0,3.44,2.8,3.5,4.0,3.5];

const stats= getStats(reviews);

const role= 'host';
const person = 'Jools Holland';
const role2 = 'Director'
const person2= 'James Cameron'

// const team ={}
// team[role]=person;
// team[role2]= person2;

const team ={
    [role]:person,
    [role2]:person2,
    [1+6+9]:'sixteen'
}

// function addProp(obj,k,v) {
//     const copy = {...obj};
//     copy[k]=v;
//     return copy;   
// }

// const addProp= (obj,k,v)=>{
//     return{
//         ...obj,
//         [k]:v
//     }
// }

const addProp= (obj,k,v)=>({...obj,[k]:v});

const res = addProp(team,'happy',':)');

const add = function(x,y){
    return x + y
}

const math = {
    add
}

const auth = {
    username: 'TommyBot',
    login(){
        console.log('LOGGED YOU IN')
    },
    logout(){
        console.log("GOODBYE")
    }
}

//this

function sayHi(){
    console.log("Hi")
    console.log(this);
}

const greet = function() {
    console.log(this);
    
}

const person = {
    first: 'Cher',
    last: 'Sarkisian',
    nickName:'Cher!',
    fullName(){
        const {first,last,nickName}= this;
        return `${first} ${last} aka ${nickName}`;
    },
    printBio(){
        console.log(this);
       const fullName= this.fullName();
       console.log(`${fullName} is a person`)

    },
    laugh:()=>{
        console.log(this);
        console.log(`${this.nickName} says HAHA`);
    }
}

// const printBio = person.printBio;
const annoyer= {
 phrases:["literally","cray cray", "I can't even","totes","YOLO","Can't stop won't stop"],
 pickPhrase(){
     const {phrases}= this;
     const indx = Math.floor(Math.random() * phrases.length);
     return phrases[indx]
 },
 start(){
     this.timerId = setInterval(()=>{
         console.log(this.pickPhrase());
     },3000);
 },
 stop(){
     clearInterval(this.timerId);
     console.log("Phew");
 }
}

// const suits =['hearts','diamonds','spades','club'];
// const values= 'A,2,3,4,5,6,7,8,9,10,J,Q,K';


function makeDeck(){
    const deck = [];
    const suits =['hearts','diamonds','spades','club'];
    const values= 'A,2,3,4,5,6,7,8,9,10,J,Q,K';
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

// const myDeck = makeDeck();

function drawCard(deck){
    return deck.pop()
}

// const card1 = drawCard(myDeck);

const myDeck = {
    deck: [],
    drawnCards:[],
    suits: ['hearts','diamonds','spades','club'],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    ininitializeDeck(){
    const {suit,values,deck}=this;
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
    },
    drawCard(){
      const card = this.deck.pop();
      this.drawCards.push(card)
      return card;
    },
    dealCards(numCards){
        const cards = [];
        for(let i = 0; i <numCards; i++){
            cards.push(this.drawCard())
        }
        return cards;
    },
    shuffle(){
        const {deck}= this;
        for(let i =deck.length -1; i>0; i--){
            let j = Math.floor(Math.random()*(i + 1));
            [deck[i],deck[j]] = [deck[j], deck[i]];
        }
    }
}

function makeDeck(){
 return{
    deck: [],
    drawnCards:[],
    suits: ['hearts','diamonds','spades','club'],
    values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    ininitializeDeck(){
    const {suit,values,deck}=this;
    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
    },
    drawCard(){
      const card = this.deck.pop();
      this.drawCards.push(card)
      return card;
    },
    dealCards(numCards){
        const cards = [];
        for(let i = 0; i <numCards; i++){
            cards.push(this.drawCard())
        }
        return cards;
    },
    shuffle(){
        const {deck}= this;
        for(let i =deck.length -1; i>0; i--){
            let j = Math.floor(Math.random()*(i + 1));
            [deck[i],deck[j]] = [deck[j], deck[i]];
        }
    }
 }
}

const bikeDeck = makeDeck();
