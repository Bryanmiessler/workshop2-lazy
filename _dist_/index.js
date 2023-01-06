import h from "../_snowpack/pkg/hyperscript.js";
import { registerImage } from "./lazy.js";

const min = 1;
const max = 122;

const random = () => Math.floor(Math.random() * (max-min)) + min;


function createImageNode(){
  // const imagen = document.createElement('img');
  // imagen.className = 'mx-auto rounded-md bg-gray-300';
  // imagen.width = '320';
  // imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` 
  const imagen = h('img.mx-auto.rounded-md.bg-gray-300', {
    width:'320',
    "data-src": `https://randomfox.ca/images/${random()}.jpg`
  })
  

  // const divImg = document.createElement('div');
  // divImg.className = 'p-4';
  const divImg = h('div.p-4', imagen);

  return divImg;
}

const imgContainer = document.querySelector('#images');
const addButton = document.querySelector('#agregarImg');
const deleButton = document.querySelector('#limpiarImg');

function deleteImages(){
  [...imgContainer.childNodes].forEach(child => {
      child.remove(); 
  }) 
}

function addImage() {
  const newImage = createImageNode();
  imgContainer.append(newImage);
  registerImage(newImage);
}

addButton.addEventListener('click', addImage);
deleButton.addEventListener('click', deleteImages)



