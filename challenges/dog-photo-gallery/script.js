let button = document.getElementById('button');
button.innerText = "Add image";
let UList = document.getElementsByClassName('dog')[0];

button.addEventListener('click', getImageFetch);


function getImageFetch(){
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((response) => response.json())
    .then((image) => {
        // console.log(image.message);
        let list = document.createElement('li');
     list.innerHTML = `<img src="${image.message}"></img>`;
     UList.appendChild(list);
    })
    .catch(error => console.log(error))
}
let button2 = document.getElementById('button2');
button2.innerText = "Delete image";

button2.addEventListener('click', removeImage);

function removeImage(){
    UList.removeChild(UList.lastElementChild);
}