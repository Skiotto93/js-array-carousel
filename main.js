"use strict";

//Includo le immagini in un arrey
const images = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'];
//Creo un div con classe items
const items = document.querySelector(".items");
//Creo i div con la classe item
for(let i = 0; i < images.length ; i++) {
    const item = document.createElement("div");
    item.classList.add("item");
    //Aggiungo la classe active alla prima image
    if ( i === 0 ) {
        item.classList.add("active");        
    }
    //Creo l'elemento img con attributo src=img 
    const img = document.createElement("img")
    img.setAttribute("src", images[i]);
    item.append(img);
    items.append(item);
}

let active = 0;

const prev = document.querySelector(".next");
prev.addEventListener('click', function() {
    
}
)
