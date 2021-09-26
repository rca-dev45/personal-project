//Section 13



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