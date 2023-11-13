
const changeButton = document.getElementById('change')
changeButton.addEventListener('click',function(){
    changeButton.innerText = 'Hello Everyone'
})



function makeindigo(){
    document.body.style.backgroundColor ='indigo';
}

 const cyanButton = document.getElementById("make-cyan");
 cyanButton.onclick = makecyan;
 function makecyan() {
    document.body.style.backgroundColor='cyan'
 }
const yellowButton = document.getElementById("yellow");
yellowButton.onclick = function (){
    document.body.style.backgroundColor='yellow'
}

const orangeButton = document.getElementById('orange');
orangeButton.addEventListener('click', function (){
    document.body.style.backgroundColor='orange'   
})

document.getElementById('pink').addEventListener('click',function(){
    document.body.style.backgroundColor='pink'
})
document.getElementById('plum').addEventListener('click',function(){
    document.body.style.backgroundColor='plum'
})

