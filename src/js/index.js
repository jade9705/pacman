'use strict';

console.log('it works!');

document.addEventListener('click', () => {
    const pacmanElm = document.querySelector(".entity");
    if (pacmanElm.style.backgroundPositionX === '100%') {
        pacmanElm.style.backgroundPositionX = '0%'
    } else {
        pacmanElm.style.backgroundPositionX = '100%'
    };
 
  });