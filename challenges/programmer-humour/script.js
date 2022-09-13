let div = document.querySelector('.container');
let button = document.getElementById('button');

button.addEventListener('click', getFetch);


function getFetch(){
    fetch(`https://xkcd.now.sh/?comic=latest`)
    .then(response => response.json())
    .then(comic => 
     div.innerHTML = `<img src="${comic.img}"></img>`
   )
   .catch(error => console.log("Oh no! An error has occurred."))
}