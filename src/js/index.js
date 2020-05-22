'use strict';

console.log('it works!');

const TILE_SIZE = 85;

class Pacman{
  constructor(xpos, ypos, mouth) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = mouth;
  };

  render() {
    const pacmanElm = document.createElement('div');
    pacmanElm.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight') { 
        pacmanElm.style.backgroundPositionY = '0%';
        this.moveRight();
        this.switch();
        this.update();
      };
    });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowLeft') { 
        pacmanElm.style.backgroundPositionY = '33%';
        this.moveLeft();
        this.switch();
        this.update();
      };
    });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowUp') { 
        pacmanElm.style.backgroundPositionY = '100%';
        this.moveUp();
        this.switch();
        this.update();
      };
    });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowDown') { 
        pacmanElm.style.backgroundPositionY = '66%';
        this.moveDown();
        this.switch();
        this.update();
      };
    });
    return pacmanElm;
  };

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  moveRight() {
    this.xpos += TILE_SIZE;
  };
  moveLeft() {
    this.xpos -= TILE_SIZE;
  };
  moveUp() {
    this.ypos += TILE_SIZE;
  };
  moveDown() {
    this.ypos -= TILE_SIZE;
  };

  switch() {
    if (this.mouth === 'open') {
      this.mouth = 'closed';
    } else {
      this.mouth = 'open';
    };
  }

  

  update() {
    this.element.style.left = `${this.xpos}px`;
    this.element.style.bottom = `${this.ypos}px`;
    // this.element.style.backgroundPositionX = `${this.mouth}`
    

    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0%'
    } else {
      this.element.style.backgroundPositionX = '100%'
    };
  };

};
  
  const app = document.querySelector('#app');
  let pacman1 = new Pacman(100, 0, 'close');
  pacman1.mount(app);

