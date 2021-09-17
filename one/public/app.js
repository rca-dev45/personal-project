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
