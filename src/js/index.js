'use strict';

console.log('it works!');
const pacmanElm = document.querySelector(".entity");
let xpos = 0;
let ypos = 0;
const TILE_SIZE = 85;


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight') { 
      pacmanElm.style.backgroundPositionY = '0%';
      pacman1.moveRight();
      pacman1.update();
    };
  });
  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowLeft') { 
      pacmanElm.style.backgroundPositionY = '33%';
      pacman1.moveLeft();
      pacman1.update();
    };
  });
  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowUp') { 
      pacmanElm.style.backgroundPositionY = '100%';
      pacman1.moveUp();
      pacman1.update();
    };
  });
  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown') { 
      pacmanElm.style.backgroundPositionY = '66%';
      pacman1.moveDown();
      pacman1.update();
    };
  });


    class Pacman{
      constructor(xpos, mouth) {
        this.xpos = xpos;
        this.mouth = mouth;
      };

      moveRight() {
        xpos += TILE_SIZE;
      };
      moveLeft() {
        xpos -= TILE_SIZE;
      };
      moveUp() {
        ypos += TILE_SIZE;
      };
      moveDown() {
        ypos -= TILE_SIZE;
      };

      update() {
        pacmanElm.style.left = `${xpos}px`;
        pacmanElm.style.bottom = `${ypos}px`;


        if (pacmanElm.style.backgroundPositionX === '100%') {
          pacmanElm.style.backgroundPositionX = '0%'
        } else {
          pacmanElm.style.backgroundPositionX = '100%'
        };
      };

    };

    let pacman1 = new Pacman(0, '100%');

