//Section 11
//Rest & Spread
//Default Parameters
//Destructuring

// function multiply(x,y){
//     if(typeof y === 'undefined'){
//         y = 1
//     }
//     return x * y;
// };


// function multiply(x,y){
//     y = typeof y === 'undefined' ? 1 : y
//     return x * y;
// };

// function multiply1(a, b = 1){
//     return a * b;
// };

const greet = (person,greeting='hi')=>{
    console.log(`${greeting}, ${person}!`)
};

const blah = (x, y=[1,2,3])=>{
    console.log(x, y);
};

const greet2 = (person,greeting='hi',punctuation='!')=>{
    console.log(`${greeting}, ${person}${punctuation}`)
};

//Spread

// function giveMeFour(a,b,c,d){
//     console.log('a',a);
//     console.log('b',b);
//     console.log('c',c);
//     console.log('d',d);
// };

const colors =['red','orange', 'yellow','green'];

const cephalopods = ['dumbo octopus','humboldt squid','flamboyant cuttlefish'];

const gastropods = ['giant african snail','banana slugs','variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];


const feline ={
    legs: 4,
    family: 'Felidae'
};

const canine ={
    family: 'Caninae',
    furry: true,
    legs: 4
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true,

};

const houseCat ={
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

const catDog ={
    ...canine, ...feline
}

const tripod = {
    legs: 3,
    ...canine
}

