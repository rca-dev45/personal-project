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

const catDogClone = {
    ...catDog
}

const random = [...'hello', {...catDog}];

//Rest

// function sum(){
//     console.log(arguments);
//     const argsArr = [...arguments]
//     return argsArr.reduce((total,currVal)=>{
//         return total + currVals
//     })
// }

function fullName(first, last){
    console.log(arguments);
    console.log(first);
}

//arguments doesn't work with arrow functions 
const multiply = ()=>{
    console.log(arguments);
}

function sum(...nums) {
    return nums.reduce((total,currVal)=>{
        return total + currVal
    })
}

function fullName(first, last, ...titles){
    console.log("first",first);
    console.log("last",last);
    console.log("titles",titles);
}

const multiply =(...nums)=>(
     nums.reduce((total,currVal)=>{total * currVal})
)

//destructuring

const raceResults =[
    'Eliot Kipe',
    'Fey Lelisa',
    'Galen Rupp',
    'May Helassie',
    'Al Simbu',
    'Jared Ward'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];


const [gold,silver,bronze] = raceResults;

const [first,,, fourth]= raceResults;

const [winner,...others]=raceResults;

const runner = {
    first: 'Eliot',
    last : 'Kipe',
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {first, last, time}= runner;

// const {country: nation} = runner;

// const {honorific: title} = runner;

const {first, last, ...other}= runner;

const results =[{
    first: 'Eliot',
    last : 'Kipe',
    country: 'Kenya',
},
{
    first: 'Fey',
    last : 'Lelisa',
    country: 'Ethiopia'
},
{
    first: 'Galen',
    last : 'Rupp',
    country: 'United States'
}]


const [,{country}] =results;

const [{first:goldWinner},{country}] =results;

const [,silverMedal] =results;
const {country} = silverMedal;


// function print(person){
//     const{first,last,title}=person;
//     console.log(`${first} ${last}, ${title}`)
// }

function print({first,last,title}){
    const{first,last,title}=person;
    console.log(`${first} ${last}, ${title}`)
}

const response=[
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol,statusCode, contentType]){
    console.log(`Status: ${statusCode}`)
}