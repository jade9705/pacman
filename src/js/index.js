'use strict';

console.log('it works!');

  document.addEventListener('keydown', (event) => {
    const pacmanElm = document.querySelector(".entity")
      if(event.key === 'ArrowRight') { 
          const tiles = pacmanElm.style.transform += 'translate(85px, 0px)';
        if (pacmanElm.style.backgroundPositionX === '100%') {
            pacmanElm.style.backgroundPositionX = '0%'
        } else {
            pacmanElm.style.backgroundPositionX = '100%'
        };
      }
    })

 