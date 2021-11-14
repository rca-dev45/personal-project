//Section 13
//almost all console and html work

//Section 14
const allLis = document.querySelectorAll('li');
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

const todo = document.querySelector('#todos, .todo');

// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

const newImg = document.createElement('img');
// newImg.src = "https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg"
newImg.style.width = "200px";
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr Bubz Video! Click MEEE'
// newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';

const firstP = document.querySelector('p');
firstP.appendChild(newLink);

// for (let i = 0; i<allLis.length; i++){
//     // console.log(allLis[i].innerText);
//     allLis[i].innerText = "We are the champions"
// }

// for(let li of allLis){
//     li.innerHTML = "We are <b> the Champions</b>"
// }

allLis.forEach((li, i)=>{
    const color = colors[i];
    li.style.color= color;
})

//Section 15
const btn = document.querySelector('button');

btn.addEventListener('mouseover',function(){
    console.log('MOUSED OVER ME');
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
    console.log('MOUSED OVER ME!');
});

btn.addEventListener('click', function(){
    btn.innerText = "You got ME!";
    document.body.style.backgroundColor = 'green';
});

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];

const container = document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
}